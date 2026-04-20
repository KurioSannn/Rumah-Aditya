import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/order", label: "Order" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

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
            <Link to="/order" className="btn btn-dark btn-sm d-none d-lg-block">
              Konsultasi
            </Link>
            <button
              className="btn border-0 d-lg-none fs-5"
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
            >
              ☰
            </button>
          </div>

        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 1040,
          }}
        />
      )}

      {/* Offcanvas Mobile */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "280px",
          height: "100vh",
          background: "#fff",
          zIndex: 1050,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
          <h5 className="fw-bold text-uppercase mb-0" style={{ letterSpacing: ".1rem" }}>
            RumahAditya
          </h5>
          <button
            className="btn border-0 fs-5"
            onClick={() => setOpen(false)}
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-3 flex-grow-1 overflow-auto">
          <ul className="navbar-nav gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  className={`nav-link py-2 ${pathname === to ? "fw-semibold text-dark" : ""}`}
                  to={to}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <p className="fw-bold mb-0">+62 856-4645-8409</p>
        </div>
      </div>
    </>
  );
}