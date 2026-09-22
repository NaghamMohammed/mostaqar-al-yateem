import heroImage from '../assets/hero.png'

function AidIcon() {
  return (
    <svg viewBox="0 0 64 64" className="service-icon-svg" aria-hidden="true">
      <circle cx="32" cy="32" r="30" />
      <path
        d="M20 31c-2-2.2-2-6 0-8.2 2.3-2.5 6.2-2.4 8.5.1L32 26.5l3.5-3.6c2.3-2.5 6.2-2.6 8.5-.1 2 2.2 2 6 0 8.2L32 43 20 31Z"
        className="icon-fill"
      />
      <path
        d="M17 39c4-4 8-6 11-6m19 6c-4-4-8-6-11-6"
        className="icon-stroke"
      />
      <path
        d="M24 45c3-4 6-7 8-7s5 3 8 7"
        className="icon-stroke"
      />
    </svg>
  )
}

function OrphanIcon() {
  return (
    <svg viewBox="0 0 64 64" className="service-icon-svg" aria-hidden="true">
      <circle cx="32" cy="32" r="30" />

      <circle cx="23" cy="23" r="5" className="icon-fill" />
      <circle cx="41" cy="23" r="5" className="icon-fill" />

      <path
        d="M17 34c1-7 11-7 12 0v10H17V34Zm18 0c1-7 11-7 12 0v10H35V34Z"
        className="icon-fill"
      />

      <path
        d="M26 28l6 5 6-5"
        className="icon-stroke"
      />

      <circle
        cx="32"
        cy="34"
        r="2.4"
        className="icon-fill"
      />
    </svg>
  )
}

function JobsIcon() {
  return (
    <svg viewBox="0 0 64 64" className="service-icon-svg" aria-hidden="true">
      <circle cx="32" cy="32" r="30" />

      <rect
        x="18"
        y="24"
        width="28"
        height="23"
        rx="4"
        className="icon-stroke-box"
      />

      <path
        d="M25 24v-4h14v4"
        className="icon-stroke"
      />

      <path
        d="M18 31h28"
        className="icon-stroke"
      />

      <path
        d="M28 31v4h8v-4"
        className="icon-stroke"
      />
    </svg>
  )
}

function AidsArt() {
  return (
    <svg
      viewBox="0 0 300 150"
      className="service-art-svg"
      aria-hidden="true"
    >
      <path
        d="M86 129c8-30 22-45 42-45 14 0 25 8 32 18 8-10 19-18 33-18 20 0 34 15 42 45Z"
        fill="currentColor"
        opacity=".78"
      />

      <path
        d="M150 64c-17-19-45-7-45 17 0 26 45 49 45 49s45-23 45-49c0-24-28-36-45-17Z"
        fill="currentColor"
        opacity=".92"
      />

      <path
        d="M75 119c-10-9-21-12-33-8m216 8c10-9 21-12 33-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity=".65"
      />

      <path
        d="M70 110c-13-3-23-10-29-20m218 20c13-3 23-10 29-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".5"
      />

      <path
        d="M46 137c10-18 25-26 43-23m168 23c-10-18-25-26-43-23"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".45"
      />
    </svg>
  )
}

function OrphansArt() {
  return (
    <svg
      viewBox="0 0 300 150"
      className="service-art-svg"
      aria-hidden="true"
    >
      <path
        d="M150 50c-24-26-64-10-64 24 0 35 64 63 64 63s64-28 64-63c0-34-40-50-64-24Z"
        fill="currentColor"
        opacity=".9"
      />

      <path
        d="M101 73c-13 2-23 10-30 23m128-23c13 2 23 10 30 23"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        opacity=".72"
      />

      <path
        d="M105 88c-7 12-11 23-11 37m100-37c7 12 11 23 11 37"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        opacity=".65"
      />

      <path
        d="M61 102c-6 5-11 13-13 23m191-23c6 5 11 13 13 23"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".5"
      />

      <path
        d="M40 122c12-4 22-2 30 6m190-6c-12-4-22-2-30 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".45"
      />
    </svg>
  )
}

function JobsArt() {
  return (
    <svg
      viewBox="0 0 300 150"
      className="service-art-svg"
      aria-hidden="true"
    >
      <path
        d="M0 145 82 75l47 39 56-57 33 24 82-67v131Z"
        fill="currentColor"
        opacity=".20"
      />

      <path
        d="M25 145h250"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        opacity=".35"
      />

      <path
        d="M68 137c5-8 10-18 18-18 7 0 12 6 16 13m20 5c8-16 16-38 27-38 10 0 16 13 21 29m24 9c12-23 22-52 34-52 11 0 17 10 23 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        opacity=".32"
      />

      <circle
        cx="86"
        cy="108"
        r="7"
        fill="currentColor"
        opacity=".55"
      />

      <circle
        cx="149"
        cy="91"
        r="8"
        fill="currentColor"
        opacity=".55"
      />

      <circle
        cx="232"
        cy="77"
        r="9"
        fill="currentColor"
        opacity=".55"
      />

      <path
        d="m238 30 20-5-6 20"
        fill="currentColor"
        opacity=".55"
      />

      <path
        d="M242 29 205 57"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  )
}

function LeafDecoration() {
  return (
    <svg
      viewBox="0 0 90 120"
      className="leaf-decoration"
      aria-hidden="true"
    >
      <path
        d="M45 112C42 79 45 47 55 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        opacity=".4"
      />

      <path
        d="M53 38C72 25 82 25 86 26 78 42 66 49 53 50Z"
        fill="currentColor"
        opacity=".25"
      />

      <path
        d="M46 63C25 49 15 49 10 51c8 17 20 25 36 26Z"
        fill="currentColor"
        opacity=".22"
      />

      <path
        d="M47 88C65 76 75 77 81 79c-8 15-18 22-34 23Z"
        fill="currentColor"
        opacity=".2"
      />
    </svg>
  )
}

function Home() {
  return (
    <main className="home">

      {/* =====================================================
          Hero
      ===================================================== */}
      <section className="hero">

        <div className="hero-image">
          <img
            src={heroImage}
            alt="طفل يحمل نبتة"
          />
        </div>

        <div className="hero-content">

          <span className="hero-small-title">
            🌿 معًا نحو مستقبل أفضل
          </span>

          <h1>
            مستقر اليتيم
          </h1>

          <h2>
            نساعدك في الوصول إلى ما تحتاجه
          </h2>

          <p className="hero-description">
            من خلال جمع روابط المساعدات، وتسهيل تسجيل الأيتام،
            وفتح أبواب فرص العمل والتمكين للأسرة.
          </p>

          <div className="hero-buttons">

            <a
              href="/aids"
              className="hero-button primary"
            >
              استكشف المساعدات
              <span>←</span>
            </a>

            <a
              href="/orphans"
              className="hero-button secondary"
            >
              تسجيل الأيتام
              <span>←</span>
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          الخدمات الرئيسية
      ===================================================== */}
      <section className="services">

        <div className="services-header">

          <div className="section-title-decoration">
            <span></span>

            <h3>
              خدماتنا الرئيسية
            </h3>

            <span></span>
          </div>

          <p>
            نقدم لك روابط موثوقة ومباشرة لأهم الخدمات
            التي تحتاجها أنت وأسرتك.
          </p>

        </div>

        <div className="service-cards">

          {/* المساعدات */}
          <a
            href="/aids"
            className="service-card service-card-aids"
          >

            <div className="service-icon">
              <AidIcon />
            </div>

            <div className="service-card-content">

              <h4>
                المساعدات الإنسانية
              </h4>

              <p>
                روابط المساعدات المالية والعينية من
                المؤسسات الرسمية والموثوقة.
              </p>

              <span className="card-link">
                استكشف الروابط
                <span>←</span>
              </span>

            </div>

            <div className="service-art service-art-aids">
              <AidsArt />
            </div>

          </a>

          {/* الأيتام */}
          <a
            href="/orphans"
            className="service-card service-card-orphans"
          >

            <div className="service-icon">
              <OrphanIcon />
            </div>

            <div className="service-card-content">

              <h4>
                تسجيل ورعاية الأيتام
              </h4>

              <p>
                روابط التسجيل والكفالة والرعاية في
                المؤسسات الرسمية والموثوقة.
              </p>

              <span className="card-link">
                استكشف الروابط
                <span>←</span>
              </span>

            </div>

            <div className="service-art service-art-orphans">
              <OrphansArt />
            </div>

          </a>

          {/* فرص العمل */}
          <a
            href="https://ضع-هنا-رابط-موقع-الوظائف.com"
            target="_blank"
            rel="noopener noreferrer"
            className="service-card service-card-jobs"
          >

            <div className="service-icon">
              <JobsIcon />
            </div>

            <div className="service-card-content">

              <h4>
                فرص العمل والتمكين
              </h4>

              <p>
                فرصة عمل قد تكون بداية لاستقرار أفضل.
                يمكنك الاطلاع على الوظائف المتاحة عبر
                منصتنا المتخصصة بالوظائف.
              </p>

              <span className="card-link">
                اكتشف فرص العمل
                <span>←</span>
              </span>

              <small className="external-note">
                🔗 ينتقل إلى الموقع الخارجي
              </small>

            </div>

            <div className="service-art service-art-jobs">
              <JobsArt />
            </div>

          </a>

        </div>

        {/* ===================================================
            تواصل معنا / المساعدة
        =================================================== */}
        <div
          className="help-section"
          id="help-section"
        >

          <div className="help-decor help-decor-right">
            <LeafDecoration />
          </div>

          <div className="help-icon">
            🎧
          </div>

          <div className="help-content">

            <h3>
              تحتاج إلى مساعدة؟
            </h3>

            <p>
              إذا لم تتمكن من التسجيل بنفسك، يمكنك التواصل
              مع شخص يساعدك في التسجيل ويجيب على استفساراتك.
            </p>

          </div>

          <a
            href="https://wa.me/972595405711"
            target="_blank"
            rel="noopener noreferrer"
            className="help-button"
          >
            تواصل معنا
            <span>➤</span>
          </a>

          <div className="help-decor help-decor-left">
            <LeafDecoration />
          </div>

        </div>

      </section>

      {/* =====================================================
          عن مستقر اليتيم
      ===================================================== */}
      <section
        className="about-section"
        id="about"
      >

        <div className="about-content">

          <div className="section-title-decoration">

            <span></span>

            <h3>
              عن مستقر اليتيم 🌿
            </h3>

            <span></span>

          </div>

          <p className="about-main-text">
            مستقر اليتيم هو دليل إلكتروني يهدف إلى تسهيل
            الوصول إلى المساعدات وبرامج رعاية الأيتام
            وفرص العمل والتمكين من خلال جمع الروابط
            المهمة في مكان واحد.
          </p>

          <div className="about-points">

            <div>
              <span>🔗</span>

              <p>
                روابط مباشرة للجهات والبرامج المعلنة
                عن فرص المساعدة.
              </p>
            </div>

            <div>
              <span>🔐</span>

              <p>
                لا نطلب منك إدخال بيانات شخصية حساسة
                عبر الموقع.
              </p>
            </div>

            <div>
              <span>ℹ️</span>

              <p>
                الموقع دليل للمساعدات ولا يضمن قبول أي
                طلب، فالقرار يعود للجهة المقدمة للخدمة.
              </p>
            </div>

            <div>
              <span>🤝</span>

              <p>
                نهدف إلى تسهيل الوصول إلى الخدمات
                والمعلومات المهمة للأسر والأيتام.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          الرسالة الختامية
      ===================================================== */}
      <section className="home-bottom-message">

        <div className="section-title-decoration">

          <span></span>

          <h3>
            معًا... نخلق فرصة لحياة أفضل
          </h3>

          <span></span>

        </div>

    
      </section>

    </main>
  )
}

export default Home