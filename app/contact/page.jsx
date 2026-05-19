"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

/*
 *  Earthion Tech — Contact Page
 *  app/contact/page.jsx
 *
 *  Contact: sales@earthion.co.in · +91 99998 33637 · Ms Neetal Narang
 *  Address: 501, Pratiek Plaza, Opp. Patel Auto, S.V. Road, Goregaon (W), Mumbai - 400104
 */

const INQUIRY_TYPES = [
  { id: "poc",        label: "Request a POC",         desc: "Try it on one asset. No commitment." },
  { id: "fleet",      label: "Fleet / Large Deployment", desc: "10+ vehicles or multiple DG sets." },
  { id: "dg",         label: "DG Set Enquiry",        desc: "20 kVA to 4000 kVA — any make." },
  { id: "vehicles",   label: "Vehicle Fleet Enquiry", desc: "Logistics, defence, mining, construction." },
  { id: "partnership",label: "Partnership / Distribution", desc: "Represent Earthion in your region." },
  { id: "other",      label: "General Enquiry",       desc: "Anything else." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function handleSubmit() {
    if (!form.name || !form.email) return;
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        :root{--c-dark:#0D1B3E;--c-green:#1A6FBF;--c-accent:#6DBF3A;--c-warm:#F5F7FA;--c-slate:#5A6B80;--c-border:#D4DCE8;--c-white:#FFFFFF;--serif:'Instrument Serif',Georgia,serif;--sans:'DM Sans',system-ui,sans-serif;--nav-h:68px;}
        html{scroll-behavior:smooth;}body{font-family:var(--sans);background:var(--c-warm);color:var(--c-dark);}
        .section{padding:6rem 5%;}.section-inner{max-width:1100px;margin:0 auto;}
        .section-label{font-size:.72rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--c-green);margin-bottom:1rem;}
        .section-h2{font-family:var(--serif);font-size:clamp(1.7rem,3vw,2.6rem);letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem;}
        .section-body{font-size:.95rem;color:var(--c-slate);line-height:1.8;max-width:620px;font-weight:300;margin-bottom:2rem;}
        .reveal{opacity:0;transform:translateY(20px);transition:opacity .65s ease,transform .65s ease;}
        .reveal.revealed{opacity:1;transform:translateY(0);}
        .reveal-delay-1{transition-delay:.1s;}.reveal-delay-2{transition-delay:.2s;}

        .page-hero{background:var(--c-dark);padding:calc(var(--nav-h) + 4rem) 5% 4rem;position:relative;overflow:hidden;}
        .page-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 70% at 80% 30%,rgba(26,111,191,.2) 0%,transparent 70%);}
        .page-hero-inner{max-width:1100px;margin:0 auto;position:relative;z-index:2;}
        .page-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(109,191,58,.12);border:1px solid rgba(109,191,58,.3);padding:5px 12px;border-radius:100px;margin-bottom:1.5rem;font-size:.75rem;font-weight:600;color:#6DBF3A;letter-spacing:.06em;text-transform:uppercase;}
        .page-h1{font-family:var(--serif);font-size:clamp(2.2rem,5vw,3.8rem);color:#fff;letter-spacing:-.02em;line-height:1.15;margin-bottom:1.25rem;max-width:720px;}
        .page-h1 em{color:#6DBF3A;font-style:normal;}
        .page-sub{font-size:1rem;color:rgba(255,255,255,.55);line-height:1.75;max-width:580px;font-weight:300;}

        /* MAIN GRID */
        .contact-main{max-width:1100px;margin:0 auto;padding:5rem 5%;display:grid;grid-template-columns:1fr 1.4fr;gap:5rem;align-items:start;}

        /* LEFT — CONTACT INFO */
        .info-section{}
        .info-label{font-size:.72rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--c-green);margin-bottom:1.5rem;}
        .info-items{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:3rem;}
        .info-item{display:flex;align-items:flex-start;gap:1rem;}
        .info-icon{width:40px;height:40px;border-radius:8px;background:rgba(26,111,191,.08);border:1px solid rgba(26,111,191,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#1A6FBF;}
        .info-item-label{font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--c-slate);margin-bottom:.25rem;}
        .info-item-value{font-size:.9rem;color:var(--c-dark);line-height:1.55;}
        .info-item-value a{color:var(--c-green);text-decoration:none;}
        .info-item-value a:hover{text-decoration:underline;}

        .inquiry-types{display:flex;flex-direction:column;gap:.5rem;}
        .inquiry-label{font-size:.72rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--c-green);margin-bottom:1rem;}
        .inq-item{border:1px solid var(--c-border);border-radius:8px;padding:.85rem 1rem;transition:border-color .2s,background .2s;cursor:pointer;}
        .inq-item:hover{border-color:var(--c-green);background:rgba(26,111,191,.04);}
        .inq-title{font-size:.88rem;font-weight:600;color:var(--c-dark);margin-bottom:.2rem;}
        .inq-desc{font-size:.78rem;color:var(--c-slate);}

        /* RIGHT — FORM */
        .form-card{background:#fff;border:1px solid var(--c-border);border-radius:14px;padding:2.5rem;box-shadow:0 4px 24px rgba(13,27,62,.06);}
        .form-label{font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--c-green);margin-bottom:1.5rem;display:block;}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;}
        .form-group{display:flex;flex-direction:column;gap:.4rem;}
        .form-group-full{grid-column:1/-1;}
        label{font-size:.78rem;font-weight:600;color:var(--c-slate);}
        .form-input{font-family:var(--sans);font-size:.9rem;padding:10px 14px;border:1px solid var(--c-border);border-radius:6px;background:#fff;color:var(--c-dark);transition:border-color .2s,box-shadow .2s;outline:none;width:100%;}
        .form-input:focus{border-color:var(--c-green);box-shadow:0 0 0 3px rgba(26,111,191,.08);}
        .form-select{font-family:var(--sans);font-size:.9rem;padding:10px 14px;border:1px solid var(--c-border);border-radius:6px;background:#fff;color:var(--c-dark);outline:none;cursor:pointer;width:100%;transition:border-color .2s;}
        .form-select:focus{border-color:var(--c-green);}
        .form-textarea{font-family:var(--sans);font-size:.9rem;padding:10px 14px;border:1px solid var(--c-border);border-radius:6px;background:#fff;color:var(--c-dark);resize:vertical;min-height:120px;outline:none;width:100%;transition:border-color .2s;}
        .form-textarea:focus{border-color:var(--c-green);}
        .form-submit{width:100%;background:#6DBF3A;color:#0D1B3E;font-family:var(--sans);font-weight:600;font-size:.95rem;padding:14px;border-radius:6px;border:none;cursor:pointer;transition:background .2s,transform .15s;margin-top:1rem;}
        .form-submit:hover{background:#82D94A;transform:translateY(-1px);}
        .form-note{font-size:.75rem;color:var(--c-slate);margin-top:.75rem;text-align:center;}
        .success-box{background:#E8F7EF;border:1px solid rgba(109,191,58,.3);border-radius:10px;padding:2rem;text-align:center;}
        .success-icon{font-size:2.5rem;margin-bottom:1rem;}
        .success-h3{font-family:var(--serif);font-size:1.4rem;color:#0D1B3E;margin-bottom:.5rem;}
        .success-body{font-size:.88rem;color:var(--c-slate);line-height:1.65;}

        .footer-mini{background:var(--c-dark);padding:2rem 5%;border-top:1px solid rgba(109,191,58,.12);}
        .footer-mini-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;}
        .footer-copy{font-size:.78rem;color:rgba(255,255,255,.25);}
        .footer-sgt{font-size:.75rem;color:rgba(255,255,255,.25);}
        .footer-sgt a{color:rgba(26,111,191,.7);text-decoration:none;}

        @media(max-width:900px){.contact-main{grid-template-columns:1fr;gap:2.5rem;}.form-grid{grid-template-columns:1fr;}}
      `}</style>

      <Navbar activePage="contact" />

      <main>
        {/* HERO */}
        <div className="page-hero">
          <div className="page-hero-inner">
            <div className="page-tag">Contact</div>
            <h1 className="page-h1">
              Start with one asset.<br />
              <em>We&apos;ll prove the rest.</em>
            </h1>
            <p className="page-sub">
              Every engagement starts with a Proof of Concept. One DG or one vehicle.
              NABL-certified baseline. Post-installation measurement. You see the numbers
              before committing to anything further.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={{ background: "var(--c-warm)" }}>
          <div className="contact-main">

            {/* LEFT — CONTACT INFO */}
            <div className="reveal">
              <div className="info-label">Direct Contact</div>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.06 9.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .93h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.82a16 16 0 006.29 6.29l1.16-1.16a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="info-item-label">Phone</div>
                    <div className="info-item-value"><a href="tel:+919999833637">+91 99998 33637</a></div>
                    <div className="info-item-value" style={{ fontSize: ".82rem", color: "var(--c-slate)", marginTop: ".2rem" }}>Ms. Neetal Narang</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="info-item-label">Email</div>
                    <div className="info-item-value"><a href="mailto:sales@earthion.co.in">sales@earthion.co.in</a></div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 00-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 001.3 0C13 21.5 20 15.4 20 10a8 8 0 00-8-8z"/></svg>
                  </div>
                  <div>
                    <div className="info-item-label">Address</div>
                    <div className="info-item-value">
                      501, Pratiek Plaza<br />
                      Opp. Patel Auto, S.V. Road<br />
                      Goregaon (W), Mumbai – 400104
                    </div>
                  </div>
                </div>
                {/* <div className="info-item">
                  <div className="info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                  </div>
                </div> */}
              </div>

              <div className="inquiry-label">What can we help with?</div>
              <div className="inquiry-types">
                {INQUIRY_TYPES.map((t) => (
                  <div className="inq-item" key={t.id} onClick={() => setForm((f) => ({ ...f, type: t.label }))}>
                    <div className="inq-title">{t.label}</div>
                    <div className="inq-desc">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="reveal reveal-delay-1">
              <div className="form-card">
                {submitted ? (
                  <div className="success-box">
                    <div className="success-icon">✅</div>
                    <h3 className="success-h3">Enquiry received.</h3>
                    <p className="success-body">
                      Thank you, {form.name}. We&apos;ll review your message and get back to you
                      within one business day at <strong>{form.email}</strong>.
                      <br /><br />
                      For urgent matters, call us directly at{" "}
                      <a href="tel:+919999833637" style={{ color: "#1A6FBF" }}>+91 99998 33637</a>.
                    </p>
                  </div>
                ) : (
                  <>
                    <span className="form-label">Send us a message</span>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Full name *</label>
                        <input className="form-input" type="text" value={form.name} onChange={set("name")} placeholder="Your name" />
                      </div>
                      <div className="form-group">
                        <label>Company / Organisation</label>
                        <input className="form-input" type="text" value={form.company} onChange={set("company")} placeholder="Company name" />
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input className="form-input" type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input className="form-input" type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" />
                      </div>
                      <div className="form-group form-group-full">
                        <label>Enquiry type</label>
                        <select className="form-select" value={form.type} onChange={set("type")}>
                          <option value="">Select enquiry type…</option>
                          {INQUIRY_TYPES.map((t) => <option key={t.id} value={t.label}>{t.label}</option>)}
                        </select>
                      </div>
                      <div className="form-group form-group-full">
                        <label>Message</label>
                        <textarea className="form-textarea" value={form.message} onChange={set("message")} placeholder="Tell us about your asset, fleet size, location, and what you want to achieve…" />
                      </div>
                    </div>
                    <button className="form-submit" onClick={handleSubmit}>
                      Send Enquiry →
                    </button>
                    <p className="form-note">We respond within one business day. No spam, ever.</p>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="footer-mini">
        <div className="footer-mini-inner">
          <span className="footer-copy">© {new Date().getFullYear()} Earthion Tech LLP. All rights reserved.</span>
          <span className="footer-sgt">Technology by <a href="https://www.sgthydroedge.com" target="_blank" rel="noopener noreferrer">SGT HydroEdge</a></span>
        </div>
      </footer>
    </>
  );
}
