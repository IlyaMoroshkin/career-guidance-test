import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="page-wrap header-inner">
        <div className="header-brand">
          <img src={logo} alt="Логотип" className="header-logo" />

          <div className="header-text">
            <div className="header-title">
              Авиационный колледж
            </div>

            <div className="header-subtitle">
              ФГБОУ ВО «РГАТУ им. П.А. Соловьева»
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}