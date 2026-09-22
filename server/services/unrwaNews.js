import * as cheerio from 'cheerio'

const UNRWA_PORTAL_URL =
  'https://gazaportal.unrwa.org/'

function cleanText(text) {
  return text.replace(/\s+/g, ' ').trim()
}

async function fetchArticle(articleUrl) {
  const response = await fetch(articleUrl)

  if (!response.ok) {
    console.error(
      `Failed to fetch article: ${articleUrl} (${response.status})`
    )

    return null
  }

  const html = await response.text()
  const $ = cheerio.load(html)

  // العنوان
  let title =
    $('meta[property="og:title"]').attr('content') || ''

  if (!title) {
    $('h1, h2').each((index, element) => {
      if (title) return

      const text = cleanText($(element).text())

      if (
        text.length > 10 &&
        !text.includes('التصنيفات')
      ) {
        title = text
      }
    })
  }

  // الصورة
  let image = null

  $('img').each((index, element) => {
    if (image) return

    const src =
      $(element).attr('src') ||
      $(element).attr('data-src') ||
      $(element).attr('data-lazy-src')

    if (!src) return

    const absoluteUrl = new URL(
      src,
      articleUrl
    ).href

    if (
      !absoluteUrl.includes('logo') &&
      !absoluteUrl.includes('/theme/')
    ) {
      image = absoluteUrl
    }
  })

  // صورة Open Graph
  if (!image) {
    const ogImage = $(
      'meta[property="og:image"]'
    ).attr('content')

    if (
      ogImage &&
      !ogImage.includes('logo')
    ) {
      image = new URL(
        ogImage,
        articleUrl
      ).href
    }
  }

  // التاريخ
  const bodyText = cleanText(
    $('body').text()
  )

  const dateMatch = bodyText.match(
    /(\d{4})\s+(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)/
  )

  let date = null

  if (dateMatch) {
    date =
      `${dateMatch[1]}-${dateMatch[3]}-${dateMatch[2]}`
  }

  // الملخص
// الملخص
let summary = null

const articleText = []

$('h3, p').each((index, element) => {
  const text = cleanText(
    $(element).text()
  )

  if (!text) return

  if (
    text.includes('جاري تحميل الإشعارات') ||
    text.includes('تعليمات تسجيل الدخول') ||
    text.includes('التصنيفات')
  ) {
    return
  }

  if (
    text === 'الأخبار' ||
    text === 'اعلانات' ||
    text === 'المناقصات'
  ) {
    return
  }

  if (text.length > 15) {
    articleText.push(text)
  }
})

if (articleText.length > 0) {
  summary = articleText[0]
}

  // التصنيف
  let category = null

  $('a').each((index, element) => {
    const text = cleanText(
      $(element).text()
    )

    if (
      text === 'الأخبار' ||
      text === 'اعلانات' ||
      text === 'المناقصات'
    ) {
      category = text
    }
  })

  return {
    title: cleanText(title),
    date,
    summary: summary || null,
    image,
    category,
    url: articleUrl,
  }
}

export async function getUnrwaNews() {
  const response = await fetch(
    UNRWA_PORTAL_URL
  )

  if (!response.ok) {
    throw new Error(
      `UNRWA portal returned status ${response.status}`
    )
  }

  const html = await response.text()
  const $ = cheerio.load(html)

  const articleUrls = []

  $('a[href*="/Article/ViewArticle"]').each(
    (index, element) => {
      const href = $(element).attr('href')

      if (!href) return

      const url = new URL(
        href,
        UNRWA_PORTAL_URL
      ).href

      const exists = articleUrls.some(
        (item) => item.url === url
      )

      if (!exists) {
        articleUrls.push({
          url,
        })
      }
    }
  )

  const articles = []

  for (const article of articleUrls.slice(0, 10)) {
    try {
      const details = await fetchArticle(
        article.url
      )

      if (
        details &&
        details.title
      ) {
        articles.push(details)
      }
    } catch (error) {
      console.error(
        `Article error: ${article.url}`,
        error
      )
    }
  }

  return {
    source: 'UNRWA',
    sourceUrl: UNRWA_PORTAL_URL,
    news: articles,
  }
}