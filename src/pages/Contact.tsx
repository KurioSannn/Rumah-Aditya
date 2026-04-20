import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";

type FormType = {
  nama: string;
  email: string;
  pesan: string;
};

export default function Contact() {
  const pageRef = useFadeIn<HTMLDivElement>();

  const [form, setForm] = useState<FormType>({
    nama: "",
    email: "",
    pesan: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi sederhana
    if (!form.nama || !form.email || !form.pesan) return;

    console.log(form);

    setSubmitted(true);
    setForm({ nama: "", email: "", pesan: "" });
  };

  // Auto hide alert
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const kontakList = [
    {
      icon: "📍",
      label: "Alamat",
      value: "Jl. Sumursongo, Kec. Karas, Kab. Magetan, Jawa Timur",
    },
    {
      icon: "📞",
      label: "Telepon / WhatsApp",
      value: "+62 856-4645-8409",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "rumahaditya@email.com",
    },
    {
      icon: "🕐",
      label: "Jam Operasional",
      value: "Senin – Sabtu, 08.00 – 17.00 WIB",
    },
  ];

  const sosmedStyle: React.CSSProperties = {
    width: "44px",
    height: "44px",
    background: "#1a1a1a",
    borderRadius: "10px",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  };

  return (
    <div ref={pageRef}>
      {/* HEADER */}
      <div
        className="py-5 text-white text-center"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/r4.webp') center/cover",
          minHeight: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="fw-bold mb-2">Contact Us</h1>
        <p className="mb-0 text-white-50">
          <Link to="/" className="text-white-50 text-decoration-none">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#c9a84c" }}>Contact</span>
        </p>
      </div>

      {/* CONTENT */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row g-5">
            {/* LEFT */}
            <div className="col-lg-5 fade-up">
              <span
                className="text-uppercase fw-semibold d-block mb-2"
                style={{
                  color: "#c9a84c",
                  fontSize: "0.85rem",
                  letterSpacing: ".12rem",
                }}
              >
                Hubungi Kami
              </span>

              <h2 className="fw-bold mb-4">Ada Pertanyaan?</h2>

              <p className="text-muted mb-4">
                Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda
                menemukan solusi terbaik untuk hunian impian Anda.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                {kontakList.map((item) => (
                  <div
                    className="d-flex gap-3 align-items-start"
                    key={item.label}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "44px",
                        height: "44px",
                        background: "#f5f0e8",
                        borderRadius: "10px",
                        fontSize: "1.2rem",
                      }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <strong className="d-block small">
                        {item.label}
                      </strong>
                      <span className="text-muted small">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* SOSMED */}
              <strong className="small d-block mb-2">Follow Us</strong>

              <div className="d-flex gap-2 mb-4">
                <a href="#" style={sosmedStyle}>
                  📸
                </a>
                <a
                  href="https://wa.me/6285646458409"
                  target="_blank"
                  rel="noreferrer"
                  style={sosmedStyle}
                >
                  💬
                </a>
                <a href="#" style={sosmedStyle}>
                  ▶️
                </a>
              </div>

              {/* WA BUTTON (FIXED) */}
              <a
                href="https://wa.me/6285646458409"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark btn-lg w-100 fw-semibold"
                style={{ borderRadius: "10px" }}
              >
                💬 Chat via WhatsApp
              </a>
            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-7 fade-up delay-2">
              <div
                className="card border-0 shadow-sm p-4 p-md-5"
                style={{ borderRadius: "16px" }}
              >
                <h5 className="fw-bold mb-4">Kirim Pesan</h5>

                {submitted && (
                  <div className="alert alert-success mb-4">
                    ✅ Pesan Anda berhasil terkirim!
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="nama"
                        className="form-control"
                        placeholder="Nama lengkap"
                        value={form.nama}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="pesan"
                        className="form-control"
                        rows={5}
                        placeholder="Pesan..."
                        value={form.pesan}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg w-100 fw-semibold"
                        style={{ borderRadius: "8px" }}
                      >
                        Kirim Pesan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-5">
        <div className="container fade-up">
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              height: "400px",
            }}
          >
          <iframe
            src="https://www.google.com/maps?q=Sumursongo,Karas,Magetan,Jawa%20Timur&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Lokasi"
          />
          </div>
        </div>
      </section>
    </div>
  );
}