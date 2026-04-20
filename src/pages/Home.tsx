import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";

const slides = [
  {
    id: 1,
    title: "Wujudkan Rumah Impian Anda",
    subtitle: "Kami hadir untuk merancang dan membangun hunian yang nyaman, estetik, dan sesuai kebutuhan Anda.",
    badge: "Desain & Bangun",
    img: "/r1.webp",
  },
  {
    id: 2,
    title: "Renovasi Rumah Profesional",
    subtitle: "Percayakan renovasi rumah Anda kepada tim berpengalaman kami. Hasil maksimal, tepat waktu.",
    badge: "Renovasi",
    img: "/r2.webp",
  },
  {
    id: 3,
    title: "Konsultasi Gratis Sekarang",
    subtitle: "Dapatkan estimasi biaya dan rekomendasi desain terbaik dari arsitek kami secara gratis.",
    badge: "Konsultasi",
    img: "/r3.webp",
  },
];

const services = [
  {
    icon: "🏠",
    title: "Desain Rumah",
    desc: "Rancangan modern, minimalis, atau klasik sesuai selera Anda.",
    img: "/p1.webp",
  },
  {
    icon: "🏗️",
    title: "Bangun Rumah",
    desc: "Pembangunan dari nol dengan material berkualitas tinggi.",
    img: "/p2.webp",
  },
  {
    icon: "🔨",
    title: "Renovasi",
    desc: "Transformasi rumah lama menjadi hunian baru yang segar.",
    img: "/p3.webp",
  },
];

const testimonials = [
  {
    name: "Andi Susanto",
    role: "Pemilik Rumah",
    text: "RumahAditya benar-benar membantu mewujudkan rumah impian saya. Desainnya elegan dan pengerjaannya sangat rapi. Sangat puas!",
    img: `https://placehold.co/80x80/c9a84c/ffffff?text=AS`,
  },
  {
    name: "Rina Kartika",
    role: "Klien Renovasi",
    text: "Tim mereka sangat profesional dan responsif. Renovasi selesai tepat waktu sesuai budget. Recommended banget!",
    img: `https://placehold.co/80x80/1a1a1a/ffffff?text=RK`,
  },
];

export default function Home() {
  const pageRef = useFadeIn();

  // Navbar scroll shadow
  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar?.classList.add("navbar-scrolled");
      } else {
        navbar?.classList.remove("navbar-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carousel
  useEffect(() => {
    const el = document.getElementById("heroCarousel");
    if (el && (window as any).bootstrap) {
      new (window as any).bootstrap.Carousel(el, { interval: 4000 });
    }
  }, []);

  return (
    <div ref={pageRef as any}>

      {/* ===== HERO CAROUSEL ===== */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ background: "#1a1a1a" }}
      >
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, i) => (
            <div key={slide.id} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img
                src={slide.img}
                className="d-block w-100"
                alt={`slide-${slide.id}`}
                style={{ height: "90vh", objectFit: "cover", opacity: 0.55 }}
              />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 text-start pb-5">
                <span
                  className="badge mb-3 px-3 py-2"
                  style={{ background: "#c9a84c", fontSize: "0.8rem", letterSpacing: ".1rem" }}
                >
                  {slide.badge}
                </span>
                <h1 className="fw-bold mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.2 }}>
                  {slide.title}
                </h1>
                <p className="mb-4 text-white-50" style={{ maxWidth: "520px", fontSize: "1rem" }}>
                  {slide.subtitle}
                </p>
                <div className="d-flex gap-3">
                  <Link to="/order" className="btn btn-light btn-lg px-4 fw-semibold">
                    Konsultasi Sekarang
                  </Link>
                  <Link to="/portfolio" className="btn btn-outline-light btn-lg px-4">
                    Lihat Portfolio
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* ===== PROMO OFFER ===== */}
      <section className="py-5" style={{ background: "#ffff" }}>
        <div className="container">
          <div className="row g-4">
            {[
              { label: "Promo Desain", disc: "Gratis Konsultasi", color: "#c9a84c", img: "/r4.webp" },
              { label: "Paket Renovasi", disc: "Harga Spesial", color: "#c9a84c", img: "/r5.webp" },
            ].map(({ label, disc, color, img }, i) => (
              <div className={`col-md-6 fade-up delay-${i + 1}`} key={label}>
                <div
                  className="position-relative overflow-hidden card-lift"
                  style={{ borderRadius: "16px", minHeight: "220px" }}
                >
                  <img
                    src={img}
                    alt={label}
                    className="w-100 h-100"
                    style={{ objectFit: "cover", position: "absolute", inset: 0, opacity: 0.65 }}
                  />
                  <div
                    className="position-relative p-4 d-flex flex-column justify-content-end"
                    style={{ minHeight: "220px", background: `linear-gradient(to top, ${color}cc, transparent)` }}
                  >
                    <span
                      className="badge mb-2 px-3 py-2 align-self-start"
                      style={{ background: "#c9a84c", fontSize: "0.75rem", letterSpacing: ".08rem" }}
                    >
                      {disc}
                    </span>
                    <h4 className="fw-bold text-white mb-2">{label}</h4>
                    <Link to="/order" className="btn btn-light btn-sm px-4 fw-semibold align-self-start"
                      style={{ borderRadius: "8px" }}>
                      Selengkapnya →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LAYANAN ===== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span
              className="text-uppercase fw-semibold d-block mb-2"
              style={{ color: "#c9a84c", fontSize: "0.85rem", letterSpacing: ".12rem" }}
            >
              Apa Yang Kami Tawarkan
            </span>
            <h2 className="fw-bold">Layanan Kami</h2>
            <p className="text-muted">Solusi lengkap untuk hunian impian Anda</p>
          </div>

          <div className="row g-4">
            {services.map(({ icon, title, desc, img }, i) => (
              <div className={`col-sm-6 col-lg-4 fade-up delay-${i + 1}`} key={title}>
                <div className="card border-0 shadow-sm h-100 overflow-hidden card-lift"
                  style={{ borderRadius: "14px" }}>
                  <div style={{ height: "180px", overflow: "hidden" }}>
                    <img
                      src={img}
                      alt={title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", transition: "transform .3s" }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <div className="card-body p-4">
                    <div style={{ fontSize: "1.8rem" }} className="mb-2">{icon}</div>
                    <h5 className="fw-bold mb-1">{title}</h5>
                    <p className="text-muted small mb-3">{desc}</p>
                    <Link to="/services" className="btn btn-sm btn-dark px-4 fw-semibold"
                      style={{ borderRadius: "8px" }}>
                      Detail →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 fade-up">
            <Link to="/services" className="btn btn-outline-dark btn-lg px-5 fw-semibold"
              style={{ borderRadius: "8px" }}>
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-5" style={{ background: "#f9f5ee" }}>
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-md-6 fade-up">
              <div style={{ borderRadius: "16px", overflow: "hidden", height: "480px" }}>
                <img
                  src="/om.webp"
                  alt="About RumahAditya"
                  className="w-100 h-100"
                  style={{ objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>
            </div>
            <div className="col-md-6 fade-up delay-2">
              <span
                className="text-uppercase fw-semibold d-block mb-2"
                style={{ color: "#c9a84c", fontSize: "0.85rem", letterSpacing: ".12rem" }}
              >
                Tentang Kami
              </span>
              <h2 className="fw-bold mb-3">Kami adalah RumahAditya</h2>
              <p className="text-muted mb-3">
                RumahAditya adalah perusahaan jasa arsitektur dan konstruksi yang berpusat di Surabaya.
                Dengan pengalaman lebih dari 10 tahun, kami telah menangani ratusan proyek mulai dari desain,
                pembangunan, hingga renovasi hunian residensial dan komersial.
              </p>
              <p className="text-muted mb-4">
                Tim kami terdiri dari arsitek, desainer interior, dan kontraktor berpengalaman yang berkomitmen
                menghadirkan hasil terbaik sesuai kebutuhan dan anggaran Anda.
              </p>
              <Link to="/about" className="btn btn-dark btn-lg px-5 fw-semibold"
                style={{ borderRadius: "8px" }}>
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span
              className="text-uppercase fw-semibold d-block mb-2"
              style={{ color: "#c9a84c", fontSize: "0.85rem", letterSpacing: ".12rem" }}
            >
              Hasil Karya
            </span>
            <h2 className="fw-bold">Portfolio Terbaru</h2>
            <p className="text-muted">Sebagian dari proyek yang telah kami selesaikan</p>
          </div>
          <div className="row g-3">
            {["/p4.webp", "/p5.webp", "/r6.webp"].map((src, i) => (
              <div className={`col-md-4 fade-up delay-${i + 1}`} key={i}>
                <div className="card-lift" style={{ borderRadius: "12px", overflow: "hidden", height: "240px" }}>
                  <img
                    src={src}
                    alt={`portfolio-${i + 1}`}
                    className="w-100 h-100"
                    style={{ objectFit: "cover", transition: "transform .3s" }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 fade-up">
            <Link to="/portfolio" className="btn btn-outline-dark btn-lg px-5 fw-semibold"
              style={{ borderRadius: "8px" }}>
              Lihat Semua Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span
              className="text-uppercase fw-semibold d-block mb-2"
              style={{ color: "#c9a84c", fontSize: "0.85rem", letterSpacing: ".12rem" }}
            >
              Ulasan Klien
            </span>
            <h2 className="fw-bold">Apa Kata Mereka?</h2>
          </div>
          <div className="row g-4 justify-content-center">
            {testimonials.map(({ name, role, text, img }, i) => (
              <div className={`col-md-6 col-lg-5 fade-up delay-${i + 1}`} key={name}>
                <div className="card border-0 shadow-sm p-4 h-100 card-lift"
                  style={{ borderRadius: "16px" }}>
                  <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                    "{text}"
                  </p>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <img
                      src={img}
                      alt={name}
                      style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover" }}
                    />
                    <div>
                      <strong className="d-block">{name}</strong>
                      <span className="text-muted small">{role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-5 text-white text-center" style={{ background: "#1a1a1a" }}>
        <div className="container py-3 fade-up">
          <h2 className="fw-bold mb-3">Siap Membangun Rumah Impian?</h2>
          <p className="text-white-50 mb-4">Konsultasikan kebutuhan Anda sekarang. Gratis, tanpa komitmen.</p>
          <Link to="/order" className="btn btn-light btn-lg px-5 fw-semibold"
            style={{ borderRadius: "8px" }}>
            Mulai Konsultasi
          </Link>
        </div>
      </section>

    </div>
  );
}