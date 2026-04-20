import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";

const services = [
  {
    icon: "🏠",
    title: "Desain Rumah",
    desc: "Rancangan modern, minimalis, atau klasik sesuai selera Anda. Kami hadirkan desain yang fungsional sekaligus estetik.",
    price: "Mulai Rp 5.000.000",
    img: "/p1.webp",
  },
  {
    icon: "🏗️",
    title: "Bangun Rumah",
    desc: "Pembangunan dari nol dengan material berkualitas tinggi dan tim kontraktor berpengalaman.",
    price: "Mulai Rp 3.500.000/m²",
    img: "/p2.webp",
  },
  {
    icon: "🔨",
    title: "Renovasi",
    desc: "Transformasi rumah lama menjadi hunian baru yang segar. Renovasi parsial maupun total.",
    price: "Mulai Rp 2.000.000/m²",
    img: "/p3.webp",
  },
  {
    icon: "🛋️",
    title: "Desain Interior",
    desc: "Penataan ruang dalam yang nyaman, estetik, dan sesuai kebutuhan penghuni rumah.",
    price: "Mulai Rp 3.000.000",
    img: "/p4.webp",
  },
  {
    icon: "💬",
    title: "Konsultasi",
    desc: "Diskusi langsung dengan arsitek kami. Dapatkan saran desain dan estimasi biaya secara gratis.",
    price: "Gratis",
    img: "/p5.webp",
  },
  {
    icon: "📐",
    title: "Gambar Kerja",
    desc: "Penyusunan gambar kerja lengkap meliputi denah, tampak, potongan, dan detail konstruksi.",
    price: "Mulai Rp 2.500.000",
    img: "/r6.webp",
  },
];

export default function Services() {
  const pageRef = useFadeIn();

  return (
    <div ref={pageRef as any}>

      {/* Page Header */}
      <div
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/r3.webp') center/cover",
          minHeight: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="fw-bold mb-2">Services</h1>
        <p className="mb-0 text-white-50">
          <Link to="/" className="text-white-50 text-decoration-none">Home</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#c9a84c" }}>Services</span>
        </p>
      </div>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5 fade-up">
            <span
              className="text-uppercase fw-semibold d-block mb-2"
              style={{ color: "#c9a84c", fontSize: "0.85rem", letterSpacing: ".12rem" }}
            >
              Apa yang Kami Tawarkan
            </span>
            <h2 className="fw-bold">Layanan Kami</h2>
            <p className="text-muted">Solusi lengkap untuk hunian impian Anda</p>
          </div>

          <div className="row g-4">
            {services.map((s, i) => (
              <div className={`col-sm-6 col-lg-4 fade-up delay-${(i % 3) + 1}`} key={s.title}>
                <div className="card h-100 border-0 shadow-sm overflow-hidden card-lift"
                  style={{ borderRadius: "14px" }}>
                  {/* Foto */}
                  <div style={{ height: "180px", overflow: "hidden" }}>
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", transition: "transform .3s" }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  {/* Content */}
                  <div className="card-body p-4 d-flex flex-column">
                    <div style={{ fontSize: "2rem" }} className="mb-2">{s.icon}</div>
                    <h5 className="fw-bold mb-2">{s.title}</h5>
                    <p className="text-muted small flex-grow-1">{s.desc}</p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pt-3"
                      style={{ borderTop: "1px solid #f0f0f0" }}>
                      <span className="fw-semibold" style={{ color: "#c9a84c", fontSize: "0.9rem" }}>
                        {s.price}
                      </span>
                      <Link to="/order" className="btn btn-sm btn-dark px-3" style={{ borderRadius: "8px" }}>
                        Pesan →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-5 fade-up">
            <p className="text-muted mb-3">Tertarik dengan layanan kami?</p>
            <Link to="/order" className="btn btn-dark btn-lg px-5" style={{ borderRadius: "8px" }}>
              Konsultasi Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-5" style={{ background: "#f9f5ee" }}>
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span
              className="text-uppercase fw-semibold d-block mb-2"
              style={{ color: "#c9a84c", fontSize: "0.85rem", letterSpacing: ".12rem" }}
            >
              Keunggulan Kami
            </span>
            <h2 className="fw-bold">Kenapa Pilih Kami?</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: "🏆", title: "Berpengalaman", desc: "Lebih dari 10 tahun di bidang arsitektur dan konstruksi." },
              { icon: "📋", title: "RAB Transparan", desc: "Rencana anggaran biaya jelas sejak awal, tanpa biaya kejutan." },
              { icon: "⏱️", title: "Tepat Waktu", desc: "Komitmen penyelesaian proyek sesuai jadwal yang disepakati." },
              { icon: "🔑", title: "Garansi Pekerjaan", desc: "Kami memberikan garansi untuk setiap pekerjaan yang kami selesaikan." },
            ].map(({ icon, title, desc }, i) => (
              <div className={`col-sm-6 col-lg-3 fade-up delay-${i + 1}`} key={title}>
                <div className="text-center p-4 bg-white card-lift" style={{ borderRadius: "14px" }}>
                  <div style={{ fontSize: "2.5rem" }} className="mb-3">{icon}</div>
                  <h6 className="fw-bold mb-2">{title}</h6>
                  <p className="text-muted small mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}