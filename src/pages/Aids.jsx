function Aids() {
  return (
    <main className="aids-page">

      <h2>المساعدات المتاحة</h2>

      <p className="aids-intro">
        اختر نوع المساعدة التي تبحث عنها للوصول إلى الفرص المتاحة.
      </p>

        <div className="aid-cards">

            {/* البطاقة الأولى */}
            <div className="aid-card">
                <span className="aid-icon">💰</span>

                <h3>المساعدات المالية</h3>

                <p>
                فرص ومبادرات للمساعدة المالية للأسر والأفراد.
                </p>

                <a href="#">
                معرفة التفاصيل ←
                </a>
            </div>


            {/* البطاقة الثانية  */}
            <div className="aid-card">
                <span className="aid-icon">🍞</span>

                <h3>المساعدات الغذائية</h3>

                <p>
                فرص ومبادرات لتوفير المواد الغذائية والطرود للأسر المحتاجة.
                </p>

                <a href="#">
                معرفة التفاصيل ←
                </a>
            </div>


            {/* البطاقة الثالثة */}
            <div className="aid-card">
                <span className="aid-icon">🏥</span>

                <h3>المساعدات الطبية</h3>

                <p>
                فرص ومبادرات للمساعدة في العلاج والأدوية والخدمات الطبية.
                </p>

                <a href="#">
                معرفة التفاصيل ←
                </a>
            </div>

            {/* البطاقة الرابعة */}
            <div className="aid-card">
                <span className="aid-icon">📚</span>

                <h3>المساعدات التعليمية</h3>

                <p>
                    فرص ومبادرات لدعم التعليم وتوفير المستلزمات الدراسية.
                </p>

                <a href="#">
                    معرفة التفاصيل ←
                </a>
                </div>

                <div className="aid-card">
                <span className="aid-icon">🏠</span>

                <h3>المساعدات السكنية</h3>

                <p>
                    فرص ومبادرات للمساعدة في توفير السكن أو دعم الأسر المتضررة.
                </p>

                <a href="#">
                    معرفة التفاصيل ←
                </a>
                </div>

                <div className="aid-card">
                <span className="aid-icon">👕</span>

                <h3>المساعدات العينية</h3>

                <p>
                    فرص ومبادرات لتوفير الملابس والاحتياجات الأساسية للأسر المحتاجة.
                </p>

                <a href="#">
                    معرفة التفاصيل ←
                </a>
                </div>
                            

        </div>
            

    </main>
  )
}

export default Aids