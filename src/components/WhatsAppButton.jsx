import { useState } from 'react'

function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const phone = '972595405711'

  const message =
    'السلام عليكم، أريد الاستفسار عن خدمات مستقر اليتيم.'

  const whatsappLink =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <div className="whatsapp-wrapper">

      <button
        className="whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
        <span>
          التواصل عبر واتساب
          <small>يوسف الصقر</small>
        </span>
      </button>

      {isOpen && (
        <div className="whatsapp-panel">

          <button
            className="whatsapp-close"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>

          <h3>التواصل عبر واتساب</h3>

          <p>
            سيتم التواصل مع <strong>يوسف الصقر</strong>
            لمساعدتك في التسجيل والإجابة عن استفساراتك.
          </p>

          <p>
            💰 خدمة المساعدة في التسجيل متاحة مقابل
            <strong> رسم رمزي</strong> يتم توضيحه قبل بدء الخدمة.
          </p>

          <p className="privacy-note">
            🔒 نحافظ على خصوصية معلوماتك، ولا نطلب منك
            إرسال بيانات حساسة عبر الموقع.
          </p>

          <a
            className="whatsapp-start"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 بدء المحادثة عبر واتساب
          </a>

        </div>
      )}

    </div>
  )
}

export default WhatsAppButton