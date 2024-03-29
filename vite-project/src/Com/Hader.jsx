import React from 'react'

function Hader() {
  return (
    <div>
        <nav data-mdb-navbar-init className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  <div className="container-fluid">
    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      <ul className="navbar-nav mb-2 mb-lg-0">
        <div className={'divhader'}>
        <li className="nav-item">
          <button className='btn'>الناشئون</button>
        </li>
        <li className="nav-item">
            <button className='btn'>الكبار</button>
        </li>
        </div>
        <li className="nav-item">
          <h1 className={"hh1"}>المعسكرات و البرامج</h1>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Hader