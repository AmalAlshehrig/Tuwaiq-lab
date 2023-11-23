import React from 'react'

function Navbar() {
  return (
    <div>
<nav data-mdb-navbar-init class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
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
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    <li className="nav-item ">
          <a className="nav-link" href="#">تسجيل</a>
        </li>
    <li className="nav-item">
          <a className="nav-link" href="#">مركز الإختبارات</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">الأكاديميات التابعة</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">حول الأكاديمية</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">المعسكرات و البرامج</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">الرئيسية</a>
        </li>
      </ul>
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://launch.sa/assets/images/logos/tuwaiq-academy-logo.svg"
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