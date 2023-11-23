import React from 'react'

function Navbar() {
  return (
    <div>
<nav data-mdb-navbar-init className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-0">
    <li className="nav-item ">
          <a className="nav-link">تسجيل</a>
        </li>
        <div className={'item'}>
    <li className="nav-item">
          <a className="nav-link">مركز الإختبارات</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">الأكاديميات التابعة</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">حول الأكاديمية</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">المعسكرات والبرامج</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">الرئيسية</a>
        </li>
        </div>
      </ul>
      <a className="navbar-brand mt-2 mt-lg-0 m-0" href="#">
        <img
          src="https://tuwaiq.edu.sa/img/logos/logo.svg"
          height="15"
          alt="TA"
          loading="lazy"
        />
      </a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar