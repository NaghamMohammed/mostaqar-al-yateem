import heroImage from '../assets/hero.png'

function Home() {
  return (
    <main className="home">
      <section className="hero">

  <div className="hero-content">

    <h2>أهلًا بك في مستقر اليتيم 🌿</h2>

    <p>
      بوابتك للوصول إلى المساعدات وتسجيل الأيتام بسهولة
    </p>

    <p className="hero-description">
      نجمع لك أهم فرص المساعدة وروابط تسجيل الأيتام
      في مكان واحد، بطريقة بسيطة وسهلة.
    </p>

    <a href="/aids" className="hero-button">
      ابدأ بالبحث ←
    </a>

  </div>

  <div className="hero-image">
    <img src={heroImage} alt="مستقر اليتيم" />
  </div>

</section>
    <section className="services">

  <div className="services-header">
    <span>🌿</span>
    <h3>كيف يمكننا مساعدتك؟</h3>

    <p>
      اختر القسم الذي تبحث عنه للوصول إلى الروابط والمعلومات المناسبة بسهولة.
    </p>
  </div>

  <div className="service-cards">

    <a href="/aids" className="service-card">

      <div className="service-icon">
        🤝
      </div>

      <div className="service-card-content">
        <h4>المساعدات</h4>

        <p>
          تعرّف على فرص المساعدات الإنسانية والبرامج المتاحة
          وروابط التسجيل الرسمية.
        </p>

        <span className="card-link">
          عرض المساعدات
          <span>←</span>
        </span>
      </div>

    </a>


    <a href="/orphans" className="service-card">

      <div className="service-icon">
        👶
      </div>

      <div className="service-card-content">
        <h4>تسجيل الأيتام</h4>

        <p>
          الوصول إلى الجهات والمنظمات التي توفر برامج
          تسجيل ورعاية الأيتام والأرامل.
        </p>

        <span className="card-link">
          تسجيل الأيتام
          <span>←</span>
        </span>
      </div>

    </a>

  </div>

</section>

<section className="about-section">

  <div className="about-content">

    <h3>عن مستقر اليتيم 🌿</h3>

    <p>
      مستقر اليتيم هو موقع يهدف إلى جمع روابط وفرص المساعدات
      وتسجيل الأيتام في مكان واحد، لتسهيل الوصول إليها بطريقة
      بسيطة ومنظمة.
    </p>

    <div className="about-points">

      <div>
        <span>🔗</span>
        <p>
          نوفر روابط للوصول إلى الجهات والبرامج المعلنة عن فرص المساعدة.
        </p>
      </div>

      <div>
        <span>🔐</span>
        <p>
          لا نطلب منك إدخال بيانات شخصية حساسة عبر الموقع.
        </p>
      </div>

      <div>
        <span>ℹ️</span>
        <p>
          الموقع دليل للمساعدات ولا يضمن قبول أي طلب، فالقرار يعود للجهة المقدمة للمساعدة.
        </p>
      </div>

      <div>
        <span>🤝</span>
        <p>
          يمكنك التواصل عبر واتساب للحصول على المساعدة في التسجيل،
          مع توضيح أي رسم رمزي قبل بدء الخدمة.
        </p>
      </div>

    </div>

  </div>

</section>
    </main>
  )
}

export default Home