import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {

  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="شعار مستقر اليتيم" />
      </div>

      <nav className="nav">

        {/* زر البحث */}
        <button
          className="search-button"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="فتح البحث"
        >
           اضغط للبحث 🔍
        </button>

        {/* خانة البحث */}
        {searchOpen && (
          <div className="search-box">

            <input
              type="text"
              placeholder="ابحث عن جمعية أو جهة..."
              autoFocus
            />

          </div>
        )}
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <span className="nav-icon">🏠</span>
            الرئيسية
          </NavLink>

          <NavLink 
            to="/aids" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <span className="nav-icon">🤝</span>
            المساعدات
          </NavLink>

          <NavLink 
            to="/orphans" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <span className="nav-icon">👶</span>
            تسجيل الأيتام
          </NavLink>
      </nav>

    </header>
  )
}

export default Header