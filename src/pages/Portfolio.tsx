import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";

const projects = [
  { id: 1, title: "Rumah Minimalis Modern", type: "Bangun Baru", luas: "120 m²", lokasi: "Surabaya", img: "/r1.webp" },
  { id: 2, title: "Villa Tropis Kontemporer", type: "Desain & Bangun", luas: "250 m²", lokasi: "Malang", img: "/r2.webp" },
  { id: 3, title: "Renovasi Rumah Klasik", type: "Renovasi", luas: "90 m²", lokasi: "Sidoarjo", img: "/r3.webp" },
  { id: 4, title: "Town House 2 Lantai", type: "Bangun Baru", luas: "180 m²", lokasi: "Gresik", img: "/r4.webp" },
  { id: 5, title: "Desain Interior Apartemen", type: "Interior", luas: "65 m²", lokasi: "Surabaya", img: "/r5.webp" },
  { id: 6, title: "Rumah Scandinavian", type: "Desain & Bangun", luas: "140 m²", lokasi: "Mojokerto", img: "/r6.webp" },
];

export default function Portfolio() {
  const pageRef = useFadeIn();

  return (
    <div ref={pageRef as any}>

      {/* Page Header */}
      <div
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/r1.webp') center/cover",
          minHeight: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="fw-bold mb-2">Portfolio</h1>
        <p className="mb-0 text-white-50">
          <Link to="/" className="text-white-50 text-decoration-none">Home</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#c9a84c" }}>Portfolio</span>
        </p>
      </div>

      {/* Stats Bar */}
      <section style={{ background: "#1a1a1a" }} className="py-4">
        <div className="container">
          <div className="row g-3 text-white text-center">
            {[
              { angka: "200+", label: "Proyek Selesai" },
              { angka: "10+", label: "Tahun Pengalaman" },
              { angka: "15+", label: "Kota di Indonesia" },
              { angka: "98%", label: "Klien Puas" },
            ].map(({ angka, label }, i) => (
              <div className={`col-6 col-md-3 fade-up delay-${i + 1}`} key={label}>
                <strong style={{ fontSize: "1.8rem", color: "#c9a84c", display: "block", lineHeight: 1 }}>
                  {angka}
                </strong>
                <span className="text-white-50 small">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5 fade-up">
            <span
              className="text-uppercase fw-semibold d-block mb-2"
              style={{ color: "#c9a84c", fontSize: "0.85rem", letterSpacing: ".12rem" }}
            >
              Hasil Karya Kami
            </span>
            <h2 className="fw-bold">Proyek Terbaru</h2>
            <p className="text-muted">200+ proyek telah berhasil kami selesaikan</p>
          </div>

          <div className="row g-4">
            {projects.map((p, i) => (
              <div className={`col-sm-6 col-lg-4 fade-up delay-${(i % 3) + 1}`} key={p.id}>
                <div
                  className="card border-0 shadow-sm overflow-hidden card-lift"
                  style={{ borderRadius: "14px" }}
                >
                  {/* Image dengan overlay hover */}
                  <div className="position-relative overflow-hidden" style={{ height: "220px" }}>
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", transition: "transform .4s" }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    {/* Badge overlay */}
                    <span
                      className="position-absolute top-0 end-0 m-3 badge px-2 py-1"
                      style={{ background: "#c9a84c", fontSize: "0.75rem" }}
                    >
                      {p.type}
                    </span>
                  </div>

                  <div className="card-body p-4">
                    <h6 className="fw-bold mb-2">{p.title}</h6>
                    <div className="d-flex gap-3 text-muted small mb-3">
                      <span>📐 {p.luas}</span>
                      <span>📍 {p.lokasi}</span>
                    </div>
                    <Link
                      to="/order"
                      className="btn btn-sm btn-outline-dark w-100 fw-semibold"
                      style={{ borderRadius: "8px" }}
                    >
                      Bangun Serupa →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-5 fade-up">
            <p className="text-muted mb-3">Mau rumah impian Anda jadi proyek berikutnya?</p>
            <Link to="/order" className="btn btn-dark btn-lg px-5" style={{ borderRadius: "8px" }}>
              Mulai Konsultasi
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/p5.webp') center/cover fixed",
          minHeight: "280px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container fade-up">
          <h2 className="fw-bold mb-3">Jadikan Rumah Impian Anda Proyek Kami Berikutnya</h2>
          <p className="text-white-50 mb-4">
            Konsultasikan kebutuhan Anda sekarang bersama tim arsitek profesional kami.
          </p>
          <Link to="/order" className="btn btn-light btn-lg px-5 fw-semibold" style={{ borderRadius: "8px" }}>
            Konsultasi Gratis
          </Link>
        </div>
      </section>

    </div>
  );
}