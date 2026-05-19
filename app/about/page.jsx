"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

/*
 *  Earthion Tech — About Page
 *  app/about/page.jsx
 *
 *  Content from GreenDrive & GreenX brochures.
 *  Contact: sales@earthion.co.in · +91 99998 33637 · Ms Neetal Narang
 *  Address: 501, Pratiek Plaza, Opp. Patel Auto, S.V. Road, Goregaon (W), Mumbai - 400104
 *
 *  IMAGE: public/images/earthion-logo-white-bg.png
 */

const PILLARS = [
  {
    num: "01",
    title: "Earthion Tech — Sustainability Brand",
    body: "Earthion Tech LLP delivers Controlled Hydrogen Fuel Assist (CHFA) technology — engineered in partnership with SGT HydroEdge — for diesel engines from 2L to 25L+ (vehicles) and 20 kVA to 4000 kVA (DG sets). Earthion brings the product to market with sales, deployment, calibration, and after-sales ownership. SGT brings the engineering pedigree.",
    badge: "Indigenously built. Field-tested. Fleet-ready.",
  },
  {
    num: "02",
    title: "Research, Engineering & Validation",
    body: "Every emission claim is validated through stack-emission testing at NABL-accredited laboratories — Neetal Labs, Ekdant Enviro, Lata Envirotech. The technology draws on peer-reviewed research from 20+ institutions worldwide including ScienceDirect, Springer, MDPI, and Nature Scientific Reports. Every unit validated before it ships.",
    badge: "NABL-certified on every deployment.",
  },
  {
    num: "03",
    title: "Manufacturing & Quality — Made in India",
    body: "Units are manufactured at the state-of-the-art facility at Chakan, Pune — with standardised material quality, stringent in-line QC, vibration & shock testing, and full IoT traceability on every unit shipped. Patent-applied cell design delivers high HHO yield at low electrical draw.",
    badge: "Every unit ships digitally connected to GreenVision™ from day one.",
  },
  {
    num: "04",
    title: "Service & Support — Mission-Grade",
    body: "GreenDrive and GreenX are designed for workshop-level serviceability — no specialist tools, no proprietary consumables, no foreign service dependencies. Routine top-ups (water + occasional KOH electrolyte) can be done by any workshop personnel with standard training. Remote diagnostics via GreenVision™ pre-empt most field issues before they cause downtime.",
    badge: "Pan-India field service. Custom AMC packages. 24×7 remote monitoring.",
  },
];

const DEPLOYMENT_STEPS = [
  "Vehicle / DG audit — engine BS-norm survey — baseline fuel logging",
  "Single-asset POC on a representative platform",
  "Independent NABL stack-emission verification",
  "Engagement model: CapEx or Decarbonisation-as-a-Service (conditions apply)",
  "Phased fleet / installation roll-out — under 8 hours per asset",
  "GreenVision™ onboarding for live fleet-wide monitoring",
  "Periodic tCO₂e & ESG reports (subject to fuel-data availability)",
];

export default function AboutPage() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

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
        .reveal-delay-1{transition-delay:.1s;}.reveal-delay-2{transition-delay:.2s;}.reveal-delay-3{transition-delay:.3s;}

        .page-hero{background:var(--c-dark);padding:calc(var(--nav-h) + 4rem) 5% 5rem;position:relative;overflow:hidden;}
        .page-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 70% at 80% 30%,rgba(26,111,191,.2) 0%,transparent 70%);}
        .page-hero-inner{max-width:1100px;margin:0 auto;position:relative;z-index:2;}
        .page-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(109,191,58,.12);border:1px solid rgba(109,191,58,.3);padding:5px 12px;border-radius:100px;margin-bottom:1.5rem;font-size:.75rem;font-weight:600;color:#6DBF3A;letter-spacing:.06em;text-transform:uppercase;}
        .page-h1{font-family:var(--serif);font-size:clamp(2.2rem,5vw,3.8rem);color:#fff;letter-spacing:-.02em;line-height:1.15;margin-bottom:1.25rem;max-width:720px;}
        .page-h1 em{color:#6DBF3A;font-style:normal;}
        .page-sub{font-size:1rem;color:rgba(255,255,255,.55);line-height:1.75;max-width:580px;font-weight:300;}

        /* PILLARS */
        .pillars-list{display:flex;flex-direction:column;gap:0;margin-top:2.5rem;}
        .pillar{display:grid;grid-template-columns:72px 1fr;gap:2rem;padding:2.5rem 0;border-bottom:1px solid var(--c-border);align-items:start;}
        .pillar:last-child{border-bottom:none;}
        .pillar-num{font-family:var(--serif);font-size:2.5rem;color:#1A6FBF;opacity:.3;line-height:1;}
        .pillar-title{font-weight:700;font-size:1.05rem;margin-bottom:.6rem;color:var(--c-dark);}
        .pillar-body{font-size:.9rem;color:var(--c-slate);line-height:1.75;margin-bottom:.75rem;}
        .pillar-badge{display:inline-block;background:rgba(109,191,58,.1);border:1px solid rgba(109,191,58,.25);color:#3A8A1A;font-size:.75rem;font-weight:600;padding:4px 12px;border-radius:100px;}

        /* DEPLOYMENT STEPS */
        .steps-grid{display:flex;flex-direction:column;gap:0;margin-top:2rem;}
        .dep-step{display:flex;align-items:flex-start;gap:1.25rem;padding:1rem 0;border-bottom:1px solid var(--c-border);}
        .dep-step:last-child{border-bottom:none;}
        .dep-step-num{font-family:var(--serif);font-size:1.1rem;color:#1A6FBF;min-width:28px;opacity:.6;padding-top:.05rem;}
        .dep-step-text{font-size:.9rem;color:var(--c-slate);line-height:1.6;}

        /* SGT PARTNER STRIP */
        .partner-strip{background:rgba(26,111,191,.06);border-top:1px solid rgba(26,111,191,.15);border-bottom:1px solid rgba(26,111,191,.15);padding:3rem 5%;}
        .partner-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap;}
        .partner-text h3{font-family:var(--serif);font-size:1.3rem;margin-bottom:.5rem;}
        .partner-text p{font-size:.9rem;color:var(--c-slate);line-height:1.7;max-width:620px;}
        .partner-badge{display:inline-flex;align-items:center;gap:8px;background:var(--c-green);color:#fff;padding:12px 22px;border-radius:6px;font-size:.875rem;font-weight:500;text-decoration:none;white-space:nowrap;transition:background .2s;}
        .partner-badge:hover{background:#1559A0;}
        .partner-dot{width:8px;height:8px;border-radius:50%;background:#6DBF3A;flex-shrink:0;}

        /* CONTACT SECTION */
        .contact-section{background:var(--c-dark);padding:6rem 5%;}
        .contact-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start;}
        .contact-h2{font-family:var(--serif);font-size:clamp(1.8rem,3.5vw,2.6rem);color:#fff;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem;}
        .contact-sub{font-size:.95rem;color:rgba(255,255,255,.55);line-height:1.8;margin-bottom:2.5rem;font-weight:300;}
        .contact-items{display:flex;flex-direction:column;gap:1.25rem;}
        .contact-item{display:flex;align-items:flex-start;gap:1rem;}
        .contact-icon{width:40px;height:40px;border-radius:8px;background:rgba(109,191,58,.1);border:1px solid rgba(109,191,58,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#6DBF3A;}
        .contact-label{font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:.25rem;}
        .contact-value{font-size:.9rem;color:rgba(255,255,255,.75);}
        .contact-value a{color:#6DBF3A;text-decoration:none;}
        .contact-value a:hover{text-decoration:underline;}

        /* CONTACT BOX (right side) */
        .contact-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:2.5rem;}
        .contact-box-label{font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#6DBF3A;margin-bottom:1.5rem;}
        .contact-box-h3{font-family:var(--serif);font-size:1.4rem;color:#fff;margin-bottom:.75rem;}
        .contact-box-body{font-size:.88rem;color:rgba(255,255,255,.5);line-height:1.7;margin-bottom:2rem;}
        .btn-green{display:inline-block;background:#6DBF3A;color:#0D1B3E;font-family:var(--sans);font-weight:600;font-size:.9rem;padding:13px 28px;border-radius:6px;text-decoration:none;transition:transform .2s,box-shadow .2s;margin-bottom:1rem;}
        .btn-green:hover{transform:translateY(-1px);box-shadow:0 6px 24px rgba(109,191,58,.4);}
        .contact-note{font-size:.78rem;color:rgba(255,255,255,.3);line-height:1.5;}

        .footer-mini{background:var(--c-dark);padding:2rem 5%;border-top:1px solid rgba(109,191,58,.12);}
        .footer-mini-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;}
        .footer-copy{font-size:.78rem;color:rgba(255,255,255,.25);}
        .footer-sgt{font-size:.75rem;color:rgba(255,255,255,.25);}
        .footer-sgt a{color:rgba(26,111,191,.7);text-decoration:none;}

        @media(max-width:900px){.pillar{grid-template-columns:50px 1fr;}.contact-inner{grid-template-columns:1fr;}.partner-inner{flex-direction:column;}}
      `}</style>

      <Navbar activePage="about" />

      <main>
        {/* HERO */}
        <div className="page-hero">
          <div className="page-hero-inner">
            <div className="page-tag">About Earthion</div>
            <h1 className="page-h1">
              Indigenously built.<br />
              <em>Field-tested. Fleet-ready.</em>
            </h1>
            <p className="page-sub">
              Earthion Tech LLP is a Mumbai-based sustainability infrastructure company delivering
              Controlled Hydrogen Fuel Assist to diesel fleets and generator installations across India.
              We own the deployment, the calibration, and the after-sales — so you don&apos;t have to.
            </p>
          </div>
        </div>

        {/* FOUR PILLARS */}
        <section className="section" style={{ background: "var(--c-warm)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">The Promise Behind the Product</div>
              <h2 className="section-h2">Why Earthion. Why now.</h2>
              <p className="section-body">
                Four commitments that define how we work — not marketing language.
                Each one is verifiable.
              </p>
            </div>
            <div className="pillars-list">
              {PILLARS.map((p, i) => (
                <div className={`pillar reveal reveal-delay-${(i % 3) + 1}`} key={p.num}>
                  <div className="pillar-num">{p.num}</div>
                  <div>
                    <div className="pillar-title">{p.title}</div>
                    <div className="pillar-body">{p.body}</div>
                    <span className="pillar-badge">{p.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPLOYMENT PROCESS */}
        <section className="section" style={{ background: "var(--c-white)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">How We Deploy</div>
              <h2 className="section-h2">7 steps to fleet-wide decarbonisation.</h2>
              <p className="section-body">
                We do not drop hardware and leave. Every deployment follows a structured process
                with independent measurement and monitoring at every stage.
              </p>
            </div>
            <div className="steps-grid reveal reveal-delay-1">
              {DEPLOYMENT_STEPS.map((s, i) => (
                <div className="dep-step" key={i}>
                  <div className="dep-step-num">0{i + 1}</div>
                  <div className="dep-step-text">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SGT PARTNER */}
        <div className="partner-strip">
          <div className="partner-inner">
            <div className="partner-text">
              <h3>Technology Partner: SGT HydroEdge</h3>
              <p>
                Earthion&apos;s CHFA systems are built on technology developed and validated by SGT HydroEdge —
                India&apos;s first manufacturer of industrial on-demand hydrogen systems and a recognised
                DeepTech company under Startup India. Earthion brings the product to market;
                SGT brings the engineering pedigree.
              </p>
            </div>
            <a href="https://www.sgthydroedge.com" target="_blank" rel="noopener noreferrer" className="partner-badge">
              <span className="partner-dot" />
              Visit SGT HydroEdge ↗
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="contact-section">
          <div className="contact-inner">
            <div className="reveal">
              <div className="section-label" style={{ color: "#6DBF3A" }}>Get in Touch</div>
              <h2 className="contact-h2">Talk to us directly.</h2>
              <p className="contact-sub">
                Whether you&apos;re enquiring about a POC, a fleet deployment, or a partnership,
                reach out to us and we&apos;ll respond within one business day.
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.06 9.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .93h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.82a16 16 0 006.29 6.29l1.16-1.16a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value"><a href="tel:+919999833637">+91 99998 33637</a></div>
                    <div className="contact-value" style={{ fontSize: ".8rem", marginTop: ".2rem", color: "rgba(255,255,255,.4)" }}>Ms. Neetal Narang</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value"><a href="mailto:sales@earthion.co.in">sales@earthion.co.in</a></div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 00-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 001.3 0C13 21.5 20 15.4 20 10a8 8 0 00-8-8z"/></svg>
                  </div>
                  <div>
                    <div className="contact-label">Address</div>
                    <div className="contact-value">501, Pratiek Plaza, Opp. Patel Auto<br />S.V. Road, Goregaon (W)<br />Mumbai – 400104</div>
                  </div>
                </div>
                {/* <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                  </div>
                  <div>
                    <div className="contact-label">Website</div>
                    <div className="contact-value"><a href="https://www.earthion.co.in" target="_blank" rel="noopener noreferrer">www.earthion.co.in</a></div>
                  </div>
                </div> */}
                <div className="contact-item">
                  <div className="contact-icon" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.4)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M16 2v20M8 2v20M2 8h20M2 16h20"/></svg>
                  </div>
                  <div>
                    <div className="contact-label">GST</div>
                    <div className="contact-value" style={{ color: "rgba(255,255,255,.4)", fontFamily: "monospace", fontSize: ".85rem" }}>27AAMFE7855P1ZG</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-box reveal reveal-delay-2">
              <div className="contact-box-label">Start Here</div>
              <h3 className="contact-box-h3">Request a Proof of Concept</h3>
              <p className="contact-box-body">
                The fastest way to validate Earthion&apos;s technology is to run it on one of your own assets.
                One DG or one vehicle. We baseline before installation, test after, and hand you a
                NABL-certified report. You decide what comes next — no commitment required.
              </p>
              <Link href="/contact" className="btn-green" style={{ display: "block", textAlign: "center" }}>
                Request a POC →
              </Link>
              <p className="contact-note">
                Or email us directly at <a href="mailto:sales@earthion.co.in" style={{ color: "#6DBF3A" }}>sales@earthion.co.in</a>.
                We respond within one business day.
              </p>
            </div>
          </div>
        </div>

      </main>

      <footer className="footer-mini">
        <div className="footer-mini-inner">
          <span className="footer-copy">© {new Date().getFullYear()} Earthion Tech LLP. All rights reserved. GST: 27AAMFE7855P1ZG</span>
          <span className="footer-sgt">Technology by <a href="https://www.sgthydroedge.com" target="_blank" rel="noopener noreferrer">SGT HydroEdge</a></span>
        </div>
      </footer>
    </>
  );
}
