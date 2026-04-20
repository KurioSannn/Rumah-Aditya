import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";
import { useFadeIn } from "../hooks/useFadeIn";

// ─── Constants ───────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    nama: "Budi Santoso",
    lokasi: "Surabaya",
    pesan: "Pelayanannya sangat profesional! Rumah impian saya terwujud tepat waktu dan sesuai budget.",
    rating: 5,
  },
  {
    nama: "Siti Rahayu",
    lokasi: "Malang",
    pesan: "Tim BuildSpace sangat responsif dan detail. Hasil renovasi rumah kami melebihi ekspektasi.",
    rating: 5,
  },
  {
    nama: "Ahmad Fauzi",
    lokasi: "Sidoarjo",
    pesan: "Proses konsultasi mudah, harga transparan, dan kualitas bangunan sangat memuaskan.",
    rating: 4,
  },
] as const;

const TIPE_LAYANAN = ["Desain Rumah", "Bangun Rumah", "Renovasi", "Desain Interior", "Konsultasi"] as const;

const BUDGET_OPTIONS = [
  "Rp 50 Juta - 100 Juta",
  "Rp 100 Juta - 300 Juta",
  "Rp 300 Juta - 500 Juta",
  "Rp 500 Juta - 1 Miliar",
  "Di atas Rp 1 Miliar",
] as const;

const STATUS_COLOR: Record<string, string> = {
  Menunggu: "#6c757d",
  Proses: "#c9a84c",
  Selesai: "#198754",
};

const GOLD = "#c9a84c";

// ─── Types ───────────────────────────────────────────────────────────────────

type FormType = {
  nama: string;
  no_hp: string;
  lokasi: string;
  luas_tanah: string;
  tipe_rumah: string;
  budget: string;
  catatan: string;
};

type Order = {
  id: string;
  nama: string;
  lokasi: string;
  tipe_rumah: string;
  budget: string;
  status: string;
  created_at: string;
};

const INITIAL_FORM: FormType = {
  nama: "",
  no_hp: "",
  lokasi: "",
  luas_tanah: "",
  tipe_rumah: "",
  budget: "",
  catatan: "",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-2" style={{ color: GOLD, fontSize: "1rem" }}>
      {"★".repeat(rating)}
      <span style={{ color: "#ddd" }}>{"★".repeat(5 - rating)}</span>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-uppercase fw-semibold d-block mb-2"
      style={{ color: GOLD, fontSize: "0.85rem", letterSpacing: ".12rem" }}
    >
      {children}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className="badge px-3 py-2"
      style={{
        background: STATUS_COLOR[status] ?? "#6c757d",
        fontSize: "0.75rem",
      }}
    >
      {status}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Order() {
  // useFadeIn — tiap section punya ref sendiri
  const refForm = useFadeIn<HTMLElement>();
  const refTestimoni = useFadeIn<HTMLElement>();
  const refTabel = useFadeIn<HTMLElement>();

  const [form, setForm] = useState<FormType>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingTable, setLoadingTable] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const fetchOrders = useCallback(async () => {
    setLoadingTable(true);
    setFetchError(false);
    const { data, error } = await supabase
      .from("orders")
      .select("id, nama, lokasi, tipe_rumah, budget, status, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      setFetchError(true);
    } else if (data) {
      setOrders(data);
    }
    setLoadingTable(false);
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 5000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      const { error } = await supabase.from("orders").insert([form]);
      if (error) {
        alert("Gagal mengirim konsultasi. Coba lagi ya!");
        console.error(error);
      } else {
        setSubmitted(true);
        setForm(INITIAL_FORM);
        await fetchOrders();
      }
      setLoading(false);
    },
    [form, fetchOrders]
  );

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/r4.webp') center/cover",
          minHeight: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="fw-bold mb-2">Konsultasi</h1>
        <p className="text-white-50 mb-0">Ceritakan kebutuhan Anda, kami siap membantu</p>
      </div>

      {/* ── FORM KONSULTASI ── */}
      <section ref={refForm} className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <div className="text-center mb-5 fade-up">
                <SectionLabel>Hubungi Kami</SectionLabel>
                <h2 className="fw-bold">Form Konsultasi</h2>
                <p className="text-muted">Isi form di bawah, tim kami akan menghubungi Anda dalam 1×24 jam</p>
              </div>

              {submitted && (
                <div className="alert alert-success alert-dismissible mb-4 fade-up visible" role="alert">
                  ✅ Terima kasih! Konsultasi Anda berhasil dikirim. Kami akan segera menghubungi Anda.
                  <button type="button" className="btn-close" onClick={() => setSubmitted(false)} />
                </div>
              )}

              <div className="card border-0 shadow-sm p-4 p-md-5 fade-up delay-1" style={{ borderRadius: "16px" }}>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">
                        Nama Lengkap <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="nama"
                        className="form-control"
                        placeholder="Masukkan nama lengkap"
                        value={form.nama}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">
                        No. WhatsApp <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        name="no_hp"
                        className="form-control"
                        placeholder="08xxxxxxxxxx"
                        value={form.no_hp}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">
                        Lokasi / Kota <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="lokasi"
                        className="form-control"
                        placeholder="Contoh: Surabaya, Jawa Timur"
                        value={form.lokasi}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">
                        Luas Tanah <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="luas_tanah"
                        className="form-control"
                        placeholder="Contoh: 120 m²"
                        value={form.luas_tanah}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">
                        Tipe Layanan <span className="text-danger">*</span>
                      </label>
                      <select
                        name="tipe_rumah"
                        className="form-select"
                        value={form.tipe_rumah}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      >
                        <option value="">Pilih layanan...</option>
                        {TIPE_LAYANAN.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Estimasi Budget</label>
                      <select
                        name="budget"
                        className="form-select"
                        value={form.budget}
                        onChange={handleChange}
                        disabled={loading}
                      >
                        <option value="">Pilih range budget...</option>
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold small">Catatan Tambahan</label>
                      <textarea
                        name="catatan"
                        className="form-control"
                        rows={4}
                        placeholder="Ceritakan kebutuhan atau keinginan Anda secara detail..."
                        value={form.catatan}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>

                    <div className="col-12 mt-2">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg w-100 fw-semibold"
                        style={{ borderRadius: "8px" }}
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" />
                            Mengirim...
                          </>
                        ) : (
                          "Kirim Konsultasi"
                        )}
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONI ── */}
      <section ref={refTestimoni} className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <SectionLabel>Kata Mereka</SectionLabel>
            <h2 className="fw-bold">Testimoni Klien</h2>
          </div>

          <div className="row g-4">
            {TESTIMONIALS.map((t, i) => (
              <div
                className={`col-md-4 fade-up delay-${i + 1}`}
                key={t.nama}
              >
                <div
                  className="card border-0 shadow-sm h-100 p-4 card-lift"
                  style={{ borderRadius: "12px" }}
                >
                  <StarRating rating={t.rating} />
                  <p className="text-muted small flex-grow-1">"{t.pesan}"</p>
                  <div className="d-flex align-items-center gap-2 mt-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "#1a1a1a",
                        fontSize: "0.9rem",
                      }}
                    >
                      {t.nama.charAt(0)}
                    </div>
                    <div>
                      <strong className="d-block small">{t.nama}</strong>
                      <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                        📍 {t.lokasi}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABEL ORDER ── */}
      <section ref={refTabel} className="py-5">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <SectionLabel>Data Klien</SectionLabel>
            <h2 className="fw-bold">Yang Sudah Order</h2>
            <p className="text-muted">Bergabunglah bersama klien kami yang sudah puas</p>
          </div>

          <div className="card border-0 shadow-sm fade-up delay-1" style={{ borderRadius: "12px", overflow: "hidden" }}>
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead style={{ background: "#1a1a1a", color: "#fff" }}>
                  <tr>
                    <th className="py-3 px-4">#</th>
                    <th className="py-3">Nama</th>
                    <th className="py-3">Lokasi</th>
                    <th className="py-3">Tipe Layanan</th>
                    <th className="py-3">Budget</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingTable ? (
                    <tr>
                      <td colSpan={6} className="text-center py-5">
                        <span className="spinner-border spinner-border-sm me-2 text-muted" />
                        <span className="text-muted">Memuat data...</span>
                      </td>
                    </tr>
                  ) : fetchError ? (
                    <tr>
                      <td colSpan={6} className="text-center py-4 text-danger">
                        ⚠️ Gagal memuat data.{" "}
                        <button className="btn btn-link btn-sm p-0" onClick={fetchOrders}>
                          Coba lagi
                        </button>
                      </td>
                    </tr>
                  ) : orders.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-4 text-muted">
                        Belum ada order masuk.
                      </td>
                    </tr>
                  ) : (
                    orders.map((o, i) => (
                      <tr key={o.id}>
                        <td className="px-4 py-3 text-muted">{i + 1}</td>
                        <td className="py-3 fw-semibold">{o.nama}</td>
                        <td className="py-3 text-muted">{o.lokasi}</td>
                        <td className="py-3">{o.tipe_rumah}</td>
                        <td className="py-3">{o.budget}</td>
                        <td className="py-3">
                          <StatusBadge status={o.status} />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}