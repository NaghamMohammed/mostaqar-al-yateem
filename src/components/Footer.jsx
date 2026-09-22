
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

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

        <div className="footer-developer">

          <h4>تصميم وبرمجة المواقع</h4>

          <p>
            هل تريد موقعًا إلكترونيًا خاصًا بك؟
            <br />
            تواصل معي لتصميم وبرمجة موقعك.
          </p>

          <div className="developer-social">

            <a
              href="https://wa.me/972593610919"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="التواصل عبر واتساب"
            >
              <FaWhatsapp />
              <span>واتساب</span>
            </a>

            <a
              href="https://www.instagram.com/nghm_1612m?stkn=MTRmcXJvMm4zamFzbQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="التواصل عبر Instagram"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>

          </div>

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
