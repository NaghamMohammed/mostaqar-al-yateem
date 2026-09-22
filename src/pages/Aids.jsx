function Aids() {
  const aids = [
    {
      id: 1,
      name: 'وكالة الأونروا',
      status: 'الخدمات متاحة حسب البرنامج',
      description:
        'خدمات وبرامج إنسانية للاجئي فلسطين، تشمل مجموعة من المساعدات والخدمات وفق الأهلية والبرنامج.',
      logo: '/images/logos/unrwa.svg',
      link: 'https://gazaaid.unrwa.org/Login/Index',
    },

    {
      id: 2,
      name: 'وزارة التنمية الاجتماعية الفلسطينية',
      status: 'بوابة المساعدات الاجتماعية',
      description:
        'خدمات ومساعدات اجتماعية وغذائية وطارئة للأسر والفئات المستحقة وفق معايير الوزارة.',
      link: 'https://aid.mosd.gov.ps/',
    },

    {
      id: 3,
      name: 'جمعية الهلال الأحمر الفلسطيني',
      status: 'خدمات ومساعدات إنسانية',
      description:
        'خدمات ومساعدات إنسانية وإغاثية وصحية في فلسطين.',
      link: 'https://www.palestinercs.org/ar',
    },

    {
      id: 4,
      name: 'جمعية تطوير بيت لاهيا',
      status: 'برامج إغاثية وتنموية',
      description:
        'جمعية خيرية غير ربحية تقدم برامج تنموية وتدخلات إغاثية في أوقات الطوارئ والأزمات.',
      link: 'https://blda.ps/ar/',
    },

    {
      id: 5,
      name: 'اليونيسف - دولة فلسطين',
      status: 'برامج إنسانية ودعم للأطفال',
      description:
        'برامج إنسانية تشمل المياه والصحة والتغذية والتعليم وحماية الأطفال والدعم النقدي وفق البرامج والفئات المستهدفة.',
      link: 'https://www.unicef.org/sop/',
    },

    {
      id: 6,
      name: 'برنامج الأغذية العالمي',
      status: 'مساعدات غذائية ونقدية',
      description:
        'يقدم مساعدات غذائية ونقدية وخدمات تغذية ودعمًا لسبل العيش للأسر المتضررة في غزة والضفة الغربية.',
      link: 'https://www.wfp.org/emergencies/palestine-emergency',
    },
  ]

  return (
    <main className="aids-page aids-background">

      <section className="aids-header">
        <h1>
          المساعدات الإنسانية
          <span>🌿</span>
        </h1>

        <p>
          أهم روابط المساعدة والمؤسسات الإنسانية
          وروابط التسجيل الرسمية.
        </p>
      </section>

      <section className="aids-list">

        {aids.map((aid) => (
          <a
            key={aid.id}
            href={aid.link}
            target="_blank"
            rel="noopener noreferrer"
            className="aid-card"
            aria-label={`فتح ${aid.name}`}
          >

            {aid.logo ? (
              <img
                src={aid.logo}
                alt={`شعار ${aid.name}`}
                className="aid-logo"
              />
            ) : (
              <div className="aid-icon">
                🤝
              </div>
            )}

            <h2>{aid.name}</h2>

            <span className="aid-status">
              🟢 {aid.status}
            </span>

            <p>
              {aid.description}
            </p>

            <span className="card-action">
              فتح الرابط ←
            </span>

          </a>
        ))}

      </section>

    </main>
  )
}

export default Aids