"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

/*
 *  Earthion Tech — Technology Page
 *  app/technology/page.jsx
 *  Content from GreenDrive & GreenX brochures. NABL only — no ARAI/KOEL.
 */

const KEY_COMPONENTS = [
  { title: "Electrolyser", icon: "⚡", points: ["Multi-cell alkaline (KOH) electrolysis", "50–1800 ml/min HHO output range", "Patented cell design — high yield, low power draw", "Vibration & shock-rated for vehicle and field use"] },
  { title: "Smart Control", icon: "🧠", points: ["Adaptive HHO dosing — load & RPM sensing", "Load-sensing ECU interface", "GreenVision™ IoT platform enabled on every unit", "Modbus / CAN-bus data integration"] },
  { title: "Safety Stack", icon: "🛡️", points: ["Flashback arrestor — prevents reverse ignition", "Gas-liquid separator", "Over-temp & overpressure auto-trip", "Auto-shutdown on engine stop or low water"] },
  { title: "Delivery System", icon: "🔧", points: ["Bolt-on to air intake — no drilling, no welding", "Upstream of turbocharger (DG) or air intake (vehicle)", "Zero engine modification", "OEM warranty fully preserved"] },
];

const EMISSION_DATA = [
  { name: "Particulate Matter (PM)", val: "↓ 80.1%", width: "80%" },
  { name: "NOx (as NO₂)", val: "↓ 59.2%", width: "59%" },
  { name: "SO₂", val: "↓ 75.2%", width: "75%" },
  { name: "CO₂", val: "↓ 42.9%", width: "43%" },
  { name: "Fuel Consumption", val: "↓ 5–22%", width: "62%" },
];

const HOW_STEPS = [
  { step: "01", icon: "💧", title: "Water Electrolysis — On Demand", desc: "Distilled water passes through an alkaline KOH electrolysis cell. The cell splits water into hydrogen and oxygen (HHO) only when the engine is running — no HHO is generated or stored when the engine is off. Zero stored hydrogen. Zero explosion risk." },
  { step: "02", icon: "💨", title: "Air-Intake Injection", desc: "The HHO gas is metered and injected upstream into the air intake — before the turbocharger on DGs, or into the air filter assembly on vehicles. It mixes with incoming combustion air. No engine modification. No drilling. No welding." },
  { step: "03", icon: "🔥", title: "Leaner, More Complete Combustion", desc: "Hydrogen's wide flammability range creates additional ignition kernels inside the combustion chamber — reaching the unburned diesel pockets the diesel flame alone misses. The same fuel, the same engine, burning more completely. Less PM. Less CO. Less CO₂." },
  { step: "04", icon: "📊", title: "GreenVision™ Live Monitoring", desc: "Every unit ships IoT-connected. Monitor HHO output, water level, electrolyte health, engine load, and fuel-efficiency delta in real time. Auto-generate ESG-grade tCO₂e and BRSR Scope 1 reports across your entire fleet or a single asset." },
];

export default function TechnologyPage() {
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
        .page-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 80%,rgba(26,111,191,.22) 0%,transparent 70%);}
        .page-hero-grid{position:absolute;inset:0;opacity:.04;background-image:linear-gradient(rgba(109,191,58,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(109,191,58,.6) 1px,transparent 1px);background-size:60px 60px;}
        .page-hero-inner{max-width:900px;margin:0 auto;position:relative;z-index:2;text-align:center;}
        .page-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(109,191,58,.12);border:1px solid rgba(109,191,58,.3);padding:5px 12px;border-radius:100px;margin-bottom:1.5rem;font-size:.75rem;font-weight:600;color:#6DBF3A;letter-spacing:.06em;text-transform:uppercase;}
        .page-h1{font-family:var(--serif);font-size:clamp(2.2rem,5vw,3.8rem);color:#fff;letter-spacing:-.02em;line-height:1.15;margin-bottom:1.25rem;}
        .page-h1 em{color:#6DBF3A;font-style:normal;}
        .page-sub{font-size:1rem;color:rgba(255,255,255,.55);line-height:1.75;max-width:580px;margin:0 auto 2rem;font-weight:300;}

        .how-steps{display:flex;flex-direction:column;gap:0;margin-top:2.5rem;}
        .how-step{display:grid;grid-template-columns:56px 1fr;gap:1.5rem;padding:1.75rem 0;border-bottom:1px solid var(--c-border);align-items:start;}
        .how-step:last-child{border-bottom:none;}
        .how-step-num{font-family:var(--serif);font-size:2rem;color:#1A6FBF;opacity:.4;line-height:1;}
        .how-step-icon{font-size:1.3rem;margin-bottom:.4rem;}
        .how-step-title{font-weight:600;font-size:.95rem;margin-bottom:.35rem;}
        .how-step-desc{font-size:.88rem;color:var(--c-slate);line-height:1.65;}

        .emission-strip{background:var(--c-dark);padding:6rem 5%;}
        .emission-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
        .em-h2{font-family:var(--serif);font-size:clamp(1.8rem,3.5vw,2.6rem);color:#fff;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem;}
        .em-body{color:rgba(255,255,255,.55);font-size:.95rem;line-height:1.8;margin-bottom:2rem;font-weight:300;}
        .em-points{list-style:none;display:flex;flex-direction:column;gap:.85rem;}
        .em-points li{display:flex;align-items:flex-start;gap:12px;font-size:.9rem;color:rgba(255,255,255,.7);line-height:1.5;}
        .em-points li::before{content:'';flex-shrink:0;width:18px;height:18px;border-radius:50%;background:rgba(109,191,58,.15);border:1px solid rgba(109,191,58,.4);margin-top:1px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236DBF3A'%3E%3Cpath d='M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center;background-size:10px;}
        .em-visual{border:1px solid rgba(255,255,255,.08);border-radius:16px;background:rgba(255,255,255,.03);padding:2rem;}
        .em-vis-label{font-size:.72rem;color:rgba(255,255,255,.3);letter-spacing:.1em;text-transform:uppercase;margin-bottom:1.5rem;}
        .em-rows{display:flex;flex-direction:column;gap:1.25rem;}
        .em-row-header{display:flex;justify-content:space-between;margin-bottom:.5rem;}
        .em-row-name{font-size:.82rem;color:rgba(255,255,255,.5);}
        .em-row-val{font-size:.82rem;font-weight:600;color:#6DBF3A;}
        .em-bar{height:4px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden;}
        .em-fill{height:100%;border-radius:2px;background:linear-gradient(90deg,#1A6FBF,#6DBF3A);}
        .em-source{margin-top:1.5rem;font-size:.72rem;color:rgba(255,255,255,.25);line-height:1.6;font-style:italic;}

        .comp-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:2.5rem;}
        .comp-card{border:1px solid var(--c-border);border-radius:12px;padding:2rem;background:#fff;position:relative;overflow:hidden;transition:border-color .2s,box-shadow .2s;}
        .comp-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#1A6FBF,#6DBF3A);transform:scaleX(0);transform-origin:left;transition:transform .35s;}
        .comp-card:hover{border-color:#1A6FBF;box-shadow:0 4px 20px rgba(26,111,191,.1);}
        .comp-card:hover::before{transform:scaleX(1);}
        .comp-icon{font-size:1.75rem;margin-bottom:1rem;}
        .comp-title{font-weight:700;font-size:1rem;margin-bottom:1rem;}
        .comp-points{list-style:none;display:flex;flex-direction:column;gap:.5rem;}
        .comp-points li{font-size:.85rem;color:var(--c-slate);line-height:1.5;display:flex;align-items:flex-start;gap:.5rem;}
        .comp-points li::before{content:'▸';color:#1A6FBF;font-size:.8rem;margin-top:.1rem;flex-shrink:0;}

        .nabl-box{background:rgba(26,111,191,.06);border:1px solid rgba(26,111,191,.2);border-left:3px solid #1A6FBF;border-radius:8px;padding:1.75rem 2rem;margin-top:3rem;}
        .nabl-box-label{font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#1A6FBF;margin-bottom:.5rem;}
        .nabl-box-text{font-size:.9rem;color:var(--c-slate);line-height:1.7;}

        .cta-section{background:var(--c-dark);padding:7rem 5%;text-align:center;}
        .cta-inner{max-width:620px;margin:0 auto;}
        .cta-h2{font-family:var(--serif);font-size:clamp(2rem,4vw,3rem);color:#fff;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem;}
        .cta-sub{font-size:1rem;color:rgba(255,255,255,.5);line-height:1.75;font-weight:300;margin-bottom:2.5rem;}
        .btn-white{background:#6DBF3A;color:#0D1B3E;font-family:var(--sans);font-weight:600;font-size:.9rem;padding:13px 28px;border-radius:6px;text-decoration:none;transition:transform .2s;display:inline-block;}
        .btn-white:hover{transform:translateY(-1px);box-shadow:0 6px 24px rgba(109,191,58,.4);}

        .footer-mini{background:var(--c-dark);padding:2rem 5%;border-top:1px solid rgba(109,191,58,.12);}
        .footer-mini-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;}
        .footer-copy{font-size:.78rem;color:rgba(255,255,255,.25);}
        .footer-sgt{font-size:.75rem;color:rgba(255,255,255,.25);}
        .footer-sgt a{color:rgba(26,111,191,.7);text-decoration:none;}

        @media(max-width:900px){.emission-inner{grid-template-columns:1fr;gap:2.5rem;}.comp-grid{grid-template-columns:1fr;}.how-step{grid-template-columns:40px 1fr;}}
      `}</style>

      <Navbar activePage="technology" />

      <main>
        <div className="page-hero">
          <div className="page-hero-grid" />
          <div className="page-hero-inner">
            <div className="page-tag">CHFA Technology</div>
            <h1 className="page-h1">Combustion physics.<br /><em>Not chemistry tricks.</em></h1>
            <p className="page-sub">NABL-certified results. Peer-reviewed research base. The science behind Earthion&apos;s Controlled Hydrogen Fuel Assist — explained plainly.</p>
          </div>
        </div>

        <section className="section" style={{ background: "var(--c-warm)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">How It Works</div>
              <h2 className="section-h2">Four steps. One result: more complete combustion.</h2>
              <p className="section-body">Every diesel engine — no matter how well-tuned — burns 5–15% of its fuel incompletely. That waste exits as PM, CO, NOx, and CO₂. CHFA closes that gap without touching the engine.</p>
            </div>
            <div className="how-steps">
              {HOW_STEPS.map((s, i) => (
                <div className={`how-step reveal reveal-delay-${(i % 3) + 1}`} key={s.step}>
                  <div className="how-step-num">{s.step}</div>
                  <div>
                    <div className="how-step-icon">{s.icon}</div>
                    <div className="how-step-title">{s.title}</div>
                    <div className="how-step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="emission-strip">
          <div className="emission-inner">
            <div className="reveal">
              <div className="section-label" style={{ color: "#6DBF3A" }}>NABL Stack Test Results</div>
              <h2 className="em-h2">The numbers. Not the claims.</h2>
              <p className="em-body">Every figure shown here is from NABL-accredited, MoEF-recognised laboratory stack emission testing — identical load profiles before and after installation. Independent certification on every deployment.</p>
              <ul className="em-points">
                <li>No high-pressure hydrogen storage — generated on-demand from water only.</li>
                <li>No engine modification. No fuel switch. Bolt-on retrofit only.</li>
                <li>OEM warranty preserved. Independently validated across DG and vehicle platforms.</li>
                <li>NABL-certified stack emission reports on every single installation.</li>
              </ul>
            </div>
            <div className="em-visual reveal reveal-delay-2">
              <div className="em-vis-label">Emission reductions — NABL stack test</div>
              <div className="em-rows">
                {EMISSION_DATA.map((m) => (
                  <div key={m.name}>
                    <div className="em-row-header"><span className="em-row-name">{m.name}</span><span className="em-row-val">{m.val}</span></div>
                    <div className="em-bar"><div className="em-fill" style={{ width: m.width }} /></div>
                  </div>
                ))}
              </div>
              <div className="em-source">Source: NABL-accredited stack emission tests across diesel platforms, 250–1500 kVA / 2.5–15L equivalent, 2006–2023. Raw reports available under NDA.</div>
            </div>
          </div>
        </div>

        <section className="section" style={{ background: "var(--c-white)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">System Architecture</div>
              <h2 className="section-h2">Four subsystems. Engineered for continuous duty.</h2>
              <p className="section-body">GreenDrive™ (vehicles) and GreenX™ (DG sets) share the same core CHFA architecture — scaled and calibrated for each application.</p>
            </div>
            <div className="comp-grid">
              {KEY_COMPONENTS.map((c, i) => (
                <div className={`comp-card reveal reveal-delay-${(i % 2) + 1}`} key={c.title}>
                  <div className="comp-icon">{c.icon}</div>
                  <div className="comp-title">{c.title}</div>
                  <ul className="comp-points">{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className="nabl-box reveal">
              <div className="nabl-box-label">Validation & Certification</div>
              <div className="nabl-box-text">Every Earthion installation includes a NABL-accredited stack emission test at baseline and post-installation, conducted by independent MoEF-recognised laboratories — Neetal Labs, Ekdant Enviro, Lata Envirotech. You receive a certified report with exact before/after numbers. The technology draws on peer-reviewed research from 20+ institutions worldwide (ScienceDirect, Springer, MDPI, Nature Scientific Reports).</div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-inner reveal">
            <h2 className="cta-h2">See it on your asset.</h2>
            <p className="cta-sub">One DG or one vehicle. NABL-certified baseline. Post-installation measurement. The numbers before you commit to anything further.</p>
            <Link href="/contact" className="btn-white">Request a POC →</Link>
          </div>
        </section>
      </main>

      {/* <footer className="footer-mini">
        <div className="footer-mini-inner">
          <span className="footer-copy">© {new Date().getFullYear()} Earthion Tech LLP. All rights reserved.</span>
          <span className="footer-sgt">Technology by <a href="https://www.sgthydroedge.com" target="_blank" rel="noopener noreferrer">SGT HydroEdge</a></span>
        </div>
      </footer> */}
    </>
  );
}
