function Orphans() {
  const orphanPrograms = [
    {
      id: 1,
      name: 'وزارة التنمية الاجتماعية الفلسطينية',
      status: 'خدمات رسمية لرعاية الأيتام',
      description:
        'تقدم الوزارة خدمات حماية ورعاية للأيتام، وتشمل تحويل الحالات إلى المؤسسات والمراكز الشريكة وفق الإجراءات المعتمدة.',
      link: 'https://www.mosd.gov.ps/ar/single-sub-citizen/7',
    },

    {
      id: 2,
      name: 'برنامج أمل المستقبل',
      status: 'برنامج مخصص للأيتام',
      description:
        'برنامج تابع لوزارة التنمية الاجتماعية يهدف إلى دعم الأيتام من خلال الكفالات المالية والرعاية والإيواء والمشاريع التنموية.',
      link: 'https://donate.mosd.gov.ps/about',
    },

    {
      id: 3,
      name: 'جمعية دار اليتيم الفلسطيني',
      status: 'رعاية وكفالة الأيتام',
      description:
        'جمعية خيرية في قطاع غزة تقدم برامج كفالة ورعاية ومساعدات للأيتام والأسر المحتاجة.',
      link: 'https://darelyateem.org/',
    },

    {
      id: 4,
      name: 'جمعية سبيل لرعاية الأيتام',
      status: 'جهة شريكة في رعاية الأيتام',
      description:
        'جمعية لرعاية الأيتام في طوباس، وهي مذكورة ضمن المؤسسات الشريكة لدى وزارة التنمية الاجتماعية.',
      link: 'https://www.mosd.gov.ps/ar/single-sub-citizen/7',
    },

    {
      id: 5,
      name: 'جمعية دار اليتيم العربي',
      status: 'جهة شريكة في رعاية الأيتام',
      description:
        'جمعية لرعاية الأيتام في طولكرم، ومذكورة ضمن المؤسسات الشريكة لدى وزارة التنمية الاجتماعية.',
      link: 'https://www.mosd.gov.ps/ar/single-sub-citizen/7',
    },

    {
      id: 6,
      name: 'هيئة الأعمال الخيرية - أستراليا',
      status: 'التسجيل متاح',
      description:
        'يمكن تسجيل الحالات ضمن برامج رعاية وكفالة الأيتام.',
      registrationType: 'yousef',
      representativeName: 'يوسف الصقر',
      link: 'https://wa.me/972595405711',
    },
  ]

  return (
    <main className="orphans-page orphans-background">

      <section className="orphans-header">
        <h2>
          تسجيل الأيتام 👶
        </h2>

        <p className="orphans-intro">
          نوفر لك روابط تسجيل الأيتام وبرامج الرعاية والكفالة المتاحة.
        </p>
      </section>

      <div className="orphan-cards">

        {orphanPrograms.map((program) => (
          <a
            key={program.id}
            href={program.link}
            target="_blank"
            rel="noopener noreferrer"
            className="orphan-card"
            aria-label={`فتح ${program.name}`}
          >

            {program.logo ? (
              <img
                src={program.logo}
                alt={`شعار ${program.name}`}
                className="orphan-logo"
              />
            ) : (
              <span className="orphan-icon">
                📝
              </span>
            )}

            <h3>
              {program.name}
            </h3>

            <span className="orphan-status">
              🟢 {program.status}
            </span>

            <p>
              {program.description}
            </p>

            {program.registrationType === 'yousef' && (
              <div className="registration-representative">
                👤 التسجيل عبر{' '}
                <strong>
                  {program.representativeName}
                </strong>
              </div>
            )}

            <span className="card-action">
              {program.registrationType === 'yousef'
                ? '📱 التواصل عبر واتساب ←'
                : 'فتح رابط التسجيل ←'}
            </span>

          </a>
        ))}

      </div>

    </main>
  )
}

export default Orphans