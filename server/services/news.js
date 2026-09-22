import * as cheerio from 'cheerio'

const NEWS_SOURCE_URL = 'https://www.motqdmon.com/'

const REQUEST_TIMEOUT = 20000
const MAX_ARTICLES_TO_CHECK = 500
const MAX_NEWS_RESULTS = 6

const organizationKeywords = {
  unrwa: [
    'الأونروا',
    'الاونروا',
    'وكالة غوث وتشغيل اللاجئين الفلسطينيين',
    'غوث وتشغيل اللاجئين',
    'unrwa',
  ],

  mosd: [
    'وزارة التنمية الاجتماعية',
    'وزارة التنمية',
    'التنمية الاجتماعية',
  ],

  wfp: [
    'برنامج الأغذية العالمي',
    'برنامج الغذاء العالمي',
    'الأغذية العالمي',
    'wfp',
  ],

  unicef: [
    'اليونيسف',
    'منظمة الأمم المتحدة للطفولة',
    'unicef',
  ],

  prcs: [
    'جمعية الهلال الأحمر الفلسطيني',
    'الهلال الأحمر الفلسطيني',
    'الهلال الاحمر الفلسطيني',
    'palestine red crescent society',
    'palestine red crescent',
    'prcs',
  ],

  blda: [
    'جمعية تطوير بيت لاهيا',
    'تطوير بيت لاهيا',
    'بيت لاهيا',
  ],
}

// روابط أخبار معروفة قد لا تظهر في Blogger Feed
const knownArticleUrls = {
  prcs: [
    'https://www.motqdmon.com/2023/07/90.html',
  ],

  blda: [],

  unrwa: [],

  mosd: [],

  unicef: [],

  wfp: [],
}

function normalizeText(value = '') {
  return String(value)
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function isValidArticleUrl(url) {
  try {
    const parsedUrl = new URL(url)

    const isSupportedProtocol =
      parsedUrl.protocol === 'http:' ||
      parsedUrl.protocol === 'https:'

    const isMotqdmonDomain =
      parsedUrl.hostname === 'www.motqdmon.com' ||
      parsedUrl.hostname === 'motqdmon.com' ||
      parsedUrl.hostname.endsWith('.motqdmon.com')

    const isHomePage =
      parsedUrl.pathname === '/' ||
      parsedUrl.pathname === ''

    return (
      isSupportedProtocol &&
      isMotqdmonDomain &&
      !isHomePage
    )
  } catch {
    return false
  }
}

async function fetchHtml(url) {
  const controller = new AbortController()

  const timeoutId = setTimeout(() => {
    controller.abort()
  }, REQUEST_TIMEOUT)

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language':
          'ar,en-US;q=0.9,en;q=0.8',
        Referer: NEWS_SOURCE_URL,
      },
    })

    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} أثناء فتح الرابط: ${url}`
      )
    }

    return await response.text()
  } finally {
    clearTimeout(timeoutId)
  }
}

function getElementText($, selector) {
  const value = $(selector).first().text()

  return value
    ? value.replace(/\s+/g, ' ').trim()
    : ''
}

function getMetaContent($, selector) {
  const value = $(selector).first().attr('content')
  return value ? value.trim() : ''
}

function extractTitle($) {
  return (
    getMetaContent($, 'meta[property="og:title"]') ||
    getMetaContent($, 'meta[name="twitter:title"]') ||
    getElementText($, 'h1') ||
    getElementText($, 'title')
  ).trim()
}

function extractSummary($) {
  return (
    getMetaContent($, 'meta[property="og:description"]') ||
    getMetaContent($, 'meta[name="description"]') ||
    getMetaContent($, 'meta[name="twitter:description"]') ||
    getElementText($, '.post-content') ||
    getElementText($, '.post-body') ||
    getElementText($, 'article') ||
    getElementText($, 'main')
  )
    .trim()
    .slice(0, 350)
}

function resolveUrl(value, baseUrl) {
  if (!value) return ''

  try {
    return new URL(value, baseUrl).href
  } catch {
    return ''
  }
}

function extractImage($, articleUrl) {
  const image =
    getMetaContent($, 'meta[property="og:image"]') ||
    getMetaContent($, 'meta[name="twitter:image"]') ||
    $('article img').first().attr('src') ||
    $('main img').first().attr('src') ||
    $('img').first().attr('src') ||
    ''

  return resolveUrl(image, articleUrl)
}

function extractDate($) {
  return (
    getMetaContent($, 'meta[property="article:published_time"]') ||
    getMetaContent($, 'meta[name="date"]') ||
    $('time').first().attr('datetime') ||
    getElementText($, 'time') ||
    getElementText($, '.date') ||
    getElementText($, '.post-date') ||
    ''
  ).trim()
}

function extractCategory($) {
  return (
    getMetaContent($, 'meta[property="article:section"]') ||
    getElementText($, '.category') ||
    getElementText($, '.post-category') ||
    'أخبار'
  ).trim()
}

function parseArticleDate(dateValue) {
  if (!dateValue) return 0

  const timestamp = Date.parse(dateValue)

  if (!Number.isNaN(timestamp)) {
    return timestamp
  }

  return 0
}

async function getArticleUrls() {
  console.log(
    'بدء استخراج روابط الأخبار من:',
    NEWS_SOURCE_URL
  )

  const articleMap = new Map()

  // ==============================
  // Blogger Feed
  // ==============================
  try {
    const feedUrl =
      'https://www.motqdmon.com/feeds/posts/default?alt=json&max-results=200'

    console.log('جلب المقالات من Blogger Feed...')

    const feedResponse = await fetch(feedUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36',
        Accept:
          'application/json,text/javascript,*/*;q=0.01',
        'Accept-Language':
          'ar,en-US;q=0.9,en;q=0.8',
      },
    })

    console.log(
      'حالة Blogger Feed:',
      feedResponse.status
    )

    if (feedResponse.ok) {
      const feedData = await feedResponse.json()
      const entries = feedData?.feed?.entry || []

      console.log(
        'عدد المقالات الموجودة في Feed:',
        entries.length
      )

      for (const entry of entries) {
        const links = entry.link || []

        const alternateLink = links.find(
          (link) =>
            link.rel === 'alternate' &&
            link.href
        )

        if (!alternateLink) continue

        const articleUrl = alternateLink.href

        if (!isValidArticleUrl(articleUrl)) continue

        const cleanUrl = articleUrl.split('#')[0]

        const publishedDate =
          entry?.published?.$t ||
          entry?.updated?.$t ||
          ''

        articleMap.set(cleanUrl, {
          url: cleanUrl,
          feedDate: publishedDate,
          feedTimestamp:
            parseArticleDate(publishedDate),
        })
      }
    } else {
      console.log('تعذر قراءة Blogger Feed')
    }
  } catch (error) {
    console.error(
      'خطأ أثناء قراءة Blogger Feed:',
      error.message
    )
  }

  // ==============================
  // الصفحة الرئيسية
  // ==============================
  try {
    console.log(
      'جلب روابط المقالات من الصفحة الرئيسية...'
    )

    const html = await fetchHtml(NEWS_SOURCE_URL)
    const $ = cheerio.load(html)

    $('a[href]').each((index, element) => {
      const href = $(element).attr('href')

      if (!href) return

      const absoluteUrl = resolveUrl(
        href,
        NEWS_SOURCE_URL
      )

      if (!isValidArticleUrl(absoluteUrl)) return

      let parsedUrl

      try {
        parsedUrl = new URL(absoluteUrl)
      } catch {
        return
      }

      const isBlogArticle =
        /^\/\d{4}\/\d{1,2}\//.test(
          parsedUrl.pathname
        )

      if (!isBlogArticle) return

      const cleanUrl = absoluteUrl.split('#')[0]

      if (!articleMap.has(cleanUrl)) {
        articleMap.set(cleanUrl, {
          url: cleanUrl,
          feedDate: '',
          feedTimestamp: 0,
        })
      }
    })
  } catch (error) {
    console.error(
      'خطأ أثناء قراءة الصفحة الرئيسية:',
      error.message
    )
  }

  const articles =
    Array.from(articleMap.values())

  articles.sort(
    (a, b) =>
      b.feedTimestamp -
      a.feedTimestamp
  )

  console.log(
    'إجمالي روابط المقالات:',
    articles.length
  )

  console.log(
    'أحدث روابط المقالات:',
    articles
      .slice(0, 10)
      .map((article) => ({
        url: article.url,
        date: article.feedDate,
      }))
  )

  return articles.slice(
    0,
    MAX_ARTICLES_TO_CHECK
  )
}

async function fetchArticle(articleInfo) {
  const articleUrl = articleInfo.url

  try {
    console.log(
      'فحص المقال:',
      articleUrl
    )

    const html = await fetchHtml(articleUrl)
    const $ = cheerio.load(html)

    const title = extractTitle($)
    const summary = extractSummary($)
    const image = extractImage($, articleUrl)

    const pageDate = extractDate($)

    const date =
      pageDate ||
      articleInfo.feedDate ||
      ''

    const category = extractCategory($)

    if (!title) {
      console.log(
        'تم تجاهل المقال لعدم وجود عنوان:',
        articleUrl
      )

      return null
    }

    const article = {
      title,
      summary,
      image,
      date,
      category,
      url: articleUrl,
      source: 'المتقدمون',
      sourceUrl: NEWS_SOURCE_URL,
      timestamp:
        parseArticleDate(date) ||
        articleInfo.feedTimestamp ||
        0,
    }

    console.log(
      'بيانات المقال:',
      {
        title: article.title,
        category: article.category,
        date: article.date,
      }
    )

    return article
  } catch (error) {
    console.error(
      'تعذر قراءة المقال:',
      articleUrl,
      error.message
    )

    return null
  }
}

function articleMatchesOrganization(
  article,
  slug
) {
  const keywords =
    organizationKeywords[slug]

  if (!keywords || !article) {
    return false
  }

  const searchableText =
    normalizeText(
      [
        article.title,
        article.summary,
        article.category,
      ].join(' ')
    )

  return keywords.some(
    (keyword) =>
      searchableText.includes(
        normalizeText(keyword)
      )
  )
}

export async function getNewsBySlug(slug) {
  if (!organizationKeywords[slug]) {
    return {
      source: 'المتقدمون',
      sourceUrl: NEWS_SOURCE_URL,
      news: [],
      message:
        `لا يوجد تصنيف معرف للجهة: ${slug}`,
    }
  }

  console.log(
    `بدء جلب أخبار الجهة: ${slug}`
  )

  const articleInfos =
    await getArticleUrls()

  // ==============================
  // إضافة الروابط المعروفة يدويًا
  // ==============================
  const knownUrls =
    knownArticleUrls[slug] || []

  for (const url of knownUrls) {
    if (!url) continue

    const alreadyExists =
      articleInfos.some(
        (article) =>
          article.url === url
      )

    if (!alreadyExists) {
      console.log(
        'إضافة رابط معروف يدويًا:',
        url
      )

      articleInfos.push({
        url,
        feedDate: '',
        feedTimestamp: 0,
      })
    }
  }

  console.log(
    `عدد المقالات التي سيتم فحصها للجهة ${slug}:`,
    articleInfos.length
  )

  const matchedArticles = []

  for (const articleInfo of articleInfos) {
    const article =
      await fetchArticle(articleInfo)

    if (!article) continue

    const matches =
      articleMatchesOrganization(
        article,
        slug
      )

    console.log(
      'نتيجة تصنيف المقال:',
      {
        title: article.title,
        slug,
        matches,
      }
    )

    if (matches) {
      matchedArticles.push(article)

      console.log(
        `تمت إضافة المقال. العدد الحالي: ${matchedArticles.length}`
      )
    }
  }

  matchedArticles.sort(
    (a, b) =>
      b.timestamp -
      a.timestamp
  )

  const news =
    matchedArticles
      .slice(0, MAX_NEWS_RESULTS)
      .map((article) => {
        const {
          // eslint-disable-next-line no-unused-vars
          timestamp,
          ...publicArticle
        } = article

        return publicArticle
      })

  console.log(
    `انتهى جلب الأخبار للجهة ${slug}. العدد: ${news.length}`
  )

  return {
    source: 'المتقدمون',
    sourceUrl: NEWS_SOURCE_URL,
    news,
  }
}