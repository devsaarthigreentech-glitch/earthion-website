"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

/*
 *  Earthion Tech — DG Sets Solution Page
 *  app/solutions/dg-sets/page.jsx
 *
 *  Covers: GreenX™ Hydrogen Fuel Assist for Diesel Generators (25 kVA – 1,500 kVA+)
 */

const APPLICATIONS = [
  { icon: "🏥", title: "Hospitals & Healthcare", desc: "24×7 standby power with cleaner exhaust for patient environments and staff working in close proximity to generators." },
  { icon: "🏗️", title: "Industrial Factories", desc: "Captive power DGs for manufacturing facilities — cement plants, textile mills, food processing, pharmaceuticals." },
  { icon: "🏢", title: "Commercial Buildings", desc: "Office complexes, data centres, shopping malls. Reduce emissions footprint and diesel bill simultaneously." },
  { icon: "🛡️", title: "Defence & Government", desc: "Cantonments, forward operating bases, radar & SATCOM stations, ordnance facilities, field formations." },
  { icon: "📡", title: "Telecom & Infrastructure", desc: "Tower sites, exchange buildings, remote infrastructure. Extend service intervals and reduce fuel logistics burden." },
  { icon: "⚡", title: "Prime Power Off-Grid", desc: "High-altitude posts, remote industrial sites, mining camps where grid connectivity is absent or unreliable." },
];

const EVIDENCE = [
  { engine: "Caterpillar C32 TA", kva: "1,010 kVA", year: "2006", pm: "80%", nox: "61%", fuel: "12%" },
  { engine: "Cummins", kva: "380 kVA", year: "2018", pm: "74%", nox: "55%", fuel: "8%" },
  { engine: "Cummins", kva: "1,500 kVA", year: "2012", pm: "78%", nox: "58%", fuel: "15%" },
  { engine: "KOEL", kva: "500 kVA", year: "2023", pm: "68%", nox: "42%", fuel: "6%" },
];

const FAQS = [
  {
    q: "Will this void my engine's OEM warranty?",
    a: "No. CHFA is a bolt-on air-intake enhancement. The engine, fuel system, ECU, and exhaust are not modified. KOEL — India's largest diesel engine OEM — participates in our joint ARAI testing programme, which is the strongest OEM-side validation available.",
  },
  {
    q: "Does hydrogen damage the engine over time?",
    a: "No. The concern about hydrogen embrittlement applies to high-pressure hydrogen in storage cylinders and pipework (100+ bar). Our hydrogen exists at near-atmospheric pressure, for milliseconds, in trace quantities, consumed in the immediate combustion stroke. Our NABL data consistently shows cleaner combustion chambers, not degraded ones.",
  },
  {
    q: "What maintenance does the system require?",
    a: "Routine top-up of distilled water (comparable to AdBlue refilling). Electrode inspection every 6 months. No consumable cartridges, no DPF, no SCR, no special handling or PESO compliance.",
  },
  {
    q: "Can it work on older DGs and multi-fuel engines?",
    a: "Yes. CHFA is particularly effective on older engines (CPCB I/II) that have more incomplete combustion to recover. It is architecture-independent — the combustion chemistry is the same across all compression-ignition diesel engines regardless of manufacturer, vintage, or fuel type.",
  },
  {
    q: "How do you measure and prove the results?",
    a: "Every installation includes a NABL-accredited stack emission test at baseline and post-installation, with identical load profiles. You receive an independently certified report showing exact before/after numbers — not a marketing claim.",
  },
];

export default function DGSetsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --c-dark: #0D1B3E; --c-green: #1A6FBF; --c-accent: #6DBF3A;
          --c-warm: #F5F7FA; --c-slate: #5A6B80; --c-border: #D4DCE8; --c-white: #FFFFFF;
          --serif: 'Instrument Serif', Georgia, serif; --sans: 'DM Sans', system-ui, sans-serif;
          --nav-h: 68px;
        }
        html { scroll-behavior: smooth; }
        body { font-family: var(--sans); background: var(--c-warm); color: var(--c-dark); }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: var(--nav-h);
          display: flex; align-items: center; justify-content: space-between; padding: 0 5%;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .nav.scrolled { background: rgba(245,242,236,0.97); box-shadow: 0 1px 0 var(--c-border); backdrop-filter: blur(12px); }
        .nav-logo { font-family: var(--serif); font-size: 1.4rem; color: var(--c-white); text-decoration: none; display: flex; align-items: center; gap: 10px; }
        .nav.scrolled .nav-logo { color: var(--c-dark); }
        .nav-logo-mark { width: 32px; height: 32px; border-radius: 8px; background: var(--c-green); display: flex; align-items: center; justify-content: center; }
        .nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
        .nav-links a { font-size: 0.875rem; font-weight: 500; color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s; }
        .nav.scrolled .nav-links a { color: var(--c-dark); opacity: 0.7; }
        .nav-links a:hover { color: var(--c-white) !important; opacity: 1 !important; }
        .nav.scrolled .nav-links a:hover { color: var(--c-green) !important; }
        .nav-cta { background: var(--c-green) !important; color: var(--c-white) !important; opacity: 1 !important; padding: 9px 20px; border-radius: 6px; }

        /* PAGE HERO */
        .page-hero {
          background: var(--c-dark); padding: calc(var(--nav-h) + 4rem) 5% 5rem;
          position: relative; overflow: hidden;
        }
        .page-hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 50% 80% at 80% 50%, rgba(26,107,53,0.2) 0%, transparent 70%);
        }
        .page-hero-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
        .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 1.5rem; }
        .breadcrumb a { font-size: 0.78rem; color: rgba(255,255,255,0.4); text-decoration: none; }
        .breadcrumb a:hover { color: rgba(255,255,255,0.7); }
        .breadcrumb-sep { font-size: 0.78rem; color: rgba(255,255,255,0.2); }
        .breadcrumb-current { font-size: 0.78rem; color: rgba(255,255,255,0.6); }
        .page-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(46,204,113,0.12); border: 1px solid rgba(46,204,113,0.3);
          padding: 5px 12px; border-radius: 100px; margin-bottom: 1.5rem;
          font-size: 0.75rem; font-weight: 600; color: var(--c-accent);
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .page-h1 { font-family: var(--serif); font-size: clamp(2.2rem, 5vw, 3.8rem); color: var(--c-white); letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1.25rem; max-width: 720px; }
        .page-h1 em { color: var(--c-accent); font-style: normal; }
        .page-sub { font-size: 1rem; color: rgba(255,255,255,0.55); line-height: 1.75; max-width: 580px; margin-bottom: 2.5rem; font-weight: 300; }
        .page-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { background: var(--c-accent); color: var(--c-dark); font-family: var(--sans); font-weight: 600; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.2s; }
        .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(46,204,113,0.4); }
        .btn-ghost { background: transparent; color: rgba(255,255,255,0.75); font-family: var(--sans); font-weight: 500; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; border: 1px solid rgba(255,255,255,0.2); transition: border-color 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--c-white); }

        /* HERO METRICS */
        .hero-metrics {
          display: flex; gap: 2px; margin-top: 3.5rem; flex-wrap: wrap;
        }
        .hero-metric {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          padding: 1.25rem 2rem; flex: 1; min-width: 140px;
        }
        .hero-metric:first-child { border-radius: 8px 0 0 8px; }
        .hero-metric:last-child { border-radius: 0 8px 8px 0; }
        .hero-metric-val { font-family: var(--serif); font-size: 2rem; color: var(--c-accent); }
        .hero-metric-label { font-size: 0.78rem; color: rgba(255,255,255,0.45); margin-top: 0.2rem; }

        /* SECTIONS */
        .section { padding: 6rem 5%; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--c-green); margin-bottom: 1rem; }
        .section-h2 { font-family: var(--serif); font-size: clamp(1.7rem, 3vw, 2.6rem); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
        .section-body { font-size: 0.95rem; color: var(--c-slate); line-height: 1.8; max-width: 600px; font-weight: 300; margin-bottom: 3rem; }

        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; } .reveal-delay-2 { transition-delay: 0.2s; } .reveal-delay-3 { transition-delay: 0.3s; }

        /* HOW IT WORKS */
        .how-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .steps-list { display: flex; flex-direction: column; gap: 0; }
        .step-item { display: flex; gap: 1.5rem; padding: 1.5rem 0; border-bottom: 1px solid var(--c-border); }
        .step-item:first-child { padding-top: 0; }
        .step-item:last-child { border-bottom: none; }
        .step-num { font-family: var(--serif); font-size: 1.8rem; color: rgba(26,107,53,0.25); line-height: 1; flex-shrink: 0; width: 36px; }
        .step-content { }
        .step-title { font-weight: 600; font-size: 0.95rem; margin-bottom: 0.3rem; }
        .step-desc { font-size: 0.87rem; color: var(--c-slate); line-height: 1.6; }
        .spec-card { background: var(--c-dark); border-radius: 12px; padding: 2rem; }
        .spec-title { font-size: 0.72rem; color: rgba(255,255,255,0.3); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .spec-rows { display: flex; flex-direction: column; gap: 0; }
        .spec-row { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .spec-row:last-child { border-bottom: none; }
        .spec-key { font-size: 0.82rem; color: rgba(255,255,255,0.45); }
        .spec-val { font-size: 0.82rem; font-weight: 600; color: var(--c-white); }

        /* APPLICATIONS */
        .app-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .app-card { border: 1px solid var(--c-border); border-radius: 10px; padding: 1.75rem; background: var(--c-white); transition: border-color 0.2s, box-shadow 0.2s; }
        .app-card:hover { border-color: var(--c-green); box-shadow: 0 4px 16px rgba(26,107,53,0.08); }
        .app-icon { font-size: 1.8rem; margin-bottom: 0.75rem; }
        .app-title { font-weight: 600; font-size: 0.95rem; margin-bottom: 0.4rem; }
        .app-desc { font-size: 0.85rem; color: var(--c-slate); line-height: 1.6; }

        /* EVIDENCE TABLE */
        .evidence-table { width: 100%; border-collapse: collapse; border: 1px solid var(--c-border); border-radius: 10px; overflow: hidden; }
        .evidence-table th { background: var(--c-dark); color: rgba(255,255,255,0.6); font-size: 0.75rem; font-weight: 500; text-align: left; padding: 1rem 1.25rem; letter-spacing: 0.05em; text-transform: uppercase; }
        .evidence-table td { padding: 1rem 1.25rem; font-size: 0.88rem; border-bottom: 1px solid var(--c-border); background: var(--c-white); }
        .evidence-table tr:last-child td { border-bottom: none; }
        .evidence-table td.green { color: var(--c-green); font-weight: 700; }

        /* FAQ */
        .faq-list { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--c-border); border-radius: 12px; overflow: hidden; }
        .faq-item { border-bottom: 1px solid var(--c-border); background: var(--c-white); }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { width: 100%; text-align: left; padding: 1.35rem 1.75rem; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 1rem; font-family: var(--sans); font-size: 0.95rem; font-weight: 500; color: var(--c-dark); }
        .faq-q:hover { background: rgba(26,107,53,0.02); }
        .faq-chevron { flex-shrink: 0; width: 20px; height: 20px; border-radius: 50%; background: rgba(26,107,53,0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.25s; }
        .faq-chevron.open { transform: rotate(180deg); background: var(--c-green); }
        .faq-a { font-size: 0.88rem; color: var(--c-slate); line-height: 1.75; padding: 0 1.75rem 1.35rem; }

        /* CTA FOOTER */
        .cta-section { background: var(--c-green); padding: 5rem 5%; text-align: center; }
        .cta-inner { max-width: 620px; margin: 0 auto; }
        .cta-h2 { font-family: var(--serif); font-size: clamp(1.8rem, 3.5vw, 2.8rem); color: var(--c-white); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
        .cta-sub { color: rgba(255,255,255,0.65); font-size: 0.95rem; line-height: 1.7; margin-bottom: 2rem; font-weight: 300; }
        .btn-white { background: var(--c-white); color: var(--c-green); font-family: var(--sans); font-weight: 600; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.2s; }
        .btn-white:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.2); }

        .footer { background: var(--c-dark); padding: 3rem 5% 2rem; }
        .footer-bottom { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.25); }
        .footer-sgt { font-size: 0.78rem; color: rgba(255,255,255,0.25); }
        .footer-sgt a { color: rgba(46,204,113,0.6); text-decoration: none; }

        @media (max-width: 900px) {
          .how-grid { grid-template-columns: 1fr; }
          .app-grid { grid-template-columns: 1fr 1fr; }
          .nav-links { display: none; }
          .hero-metrics { flex-direction: row; }
        }
        @media (max-width: 600px) {
          .app-grid { grid-template-columns: 1fr; }
          .hero-metric { min-width: 130px; }
        }
      `}</style>

      <Navbar activePage="dg" />

      <main>
        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="page-hero-inner">
            <div className="breadcrumb">
              <Link href="/" className="">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">DG Set Solutions</span>
            </div>
            <div className="page-tag">GreenX™ Technology</div>
            <h1 className="page-h1">
              Hydrogen Fuel Systems<br />
              for <em>Diesel Generators</em>
            </h1>
            <p className="page-sub">
              A bolt-on CHFA retrofit for any DG set — 25 kVA to 1,500 kVA and beyond.
              No engine modification. No fuel switch. NABL-certified fuel savings of 5–20%
              and particulate matter reduction of up to 80%.
            </p>
            <div className="page-actions">
              <Link href="/contact" className="btn-primary">
                Request a POC →
              </Link>
              <Link href="/technology" className="btn-ghost">
                Read the Science
              </Link>
            </div>
            <div className="hero-metrics">
              {[
                { val: "≤80%", label: "PM reduction (NABL)" },
                { val: "5–20%", label: "Fuel savings" },
                { val: "59%", label: "NOx reduction" },
                { val: "<4 hr", label: "Install per DG" },
                { val: "0", label: "Engine modifications" },
              ].map((m) => (
                <div className="hero-metric" key={m.label}>
                  <div className="hero-metric-val">{m.val}</div>
                  <div className="hero-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section" style={{ background: "var(--c-warm)" }}>
          <div className="section-inner">
            <div className="how-grid">
              <div className="reveal">
                <div className="section-label">How It Works</div>
                <h2 className="section-h2">The same DG. Better combustion.</h2>
                <p className="section-body">
                  Every compression-ignition diesel engine — no matter how new or well-maintained —
                  burns 5 to 15% of its fuel incompletely. CHFA recovers that waste.
                </p>
                <div className="steps-list">
                  {[
                    { n: "01", t: "Water In", d: "Distilled water is fed into the on-board electrolyser. No compressed hydrogen. No storage. No PESO compliance." },
                    { n: "02", t: "HHO Generated On-Demand", d: "The electrolyser produces oxyhydrogen (HHO) gas precisely calibrated to your engine's displacement and load." },
                    { n: "03", t: "Injected at the Air Intake", d: "HHO enters the combustion chamber through the intake manifold — standard air path, no engine modification." },
                    { n: "04", t: "Complete Combustion", d: "Hydrogen ignites 12× more easily than diesel and propagates flame 7× faster, reaching unburned pockets in the cylinder." },
                    { n: "05", t: "Measurably Better Output", d: "Same diesel. Same engine. Less fuel consumed. Less PM, NOx, CO₂ at the stack. Independently certified." },
                  ].map((s) => (
                    <div className="step-item" key={s.n}>
                      <div className="step-num">{s.n}</div>
                      <div className="step-content">
                        <div className="step-title">{s.t}</div>
                        <div className="step-desc">{s.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div className="spec-card">
                  <div className="spec-title">System Specifications</div>
                  <div className="spec-rows">
                    {[
                      { k: "DG Range", v: "25 kVA – 1,500 kVA+" },
                      { k: "Installation Time", v: "< 4 hours" },
                      { k: "Engine Modification", v: "None" },
                      { k: "Fuel Switch Required", v: "No" },
                      { k: "Hydrogen Storage", v: "None — on-demand" },
                      { k: "Water Top-up Interval", v: "Weekly (based on run hours)" },
                      { k: "Power Source", v: "Engine's existing alternator" },
                      { k: "Operating Pressure", v: "Near-atmospheric" },
                      { k: "Emission Testing", v: "NABL-accredited, pre & post" },
                      { k: "Warranty Impact", v: "OEM warranty preserved" },
                      { k: "Certifications", v: "CE, RoHS, ISO 9001" },
                    ].map((r) => (
                      <div className="spec-row" key={r.k}>
                        <span className="spec-key">{r.k}</span>
                        <span className="spec-val">{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="section" style={{ background: "var(--c-white)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">Applications</div>
              <h2 className="section-h2">Any DG. Any sector. Any vintage.</h2>
              <p className="section-body">
                If it runs on diesel and generates power, CHFA improves it.
                We've deployed across sectors from pharma to defence.
              </p>
            </div>
            <div className="app-grid">
              {APPLICATIONS.map((a, i) => (
                <div className={`app-card reveal reveal-delay-${(i % 3) + 1}`} key={a.title}>
                  <div className="app-icon">{a.icon}</div>
                  <div className="app-title">{a.title}</div>
                  <div className="app-desc">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVIDENCE */}
        <section className="section" style={{ background: "var(--c-warm)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">NABL Evidence</div>
              <h2 className="section-h2">Five platforms. One direction.</h2>
              <p className="section-body">
                Every test below was conducted by NABL-accredited, MoEF-recognised laboratories.
                Identical load profiles before and after installation. Independent certification.
              </p>
            </div>
            <div className="reveal reveal-delay-1" style={{ overflowX: "auto" }}>
              <table className="evidence-table">
                <thead>
                  <tr>
                    <th>Engine Platform</th>
                    <th>Capacity</th>
                    <th>Year</th>
                    <th>PM Reduction</th>
                    <th>NOx Reduction</th>
                    <th>Fuel Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {EVIDENCE.map((e, i) => (
                    <tr key={i}>
                      <td><strong>{e.engine}</strong></td>
                      <td>{e.kva}</td>
                      <td>{e.year}</td>
                      <td className="green">↓ {e.pm}</td>
                      <td className="green">↓ {e.nox}</td>
                      <td className="green">↓ {e.fuel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--c-slate)", marginTop: "1rem", fontStyle: "italic" }}>
              Customer identities withheld per NDA. Raw test reports available to qualified reviewers on request.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: "var(--c-white)" }}>
          <div className="section-inner">
            <div className="reveal" style={{ maxWidth: 760, margin: "0 auto" }}>
              <div className="section-label">Frequently Asked</div>
              <h2 className="section-h2" style={{ marginBottom: "2rem" }}>The questions you should ask us.</h2>
              <div className="faq-list">
                {FAQS.map((f, i) => (
                  <div className="faq-item" key={i}>
                    <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span>{f.q}</span>
                      <div className={`faq-chevron${openFaq === i ? " open" : ""}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 4l4 4 4-4" stroke={openFaq === i ? "white" : "#1A6B35"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                    {openFaq === i && <div className="faq-a">{f.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-inner reveal">
            <h2 className="cta-h2">Start with one DG set.</h2>
            <p className="cta-sub">
              We baseline your asset, install in under 4 hours, and hand you a NABL-certified
              report showing the exact before and after. You decide what comes next.
            </p>
            <Link href="/contact" className="btn-white">
              Request a Proof of Concept →
            </Link>
          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} Earthion Tech. All rights reserved.</span>
          <span className="footer-sgt">Technology by <a href="https://www.sgthydroedge.com" target="_blank" rel="noopener noreferrer">SGT HydroEdge</a></span>
        </div>
      </footer> */}
    </>
  );
}
