import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-5 pb-3 mt-5" style={{ background: "#1a1a1a", color: "#fff" }}>
      <div className="container">
        <div className="row g-4 mb-4">

          {/* Kolom 1 — Brand */}
          <div className="col-md-4">
            <span className="d-flex flex-column text-uppercase fw-bold lh-sm mb-3">
              <span style={{ fontSize: "1.1rem", letterSpacing: ".12rem" }}>BuildSpace</span>
              <span style={{ fontSize: "0.75rem", letterSpacing: ".08rem", color: "#c9a84c" }}>Architect</span>
            </span>
            <p className="text-white-50 small">
              Mewujudkan hunian impian Anda dengan desain profesional, material berkualitas, dan pengerjaan tepat waktu.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white-50 text-decoration-none" style={{ fontSize: "1.2rem" }}>📸</a>
              <a href="#" className="text-white-50 text-decoration-none" style={{ fontSize: "1.2rem" }}>💬</a>
              <a href="#" className="text-white-50 text-decoration-none" style={{ fontSize: "1.2rem" }}>▶️</a>
            </div>
          </div>

          {/* Kolom 2 — Navigasi */}
          <div className="col-md-2 col-6">
            <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: "0.8rem", letterSpacing: ".1rem", color: "#c9a84c" }}>
              Halaman
            </h6>
            <ul className="list-unstyled">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/order", label: "Konsultasi" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to} className="mb-2">
                  <Link
                    to={to}
                    className="text-white-50 text-decoration-none small"
                    style={{ transition: "color .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
                    onMouseLeave={e => (e.currentTarget.style.color = "")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 — Layanan */}
          <div className="col-md-2 col-6">
            <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: "0.8rem", letterSpacing: ".1rem", color: "#c9a84c" }}>
              Layanan
            </h6>
            <ul className="list-unstyled">
              {["Desain Rumah", "Bangun Rumah", "Renovasi", "Interior", "Konsultasi"].map((s) => (
                <li key={s} className="mb-2">
                  <span className="text-white-50 small">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4 — Kontak */}
          <div className="col-md-4">
            <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: "0.8rem", letterSpacing: ".1rem", color: "#c9a84c" }}>
              Kontak
            </h6>
            <ul className="list-unstyled">
              {[
                { icon: "📍", text: "Surabaya, Jawa Timur" },
                { icon: "📞", text: "+62 856-4645-8409" },
                { icon: "✉️", text: "RumahAditya@gmail.com" },
                { icon: "🕐", text: "Senin–Sabtu, 08.00–17.00" },
              ].map(({ icon, text }) => (
                <li key={text} className="d-flex gap-2 align-items-start mb-2">
                  <span>{icon}</span>
                  <span className="text-white-50 small">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3"
          style={{ borderTop: "1px solid #333", fontSize: "0.8rem", color: "#666" }}
        >
          <span>© {new Date().getFullYear()} RumahAditya Architect. All rights reserved.</span>
          <span className="mt-2 mt-md-0">Made with in Surabaya</span>
        </div>
      </div>
    </footer>
  );
}