import { Link, NavLink } from 'react-router-dom'
import { BUSINESS, WHATSAPP_URL } from '../config/business'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          to="/"
          aria-label="نور جدة للكهرباء - الصفحة الرئيسية"
        >
          <span
            className="brand-mark"
            aria-hidden="true"
          >
            ن
          </span>

          <span>
            <strong>نور جدة للكهرباء</strong>
            <small>كهربائي منازل في جدة</small>
          </span>
        </Link>

        <nav
          className="main-nav"
          aria-label="التنقل الرئيسي"
        >
          <NavLink
            to="/"
            end
          >
            الرئيسية
          </NavLink>

          <NavLink to="/services">
            خدماتنا
          </NavLink>

          <NavLink to="/contact">
            اتصل بنا
          </NavLink>
        </nav>

        <div className="header-actions">
          <a
            className="header-phone"
            href={`tel:${BUSINESS.telephone}`}
            aria-label={`الاتصال بنور جدة للكهرباء على الرقم ${BUSINESS.telephone}`}
          >
            اتصل الآن
          </a>

          <a
            className="header-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="التواصل مع نور جدة للكهرباء عبر واتساب"
          >
            واتساب
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header