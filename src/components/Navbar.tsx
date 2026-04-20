import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
//   { to: "/ai", label: "AI Estimator" },
  { to: "/order", label: "Order" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 py-3">
        <div className="container-fluid px-0">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <span className="d-flex flex-column text-uppercase fw-bold lh-sm">
              <span style={{ fontSize: "1.1rem", letterSpacing: ".12rem" }}>RumahAditya</span>
              <span style={{ fontSize: "0.75rem", letterSpacing: ".08rem", color: "#888" }}>Architect</span>
            </span>
          </Link>

          {/* Menu tengah — desktop only */}
          <div className="mx-auto d-lg-flex d-none">
            <ul className="navbar-nav gap-1">
              {navLinks.map(({ to, label }) => (
                <li className="nav-item" key={to}>
                  <Link
                    className={`nav-link ${pathname === to ? "active fw-semibold border-bottom border-dark border-2" : ""}`}
                    to={to}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kanan */}
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold d-none d-md-block" style={{ fontSize: "0.875rem" }}>
              
            </span>
            <Link to="/order" className="btn btn-dark btn-sm d-none d-lg-block">
              Konsultasi
            </Link>
            <button
              className="btn border-0 d-lg-none fs-5"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-label="Buka menu"
            >
              ☰
            </button>
          </div>

        </div>
      </nav>

      {/* Offcanvas Mobile — di luar <nav> */}
      <div className="offcanvas offcanvas-end" id="offcanvasMenu" tabIndex={-1}>
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold text-uppercase" style={{ letterSpacing: ".1rem" }}>
            BuildSpace
          </h5>
          <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Tutup" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  className={`nav-link py-2 ${pathname === to ? "fw-semibold text-dark" : ""}`}
                  to={to}
                  data-bs-dismiss="offcanvas"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="nav-link py-2" to="/data" data-bs-dismiss="offcanvas">
                Data Konsultasi
              </Link>
            </li>
          </ul>
          <hr />
          <p className="fw-bold mb-0">+62 812-xxxx</p>
        </div>
      </div>
    </>
  );
}