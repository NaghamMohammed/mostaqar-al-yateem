import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import searchData from '../data/searchData'
import logo from '../assets/logo.png'

function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const normalizeArabic = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[ًٌٍَُِْـ]/g, '')
      .replace(/[أإآ]/g, 'ا')
      .replace(/ى/g, 'ي')
  }

  const normalizedQuery = normalizeArabic(searchQuery)

  const searchResults = normalizedQuery
    ? searchData.filter((item) => {
        const text = normalizeArabic(
          `${item.name} ${item.category} ${item.description}`
        )
        return text.includes(normalizedQuery)
      })
    : []

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <header className="header">

      {/* الشعار */}
      <a href="/" className="logo" onClick={closeMenu} aria-label="مستقر اليتيم - الرئيسية">
        <img src={logo} alt="مستقر اليتيم" />
      </a>

      {/* روابط الموقع */}
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          الرئيسية
        </NavLink>

        <NavLink
          to="/aids"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          المساعدات
        </NavLink>

        <NavLink
          to="/orphans"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          تسجيل الأيتام
        </NavLink>

        <a
          href="https://ضع-هنا-رابط-موقع-الوظائف.com"
          target="_blank"
          rel="noopener noreferrer"
          className="jobs-nav-link"
          onClick={closeMenu}
        >
          فرص العمل والتمكين
        </a>

        <a href="/#about" onClick={closeMenu}>
          من نحن
        </a>

        <a href="/#contact" onClick={closeMenu}>
          تواصل معنا
        </a>
      </nav>

      {/* البحث */}
      <div className="search-wrapper">
        <button
          className="search-button"
          onClick={() => {
            setSearchOpen(!searchOpen)
            if (searchOpen) {
              setSearchQuery('')
            }
          }}
          aria-label="فتح البحث"
          aria-expanded={searchOpen}
        >
          <span className="search-button-icon">🔍</span>
          <span className="search-button-label">اضغط للبحث</span>
        </button>

        {searchOpen && (
          <div className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث هنا..."
              autoFocus
              aria-label="البحث عن جمعية أو جهة"
            />

            {searchQuery && (
              <div className="search-results">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <a
                      key={result.id}
                      href={result.link}
                      className="search-result"
                      onClick={closeSearch}
                    >
                      <div className="search-result-logo">
                        {result.logo ? (
                          <img src={result.logo} alt="" />
                        ) : (
                          <span>🏢</span>
                        )}
                      </div>

                      <div className="search-result-name">
                        {result.name}
                        <span className="search-result-info">
                          {result.category}
                        </span>
                      </div>

                      <div className="search-result-description">
                        {result.description}
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="no-search-results">
                    لا توجد نتائج مطابقة
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* زر الهاتف */}
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

    </header>
  )
}

export default Header
