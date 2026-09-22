import { useEffect, useState } from 'react'
import {
  useParams,
  Link,
} from 'react-router-dom'


function AidDetails() {

  const { slug } =
    useParams()


  const [news, setNews] =
    useState([])

  const [newsLoading, setNewsLoading] =
    useState(false)

  const [newsError, setNewsError] =
    useState(false)


  /*
   * =====================================================
   * بيانات الجهات
   * =====================================================
   */

  const aids = {

    unrwa: {
      name:
        'وكالة الأونروا',

      status:
        'الخدمات متاحة حسب البرنامج',

      logo:
        '/images/logos/unrwa.svg',

      description:
        'وكالة الأمم المتحدة لإغاثة وتشغيل لاجئي فلسطين، وتقدم مجموعة من الخدمات والبرامج الإنسانية وفق البرامج والأهلية المعتمدة.',

      officialLink:
        'https://gazaaid.unrwa.org/Login/Index',

      website:
        'https://www.unrwa.org/',
    },


    mosd: {
      name:
        'وزارة التنمية الاجتماعية الفلسطينية',

      status:
        'بوابة المساعدات الاجتماعية',

      description:
        'خدمات ومساعدات اجتماعية وغذائية وطارئة للأسر والفئات المستحقة وفق المعايير والبرامج المعتمدة.',

      officialLink:
        'https://aid.mosd.gov.ps/',
    },


    prcs: {
      name:
        'جمعية الهلال الأحمر الفلسطيني',

      status:
        'خدمات ومساعدات إنسانية',

      description:
        'خدمات ومساعدات إنسانية وإغاثية وصحية في فلسطين.',

      officialLink:
        'https://www.palestinercs.org/ar',
    },


    blda: {
      name:
        'جمعية تطوير بيت لاهيا',

      status:
        'برامج إغاثية وتنموية',

      description:
        'جمعية خيرية غير ربحية تقدم برامج تنموية وتدخلات إغاثية في أوقات الطوارئ والأزمات.',

      officialLink:
        'https://blda.ps/ar/',
    },


    unicef: {
      name:
        'اليونيسف - دولة فلسطين',

      status:
        'برامج إنسانية ودعم للأطفال',

      description:
        'برامج إنسانية تشمل المياه والصحة والتغذية والتعليم وحماية الأطفال والدعم النقدي وفق البرامج والفئات المستهدفة.',

      officialLink:
        'https://www.unicef.org/sop/',
    },


    wfp: {
      name:
        'برنامج الأغذية العالمي',

      status:
        'مساعدات غذائية ونقدية',

      description:
        'يقدم مساعدات غذائية ونقدية وخدمات تغذية ودعمًا لسبل العيش للأسر المتضررة.',

      officialLink:
        'https://www.wfp.org/emergencies/palestine-emergency',
    },

  }


  const aid =
    aids[slug]


  /*
   * =====================================================
   * جلب الأخبار من المتقدمون
   * =====================================================
   */

  useEffect(() => {

    if (!slug) {
      return
    }


    let cancelled =
      false


    async function loadNews() {

      setNewsLoading(true)

      setNewsError(false)


      try {

        const response =
          await fetch(
            `/api/news/${slug}`
          )


        if (!response.ok) {
          throw new Error(
            `Request failed with status ${response.status}`
          )
        }


        const data =
          await response.json()


        if (
          !cancelled &&
          data.success &&
          Array.isArray(
            data.news
          )
        ) {

          setNews(
            data.news
          )

        } else if (
          !cancelled
        ) {

          setNews([])

          setNewsError(
            true
          )
        }

      } catch (error) {

        console.error(
          'News frontend error:',
          error
        )


        if (
          !cancelled
        ) {

          setNews([])

          setNewsError(
            true
          )
        }

      } finally {

        if (
          !cancelled
        ) {

          setNewsLoading(
            false
          )
        }
      }
    }


    loadNews()


    return () => {
      cancelled = true
    }

  }, [slug])


  /*
   * =====================================================
   * تنسيق التاريخ
   * =====================================================
   */

  function formatDate(
    dateString
  ) {

    if (!dateString) {
      return ''
    }


    /*
     * إذا كان التاريخ بصيغة ISO
     */

    const parsedDate =
      new Date(
        dateString
      )


    if (
      !Number.isNaN(
        parsedDate.getTime()
      )
    ) {

      return new Intl.DateTimeFormat(
        'ar',
        {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }
      ).format(
        parsedDate
      )
    }


    return dateString
  }


  /*
   * =====================================================
   * الجهة غير موجودة
   * =====================================================
   */

  if (!aid) {

    return (

      <main
        className="aid-details-page"
      >

        <section
          className="aid-not-found"
        >

          <div
            className="aid-not-found-icon"
          >
            🔎
          </div>


          <h1>
            الجهة غير موجودة
          </h1>


          <p>
            يبدو أن الرابط الذي حاولت الوصول إليه
            غير متوفر حاليًا.
          </p>


          <Link
            to="/aids"
            className="aid-back-button"
          >
            العودة إلى المساعدات
            <span>
              ←
            </span>
          </Link>

        </section>

      </main>

    )
  }


  return (

    <main
      className="aid-details-page"
    >


      {/* =====================================================
          الإعلان العلوي
      ===================================================== */}

      <section
        className="ad-placeholder aid-top-ad"
        aria-label="مساحة إعلانية"
      >

        <span>
          مساحة إعلانية
        </span>

      </section>


      {/* =====================================================
          معلومات الجهة
      ===================================================== */}

      <section
        className="aid-details-header"
      >

        <Link
          to="/aids"
          className="aid-back-link"
        >
          → العودة إلى المساعدات
        </Link>


        <div
          className="aid-details-card"
        >

          <div
            className="aid-details-logo"
          >

            {aid.logo ? (

              <img
                src={aid.logo}
                alt={`شعار ${aid.name}`}
              />

            ) : (

              <span>
                🤝
              </span>

            )}

          </div>


          <div
            className="aid-details-content"
          >

            <span
              className="aid-details-status"
            >
              🟢 {aid.status}
            </span>


            <h1>
              {aid.name}
            </h1>


            <p>
              {aid.description}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          الأخبار
      ===================================================== */}

      <section
        className="aid-news-section"
      >

        <div
          className="aid-section-heading"
        >

          <span>
            📰
          </span>


          <div>

            <h2>
              آخر الأخبار والتنويهات
            </h2>


            <p>
              أحدث المعلومات والأخبار المتعلقة بالجهة.
            </p>

          </div>

        </div>


        {/* تحميل */}

        {newsLoading && (

          <div
            className="aid-news-placeholder"
          >

            <div
              className="news-placeholder-icon"
            >
              ⏳
            </div>


            <h3>
              جاري تحميل الأخبار...
            </h3>


            <p>
              نبحث عن آخر الأخبار والتنويهات.
            </p>

          </div>

        )}


        {/* خطأ */}

        {!newsLoading &&
          newsError && (

            <div
              className="aid-news-placeholder"
            >

              <div
                className="news-placeholder-icon"
              >
                📰
              </div>


              <h3>
                تعذر تحميل الأخبار حاليًا
              </h3>


              <p>
                يمكنك الوصول إلى المعلومات الرسمية
                من خلال الموقع الرسمي للجهة.
              </p>


              <a
                href={
                  aid.officialLink
                }
                target="_blank"
                rel="noopener noreferrer"
                className="aid-official-button"
              >
                زيارة الموقع الرسمي
                <span>
                  ↗
                </span>
              </a>

            </div>

          )}


        {/* لا توجد أخبار */}

        {!newsLoading &&
          !newsError &&
          news.length === 0 && (

            <div
              className="aid-news-placeholder"
            >

              <div
                className="news-placeholder-icon"
              >
                📰
              </div>


              <h3>
                لا توجد أخبار متاحة حاليًا
              </h3>


              <p>
                سنعرض هنا آخر الأخبار والتنويهات
                عند توفرها.
              </p>

            </div>

          )}


        {/* =====================================================
            بطاقات الأخبار
        ===================================================== */}

        {!newsLoading &&
          !newsError &&
          news.length > 0 && (

            <div
              className="aid-news-grid"
            >

              {news.map(
                (
                  item,
                  index
                ) => (

                  <article
                    className="aid-news-card"
                    key={
                      `${item.url}-${index}`
                    }
                  >

                    {item.image && (

                      <div
                        className="aid-news-image"
                      >

                        <img
                          src={
                            item.image
                          }
                          alt=""
                          loading="lazy"
                        />

                      </div>

                    )}


                    <div
                      className="aid-news-content"
                    >

                      {item.category && (

                        <span
                          className="aid-news-category"
                        >
                          {item.category}
                        </span>

                      )}


                      <h3>
                        {item.title}
                      </h3>


                      {item.summary && (

                        <p>
                          {item.summary}
                        </p>

                      )}


                      {item.date && (

                        <time>
                          📅 {formatDate(
                            item.date
                          )}
                        </time>

                      )}


                      <a
                        href={
                          item.url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aid-news-link"
                      >

                        قراءة الخبر
                        <span>
                          ←
                        </span>

                      </a>

                    </div>

                  </article>

                )
              )}

            </div>

          )}

      </section>


      {/* =====================================================
          الإعلان داخل الصفحة
      ===================================================== */}

      <section
        className="ad-placeholder aid-middle-ad"
        aria-label="مساحة إعلانية"
      >

        <span>
          مساحة إعلانية
        </span>

      </section>


      {/* =====================================================
          الخدمات والروابط
      ===================================================== */}

      <section
        className="aid-services-section"
      >

        <div
          className="aid-section-heading"
        >

          <span>
            🔗
          </span>


          <div>

            <h2>
              الخدمات والروابط المهمة
            </h2>


            <p>
              روابط مباشرة للوصول إلى خدمات الجهة.
            </p>

          </div>

        </div>


        <div
          className="aid-service-box"
        >

          <h3>
            الموقع والخدمة الرسمية
          </h3>


          <p>
            للحصول على المعلومات الرسمية أو تقديم
            الطلبات، استخدم الرابط الرسمي للجهة.
          </p>


          <a
            href={
              aid.officialLink
            }
            target="_blank"
            rel="noopener noreferrer"
            className="aid-official-button"
          >
            الدخول إلى الموقع الرسمي
            <span>
              ↗
            </span>
          </a>

        </div>

      </section>


      {/* =====================================================
          تنبيه
      ===================================================== */}

      <section
        className="aid-notice"
      >

        <span>
          ℹ️
        </span>


        <p>
          مستقر اليتيم هو دليل للمعلومات والروابط،
          ولا يمثل الجهة المذكورة ولا يضمن قبول أي طلب.
          يرجى دائمًا الرجوع إلى المصدر الرسمي للحصول
          على أحدث المعلومات والشروط.
        </p>

      </section>

    </main>

  )
}


export default AidDetails