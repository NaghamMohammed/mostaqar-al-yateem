function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-about">
          <h3>مستقر اليتيم 🌿</h3>

          <p>
            دليل بسيط يساعدك على الوصول إلى فرص المساعدات
            وروابط تسجيل الأيتام في مكان واحد.
          </p>
        </div>

        <div className="footer-links">
          <h4>روابط سريعة</h4>

          <a href="/">الرئيسية</a>
          <a href="/aids">المساعدات</a>
          <a href="/orphans">تسجيل الأيتام</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 مستقر اليتيم — جميع الحقوق محفوظة
        </p>
      </div>

    </footer>
  )
}

export default Footer