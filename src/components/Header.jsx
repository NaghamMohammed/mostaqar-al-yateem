import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="شعار مستقر اليتيم" />
      </div>

      <nav className="nav">
        <a href="#">الرئيسية</a>
        <a href="/aids">المساعدات</a>
        <a href="#">تسجيل الأيتام</a>
      </nav>
    </header>
  )
}

export default Header