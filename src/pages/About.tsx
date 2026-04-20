import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";

export default function About() {
  const pageRef = useFadeIn();

  return (
    <div ref={pageRef as any}>

      {/* Page Header */}
      <div
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/r2.webp') center/cover",
          minHeight: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="fw-bold mb-2">About Us</h1>
        <p className="mb-0 text-white-50">
          <Link to="/" className="text-white-50 text-decoration-none">Home</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#c9a84c" }}>About</span>
        </p>
      </div>

      {/* About Content */}
      <section className="py-5 py-lg-6">
        <div className="container py-4">
          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-12 col-lg-5 fade-up">
              <div className="position-relative">
                <div style={{ borderRadius: "12px", overflow: "hidden", height: "480px" }}>
                  <img
                    src="/om.webp"
                    alt="Tim RumahAditya"
                    className="w-100 h-100"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                <div
                  className="position-absolute bottom-0 start-0 text-white p-3 m-3"
                  style={{ background: "#c9a84c", borderRadius: "10px", minWidth: "140px" }}
                >
                  <strong style={{ fontSize: "2rem", display: "block", lineHeight: 1 }}>10+</strong>
                  <span style={{ fontSize: "0.8rem" }}>Tahun Pengalaman</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-12 col-lg-7 fade-up delay-2">
              <span
                className="text-uppercase fw-semibold mb-2 d-block"
                style={{ color: "#c9a84c", fontSize: "0.85rem", letterSpacing: ".12rem" }}
              >
                Tentang Kami
              </span>
              <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                Membangun Lebih dari Sekadar <span style={{ color: "#c9a84c" }}>Rumah</span>
              </h2>
              <p className="text-muted mb-4">
                RumahAditya hadir untuk mewujudkan hunian impian Anda dengan pendekatan
                profesional, material berkualitas, dan desain yang timeless. Kami percaya setiap
                rumah adalah cerminan dari penghuninya.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                {[
                  { title: "Desain Personal", desc: "Setiap rancangan dibuat khusus sesuai kebutuhan dan selera Anda." },
                  { title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi. RAB jelas sejak awal konsultasi." },
                  { title: "Tim Berpengalaman", desc: "Arsitek dan kontraktor kami telah menangani 200+ proyek rumah." },
                ].map((item, i) => (
                  <div className={`d-flex gap-3 align-items-start fade-up delay-${i + 2}`} key={item.title}>
                    <span style={{ color: "#c9a84c", fontSize: "1.3rem", marginTop: "2px" }}>✓</span>
                    <div>
                      <strong className="d-block">{item.title}</strong>
                      <span className="text-muted small">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/order" className="btn btn-dark btn-lg px-4 fade-up delay-4">
                Konsultasi Sekarang
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 fade-up delay-1">
              <div className="p-4 bg-white h-100 card-lift" style={{ borderRadius: "12px", borderLeft: "4px solid #c9a84c" }}>
                <h5 className="fw-bold mb-3">Visi</h5>
                <p className="text-muted mb-0">
                  Menjadi perusahaan arsitektur dan konstruksi terpercaya di Indonesia yang menghadirkan
                  hunian berkualitas, estetik, dan terjangkau untuk semua kalangan.
                </p>
              </div>
            </div>
            <div className="col-md-6 fade-up delay-2">
              <div className="p-4 bg-white h-100 card-lift" style={{ borderRadius: "12px", borderLeft: "4px solid #1a1a1a" }}>
                <h5 className="fw-bold mb-3">Misi</h5>
                <ul className="text-muted mb-0 ps-3">
                  <li className="mb-1">Memberikan desain yang personal dan fungsional</li>
                  <li className="mb-1">Menggunakan material berkualitas dengan harga transparan</li>
                  <li className="mb-1">Menyelesaikan proyek tepat waktu dan sesuai standar</li>
                  <li>Membangun hubungan jangka panjang dengan klien</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5" style={{ background: "#1a1a1a" }}>
        <div className="container">
          <div className="row g-4 text-white text-center">
            {[
              { angka: "200+", label: "Proyek Selesai" },
              { angka: "10+", label: "Tahun Pengalaman" },
              { angka: "150+", label: "Klien Puas" },
              { angka: "15+", label: "Tim Profesional" },
            ].map(({ angka, label }, i) => (
              <div className={`col-6 col-md-3 fade-up delay-${i + 1}`} key={label}>
                <div className="py-3">
                  <strong style={{ fontSize: "2.5rem", color: "#c9a84c", display: "block", lineHeight: 1 }}>
                    {angka}
                  </strong>
                  <span className="text-white-50 small mt-1 d-block">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}