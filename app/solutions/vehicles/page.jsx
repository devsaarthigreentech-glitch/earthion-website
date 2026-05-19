"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/*
 *  Earthion Tech — Vehicles Solution Page
 *  app/solutions/vehicles/page.jsx
 *
 *  Covers: GreenDrive™ Hydrogen Fuel Assist for Diesel Vehicles
 *  Variants: Nano (LCV) · Mini (MCV/6x6) · Neo (HCV/Heavy)
 *
 *  IMAGE FILES NEEDED in /public/images/:
 *    earthion-logo-white-bg.png              ← Earthion_Logo_WHite_BG.png
 *
 *    products/greendrive-mini.png            ← Greendrive-Mini-earthion.png
 *    products/greendrive-neo-transparent.png ← GreenDrive-neo-Earthion-Transparent.png
 *
 *    vehicles/truck-1.png                    ← Truck-1.png  (Hindustan 6x6 desert Army)
 *    vehicles/truck-2.png                    ← Truck-2.png  (Tata 6x6 mountain Ladakh)
 *    vehicles/truck-3.png                    ← Truck-3.png  (Mountain terrain logistics)
 */

const APPLICATIONS = [
  { icon: "🚛", title: "Logistics & Transport", desc: "Long-haul trucks, last-mile delivery fleets, multi-axle vehicles. Reduce diesel bills without changing routes, schedules, or vehicles." },
  { icon: "🛡️", title: "Defence & Military",    desc: "Army trucks, armoured vehicles, support fleets. Less fuel per mission, fewer resupply convoys, reduced tactical signature." },
  { icon: "⛏️", title: "Mining & Quarrying",    desc: "Haul trucks, excavators, support vehicles in remote, off-grid locations. Diesel savings compound over high run-hours." },
  { icon: "🏗️", title: "Construction",          desc: "Tipper trucks, concrete mixers, site transport. Reduce fuel costs on high-utilisation equipment without downtime." },
  { icon: "🚌", title: "Bus & Passenger Fleet", desc: "City buses, intercity coaches, staff transport. Cut PM emissions in urban zones and reduce fuel spend across the fleet." },
  { icon: "🌾", title: "Agriculture & Rural",   desc: "Tractors, farm transport, rural utility vehicles. Simple water top-up maintenance. Works in remote locations without specialist service." },
];

const VARIANTS = [
  {
    name: "GreenDrive Nano",
    sub: "Light Tactical & Support",
    vehicles: "LCV · SUV · Light Tactical",
    engine: "2–4 L diesel",
    voltage: "12V",
    hho: "50–150 ml/min",
    power: "< 0.18 kW",
    water: "0.02–0.04 L/hr",
    install: "< 2 hr",
    fuel: "5–20%",
    pm: "60–75%",
    nox: "25–35%",
  },
  {
    name: "GreenDrive Mini",
    sub: "Medium Logistics & Troop Carriers",
    vehicles: "MCV · 6×6 Logistics · Troop Carriers",
    engine: "4–8 L diesel",
    voltage: "12V / 24V",
    hho: "150–400 ml/min",
    power: "< 0.3 kW",
    water: "0.04–0.08 L/hr",
    install: "< 3 hr",
    fuel: "5–20%",
    pm: "70–80%",
    nox: "28–35%",
  },
  {
    name: "GreenDrive Neo",
    sub: "Heavy Specialist & Tankers",
    vehicles: "HCV · Tankers · Heavy Haulage",
    engine: "8 L+ diesel",
    voltage: "24V",
    hho: "400–800 ml/min",
    power: "< 0.5 kW",
    water: "0.08–0.15 L/hr",
    install: "< 4 hr",
    fuel: "5–20%",
    pm: "75–80%",
    nox: "30–35%",
  },
];

const FAQS = [
  {
    q: "Will this void my vehicle's OEM warranty?",
    a: "No. GreenDrive is a bolt-on air-intake enhancement. The engine, fuel system, ECU, and exhaust are not modified in any way. The system connects only to the air intake and draws power from the vehicle's existing 12V or 24V supply. OEM warranty is preserved.",
  },
  {
    q: "Does it work on BS-VI engines?",
    a: "Yes. GreenDrive is compatible with BS-III, BS-IV, and BS-VI engine generations. Newer BS-VI engines have lower baseline emissions, so NOx reductions may be in the 15–25% range rather than the 30–35% seen on older platforms — but fuel savings remain consistent.",
  },
  {
    q: "What maintenance does the driver need to do?",
    a: "Just a periodic water top-up — similar to topping up windscreen washer fluid. KOH electrolyte is refreshed at scheduled service intervals. No specialist tools, no proprietary consumables, no PESO-regulated handling. Any workshop can service it.",
  },
  {
    q: "How does it perform in extreme conditions — high altitude, extreme heat?",
    a: "GreenDrive Nano and Mini are validated for hot-weather and standard temperate operating envelopes. A sub-zero and extreme high-altitude variant is under active development. Contact us if your deployment is in Siachen-altitude conditions.",
  },
  {
    q: "How do you prove the results?",
    a: "Every installation includes a NABL-accredited stack emission test at baseline and post-installation, with identical load profiles. You receive an independently certified report showing exact before/after numbers — not a marketing claim.",
  },
];

export default function VehiclesPage() {
  const [scrolled, setScrolled]   = useState(false);
  const [openFaq, setOpenFaq]     = useState(null);
  const [activeVar, setActiveVar] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } }); },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const v = VARIANTS[activeVar];

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

        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: var(--nav-h); display: flex; align-items: center; justify-content: space-between; padding: 0 5%; transition: background 0.3s, box-shadow 0.3s; }
        .nav.scrolled { background: rgba(13,27,62,0.97); box-shadow: 0 1px 0 rgba(109,191,58,0.2); backdrop-filter: blur(12px); }
        .nav-logo { display: flex; align-items: center; text-decoration: none; height: 44px; }
        .nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
        .nav-links a { font-size: 0.875rem; font-weight: 500; color: rgba(255,255,255,0.72); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover, .nav-links a.active { color: var(--c-accent); }
        .nav-cta { background: var(--c-accent) !important; color: var(--c-dark) !important; opacity: 1 !important; padding: 9px 20px; border-radius: 6px; font-size: 0.875rem !important; font-weight: 600 !important; }
        .nav-cta:hover { background: #82D94A !important; }

        /* PAGE HERO */
        .page-hero { background: var(--c-dark); padding: calc(var(--nav-h) + 4rem) 5% 5rem; position: relative; overflow: hidden; }
        .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 50% 80% at 80% 50%, rgba(26,111,191,0.2) 0%, transparent 70%); }
        .page-hero-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
        .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 1.5rem; }
        .breadcrumb a { font-size: 0.78rem; color: rgba(255,255,255,0.4); text-decoration: none; }
        .breadcrumb a:hover { color: rgba(255,255,255,0.7); }
        .breadcrumb-sep { font-size: 0.78rem; color: rgba(255,255,255,0.2); }
        .breadcrumb-current { font-size: 0.78rem; color: rgba(255,255,255,0.6); }
        .page-tag { display: inline-flex; align-items: center; gap: 8px; background: rgba(109,191,58,0.12); border: 1px solid rgba(109,191,58,0.3); padding: 5px 12px; border-radius: 100px; margin-bottom: 1.5rem; font-size: 0.75rem; font-weight: 600; color: var(--c-accent); letter-spacing: 0.06em; text-transform: uppercase; }
        .page-h1 { font-family: var(--serif); font-size: clamp(2.2rem, 5vw, 3.8rem); color: var(--c-white); letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1.25rem; max-width: 720px; }
        .page-h1 em { color: var(--c-accent); font-style: normal; }
        .page-sub { font-size: 1rem; color: rgba(255,255,255,0.55); line-height: 1.75; max-width: 580px; margin-bottom: 2.5rem; font-weight: 300; }
        .page-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { background: var(--c-accent); color: var(--c-dark); font-family: var(--sans); font-weight: 600; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.2s; }
        .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(109,191,58,0.4); }
        .btn-ghost { background: transparent; color: rgba(255,255,255,0.75); font-family: var(--sans); font-weight: 500; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; border: 1px solid rgba(255,255,255,0.2); transition: border-color 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--c-white); }

        /* HERO METRICS */
        .hero-metrics { display: flex; gap: 2px; margin-top: 3.5rem; flex-wrap: wrap; }
        .hero-metric { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); padding: 1.25rem 2rem; flex: 1; min-width: 140px; }
        .hero-metric:first-child { border-radius: 8px 0 0 8px; }
        .hero-metric:last-child  { border-radius: 0 8px 8px 0; }
        .hero-metric-val { font-family: var(--serif); font-size: 2rem; color: var(--c-accent); }
        .hero-metric-label { font-size: 0.78rem; color: rgba(255,255,255,0.45); margin-top: 0.3rem; line-height: 1.4; }

        /* VEHICLE GALLERY */
        .gallery-strip { background: var(--c-dark); padding: 0 5% 4rem; }
        .gallery-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
        .gallery-slot { position: relative; aspect-ratio: 4/3; overflow: hidden; border-radius: 8px; }
        .gallery-slot img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .gallery-slot:hover img { transform: scale(1.05); }
        .gallery-caption { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(13,27,62,0.85)); padding: 1.5rem 1rem 0.75rem; font-size: 0.72rem; color: rgba(255,255,255,0.6); letter-spacing: 0.06em; text-transform: uppercase; }

        /* SECTION */
        .section { padding: 6rem 5%; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--c-green); margin-bottom: 1rem; }
        .section-h2 { font-family: var(--serif); font-size: clamp(1.8rem, 3.5vw, 2.8rem); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
        .section-body { font-size: 1rem; color: var(--c-slate); line-height: 1.8; max-width: 600px; font-weight: 300; }

        /* REVEAL */
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }

        /* VARIANT SELECTOR */
        .variant-tabs { display: flex; gap: 0; border: 1px solid var(--c-border); border-radius: 8px; overflow: hidden; margin-bottom: 2.5rem; }
        .variant-tab { flex: 1; padding: 0.85rem 1rem; font-family: var(--sans); font-size: 0.85rem; font-weight: 600; cursor: pointer; border: none; background: transparent; color: var(--c-slate); transition: all 0.2s; text-align: center; }
        .variant-tab.active { background: var(--c-green); color: var(--c-white); }
        .variant-tab:hover:not(.active) { background: rgba(26,111,191,0.06); }

        /* VARIANT DETAIL GRID */
        .variant-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .spec-card { border: 1px solid var(--c-border); border-radius: 12px; overflow: hidden; }
        .spec-title { background: var(--c-dark); color: var(--c-white); font-family: var(--sans); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 1rem 1.5rem; }
        .spec-rows { }
        .spec-row { display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1.5rem; border-bottom: 1px solid var(--c-border); }
        .spec-row:last-child { border-bottom: none; }
        .spec-key { font-size: 0.85rem; color: var(--c-slate); }
        .spec-val { font-size: 0.85rem; font-weight: 600; color: var(--c-dark); }
        .spec-val.green { color: #3A8A1A; }
        .variant-sub { font-size: 0.82rem; color: var(--c-slate); margin-bottom: 1.5rem; line-height: 1.6; }
        .variant-name { font-family: var(--serif); font-size: 1.8rem; margin-bottom: 0.35rem; }
        .variant-badge { display: inline-block; background: rgba(26,111,191,0.1); border: 1px solid rgba(26,111,191,0.25); color: var(--c-green); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px; border-radius: 100px; margin-bottom: 1rem; }

        /* APPLICATIONS */
        .app-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 3rem; }
        .app-card { border: 1px solid var(--c-border); border-radius: 10px; padding: 1.75rem; background: var(--c-white); transition: border-color 0.2s, box-shadow 0.2s; }
        .app-card:hover { border-color: var(--c-green); box-shadow: 0 4px 20px rgba(26,111,191,0.08); }
        .app-icon { font-size: 1.75rem; margin-bottom: 1rem; }
        .app-title { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--c-dark); }
        .app-desc { font-size: 0.85rem; color: var(--c-slate); line-height: 1.65; }

        /* FAQ */
        .faq-list { display: flex; flex-direction: column; gap: 0; }
        .faq-item { border-bottom: 1px solid var(--c-border); }
        .faq-item:first-child { border-top: 1px solid var(--c-border); }
        .faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.25rem 0; background: none; border: none; cursor: pointer; font-family: var(--sans); font-size: 0.95rem; font-weight: 600; color: var(--c-dark); text-align: left; }
        .faq-chevron { width: 28px; height: 28px; border-radius: 50%; background: var(--c-dark); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.25s; }
        .faq-chevron.open { transform: rotate(180deg); background: var(--c-green); }
        .faq-a { font-size: 0.9rem; color: var(--c-slate); line-height: 1.75; padding-bottom: 1.25rem; }

        /* CTA */
        .cta-section { background: var(--c-dark); padding: 7rem 5%; text-align: center; }
        .cta-inner { max-width: 620px; margin: 0 auto; }
        .cta-h2 { font-family: var(--serif); font-size: clamp(2rem, 4vw, 3rem); color: var(--c-white); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
        .cta-sub { font-size: 1rem; color: rgba(255,255,255,0.5); line-height: 1.75; font-weight: 300; margin-bottom: 2.5rem; }
        .btn-white { background: var(--c-accent); color: var(--c-dark); font-family: var(--sans); font-weight: 600; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; transition: transform 0.2s; display: inline-block; }
        .btn-white:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(109,191,58,0.4); }

        /* FOOTER */
        .footer { background: var(--c-dark); padding: 2rem 5%; border-top: 1px solid rgba(109,191,58,0.12); }
        .footer-bottom { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.25); }
        .footer-sgt { font-size: 0.75rem; color: rgba(255,255,255,0.25); }
        .footer-sgt a { color: rgba(26,111,191,0.7); text-decoration: none; }

        /* HAMBURGER */
        .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .hamburger span { width: 24px; height: 2px; background: rgba(255,255,255,0.8); border-radius: 2px; display: block; }
        .mobile-menu { display: none; flex-direction: column; gap: 2rem; position: fixed; inset: 0; background: var(--c-dark); padding: 6rem 5%; z-index: 200; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { font-family: var(--serif); font-size: 2rem; color: var(--c-white); text-decoration: none; }
        .mobile-close { position: absolute; top: 1.5rem; right: 5%; background: none; border: none; font-size: 2rem; color: var(--c-white); cursor: pointer; }

        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: 1fr; }
          .variant-grid { grid-template-columns: 1fr; }
          .app-grid { grid-template-columns: 1fr 1fr; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
        @media (max-width: 560px) {
          .app-grid { grid-template-columns: 1fr; }
          .hero-metrics { flex-direction: column; }
          .hero-metric { border-radius: 8px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-logo">
          <Image
            src="/images/earthion-logo-white-bg.png"
            alt="Earthion Tech"
            width={150}
            height={38}
            priority
            style={{ height: 38, width: "auto", filter: "brightness(0) invert(1)", objectFit: "contain" }}
          />
        </Link>
        <ul className="nav-links">
          <li><Link href="/solutions/dg-sets">DG Solutions</Link></li>
          <li><Link href="/solutions/vehicles" className="active">Vehicles</Link></li>
          <li><Link href="/technology">Technology</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact" className="nav-cta">Request POC</Link></li>
        </ul>
        <button className="hamburger" aria-label="Open menu">
          <span/><span/><span/>
        </button>
      </nav>

      <main>
        {/* PAGE HERO */}
        <div className="page-hero">
          <div className="page-hero-inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/#products">Solutions</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">Vehicles</span>
            </div>
            <div className="page-tag">GreenDrive™</div>
            <h1 className="page-h1">
              Hydrogen Fuel Assist<br />
              for <em>Every Diesel Vehicle.</em>
            </h1>
            <p className="page-sub">
              Bolt-on retrofit. Any make. Any vintage. GreenDrive™ CHFA injects
              metered hydrogen into the air intake — cutting fuel consumption by 6–22%
              and particulate matter by up to 80%, without touching the engine.
            </p>
            <div className="page-actions">
              <Link href="/contact" className="btn-primary">
                Request a Vehicle POC
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/technology" className="btn-ghost">How CHFA Works</Link>
            </div>
            <div className="hero-metrics">
              {[
                { val: "6–22%",  label: "Fuel Savings (NABL-tested)" },
                { val: "80%",    label: "PM Reduction (max)" },
                { val: "35%",    label: "NOx Reduction (max)" },
                { val: "< 4 hr", label: "Install time, no downtime" },
              ].map((m) => (
                <div className="hero-metric" key={m.label}>
                  <div className="hero-metric-val">{m.val}</div>
                  <div className="hero-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VEHICLE IMAGE GALLERY */}
        <div className="gallery-strip">
          <div className="gallery-grid">
            <div className="gallery-slot">
              {/*
                Image: public/images/vehicles/truck-1.png  (Truck-1.png)
                Hindustan 6x6 Army truck — desert — GreenDrive Mini installed on frame
              */}
              <Image src="/images/vehicles/truck-1.png" alt="Earthion GreenDrive on Hindustan 6x6 — desert deployment" fill style={{ objectFit: "cover" }} />
              <div className="gallery-caption">Hindustan 6×6 — Desert Deployment</div>
            </div>
            <div className="gallery-slot">
              {/*
                Image: public/images/vehicles/truck-2.png  (Truck-2.png)
                Tata Army truck — Ladakh high-altitude
              */}
              <Image src="/images/vehicles/truck-2.png" alt="Earthion GreenDrive on Tata 6x6 — high-altitude Ladakh" fill style={{ objectFit: "cover" }} />
              <div className="gallery-caption">Tata 6×6 — High-Altitude Deployment</div>
            </div>
            <div className="gallery-slot">
              {/*
                Image: public/images/vehicles/truck-3.png  (Truck-3.png)
                Mountain terrain Army logistics vehicle
              */}
              <Image src="/images/vehicles/truck-3.png" alt="Earthion GreenDrive — mountain terrain logistics" fill style={{ objectFit: "cover" }} />
              <div className="gallery-caption">Heavy Logistics — Mountain Terrain</div>
            </div>
          </div>
        </div>

        {/* VARIANT SELECTOR + SPECS */}
        <section className="section" style={{ background: "var(--c-white)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">Product Family</div>
              <h2 className="section-h2">Three variants. Every fleet covered.</h2>
              <p className="section-body">Nano for light vehicles. Mini for medium logistics and 6×6. Neo for heavy haulage and specialist platforms.</p>
            </div>
            <div className="variant-tabs" style={{ marginTop: "2.5rem" }}>
              {VARIANTS.map((vr, i) => (
                <button key={vr.name} className={`variant-tab${activeVar === i ? " active" : ""}`} onClick={() => setActiveVar(i)}>
                  {vr.name.replace("GreenDrive ", "")}
                </button>
              ))}
            </div>
            <div className="variant-grid reveal reveal-delay-1">
              <div>
                <div className="variant-badge">{v.name}</div>
                <div className="variant-name">{v.sub}</div>
                <p className="variant-sub">For: {v.vehicles}</p>
                <p className="variant-sub">
                  {v.name === "GreenDrive Nano"
                    ? "The compact variant for light tactical vehicles, SUVs, and support transport. Installs in under 2 hours with no chassis modification. Runs from the vehicle's existing 12V system."
                    : v.name === "GreenDrive Mini"
                    ? "Purpose-built for medium logistics platforms and 6×6 military vehicles. Dual-voltage 12V/24V compatibility. Validated for troop carriers and armoured support platforms."
                    : "The heavy-duty variant for tankers, multi-axle haulage, and specialist platforms with 8L+ displacement. Engineered for high-hours, high-load, continuous-duty environments."}
                </p>
                <Link href="/contact" className="btn-primary" style={{ marginTop: "1.5rem" }}>
                  Request a POC for this variant →
                </Link>
              </div>
              <div className="spec-card reveal reveal-delay-2">
                <div className="spec-title">Technical Specifications</div>
                <div className="spec-rows">
                  {[
                    { k: "Vehicle Class",    v: v.vehicles },
                    { k: "Engine Range",     v: v.engine },
                    { k: "Voltage Platform", v: v.voltage },
                    { k: "HHO Flow",         v: v.hho },
                    { k: "Power Draw",       v: v.power },
                    { k: "Water Use",        v: v.water },
                    { k: "Install Time",     v: v.install },
                    { k: "Fuel Savings",     v: v.fuel,    green: true },
                    { k: "PM Reduction",     v: v.pm,      green: true },
                    { k: "NOx Reduction",    v: v.nox,     green: true },
                    { k: "H₂ Storage",       v: "None — on-demand" },
                    { k: "Engine Modification", v: "None required" },
                    { k: "OEM Warranty",     v: "Preserved" },
                    { k: "Emission Testing", v: "NABL-accredited, pre & post" },
                  ].map((r) => (
                    <div className="spec-row" key={r.k}>
                      <span className="spec-key">{r.k}</span>
                      <span className={`spec-val${r.green ? " green" : ""}`}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="section" style={{ background: "var(--c-warm)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">Applications</div>
              <h2 className="section-h2">Any diesel vehicle. Any sector.</h2>
              <p className="section-body">If it runs on diesel and moves, GreenDrive improves it. We deploy across logistics, defence, mining, construction, and agriculture.</p>
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
                          <path d="M2 4l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <h2 className="cta-h2">Start with one vehicle.</h2>
            <p className="cta-sub">
              We baseline your asset, install in under 4 hours, and hand you a NABL-certified
              report showing exact before and after. You decide what comes next.
            </p>
            <Link href="/contact" className="btn-white">
              Request a Proof of Concept →
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} Earthion Tech LLP. All rights reserved.</span>
          <span className="footer-sgt">Technology by <a href="https://www.sgthydroedge.com" target="_blank" rel="noopener noreferrer">SGT HydroEdge</a></span>
        </div>
      </footer>
    </>
  );
}
