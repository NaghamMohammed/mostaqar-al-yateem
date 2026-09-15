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
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="مستقر اليتيم" />
        </div>
      </section>
      <section className="services">
  <h3>كيف يمكننا مساعدتك؟</h3>

  <div className="service-cards">

    <a href="/aids" className="service-card">
      <span className="service-icon">🤝</span>
      <h4>المساعدات</h4>
      <p>
        تعرّف على فرص المساعدة المتاحة وروابط التسجيل الرسمية.
      </p>
      <span className="card-link">عرض المساعدات ←</span>
    </a>

    <a href="#" className="service-card">
      <span className="service-icon">👶</span>
      <h4>تسجيل الأيتام</h4>
      <p>
        الوصول إلى روابط تسجيل الأيتام وبرامج الرعاية المتاحة.
      </p>
      <span className="card-link">تسجيل الأيتام ←</span>
    </a>

  </div>
</section>
    </main>
  )
}

export default Home