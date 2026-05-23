"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/*
 *  Earthion Tech — Homepage
 *  app/page.jsx
 *
 *  CHANGES FROM ORIGINAL:
 *  ✓ Brand palette updated to match Earthion logo (navy #0D1B3E + sky blue #1A6FBF + lime green #6DBF3A)
 *  ✓ Industrial/boiler/kiln solution card → replaced with Vehicles / GreenDrive card
 *  ✓ Navbar: "Industrial" → "Vehicles" (links to /solutions/vehicles)
 *  ✓ Logo: Image component added (public/images/earthion-logo-white-bg.png)
 *  ✓ Contact: +91 99998 33637 · sales@earthion.co.in · Goregaon Mumbai · Ms Neetal Narang
 *  ✓ Hero badge: removed ARAI reference
 *  ✓ Tech section bullets: removed KOEL/ARAI-specific SGT credentials
 *  ✓ Certifications strip: removed ARAI Approved
 *  ✓ Footer: updated tagline + contact details
 *
 *  IMAGE REQUIRED:
 *    public/images/earthion-logo-white-bg.png  ← Earthion_Logo_WHite_BG.png
 */

const STATS = [
  { value: "≤80%", label: "Particulate Matter Reduction", sub: "NABL-verified" },
  { value: "5–22%", label: "Fuel Savings", sub: "By asset type & age" },
  { value: "59%", label: "NOx Reduction", sub: "Stack emission tests" },
  { value: "<4 hr", label: "Installation Time", sub: "Zero engine downtime" },
];

const CERTIFICATIONS = [
  "NABL Validated",
  "Make in India",
  "Zero H₂ Storage",
  "GreenVision™ IoT",
  "Pan-India Service",
];

const PROCESS = [
  { step: "01", title: "Site Audit", desc: "We baseline your existing diesel assets — fuel consumption, load profiles, emission levels — before any hardware is fitted." },
  { step: "02", title: "System Sizing", desc: "Each GreenX or GreenDrive unit is sized to your specific engine platform. One-size-fits-all is not our model." },
  { step: "03", title: "Installation", desc: "Bolt-on retrofit. No engine modification. No fuel switch. Under 4 hours per asset with zero production downtime." },
  { step: "04", title: "NABL Testing", desc: "Post-installation stack emission testing by NABL-accredited laboratories. You receive independently certified numbers." },
  { step: "05", title: "Ongoing Optimisation", desc: "Continuous monitoring and dose calibration across the system lifecycle. We stay with you." },
];

export default function EarthionHome() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --c-dark:   #0D1B3E;
          --c-green:  #1A6FBF;
          --c-accent: #6DBF3A;
          --c-warm:   #F5F7FA;
          --c-slate:  #5A6B80;
          --c-border: #D4DCE8;
          --c-white:  #FFFFFF;
          --serif:    'Instrument Serif', Georgia, serif;
          --sans:     'DM Sans', system-ui, sans-serif;
          --nav-h:    68px;
        }

        html { scroll-behavior: smooth; }
        body { font-family: var(--sans); background: var(--c-warm); color: var(--c-dark); }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: var(--nav-h);
          display: flex; align-items: center; justify-content: space-between; padding: 0 5%;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .nav.scrolled {
          background: rgba(13,27,62,0.97);
          box-shadow: 0 1px 0 rgba(109,191,58,0.2);
          backdrop-filter: blur(12px);
        }
        .nav-logo { display: flex; align-items: center; text-decoration: none; height: 44px; }
        .nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
        .nav-links a { font-size: 0.875rem; font-weight: 500; color: rgba(255,255,255,0.72); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: var(--c-accent); }
        .nav-cta { background: var(--c-accent) !important; color: var(--c-dark) !important; opacity: 1 !important; padding: 9px 20px; border-radius: 6px; font-size: 0.875rem !important; font-weight: 600 !important; transition: background 0.2s, transform 0.15s !important; }
        .nav-cta:hover { background: #82D94A !important; transform: translateY(-1px); color: var(--c-dark) !important; }

        /* HERO */
        .hero { min-height: 100svh; padding-top: var(--nav-h); display: flex; align-items: center; background: var(--c-dark); position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 70% at 70% 50%, rgba(26,111,191,0.25) 0%, transparent 70%); }
        .hero-grid { position: absolute; inset: 0; opacity: 0.05; background-image: linear-gradient(rgba(109,191,58,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(109,191,58,0.6) 1px, transparent 1px); background-size: 60px 60px; }
        .hero-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; padding: 5rem 5%; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(109,191,58,0.12); border: 1px solid rgba(109,191,58,0.3); padding: 6px 14px; border-radius: 100px; margin-bottom: 2rem; }
        .hero-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--c-accent); animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
        .hero-badge span { font-size: 0.78rem; font-weight: 500; color: var(--c-accent); letter-spacing: 0.05em; text-transform: uppercase; }
        .hero-h1 { font-family: var(--serif); font-size: clamp(2.8rem, 6vw, 5rem); color: var(--c-white); line-height: 1.1; letter-spacing: -0.02em; max-width: 780px; margin-bottom: 1.5rem; }
        .hero-h1 em { color: var(--c-accent); font-style: normal; }
        .hero-sub { font-size: 1.05rem; color: rgba(255,255,255,0.6); line-height: 1.7; max-width: 560px; margin-bottom: 2.5rem; font-weight: 300; }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { background: var(--c-accent); color: var(--c-dark); font-family: var(--sans); font-weight: 600; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(109,191,58,0.4); }
        .btn-ghost { background: transparent; color: rgba(255,255,255,0.8); font-family: var(--sans); font-weight: 500; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; border: 1px solid rgba(255,255,255,0.2); transition: border-color 0.2s, color 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--c-white); }
        .hero-scroll { position: absolute; bottom: 2.5rem; left: 5%; display: flex; align-items: center; gap: 10px; font-size: 0.78rem; color: rgba(255,255,255,0.35); letter-spacing: 0.08em; text-transform: uppercase; }
        .hero-scroll-line { width: 40px; height: 1px; background: rgba(255,255,255,0.2); }

        /* STATS */
        .stats-strip { background: var(--c-green); padding: 2.5rem 5%; }
        .stats-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,0.15); }
        .stat-item { background: var(--c-green); padding: 2rem 1.5rem; text-align: center; }
        .stat-value { font-family: var(--serif); font-size: 2.4rem; color: var(--c-white); letter-spacing: -0.02em; line-height: 1; }
        .stat-label { font-size: 0.82rem; color: rgba(255,255,255,0.75); margin-top: 0.4rem; font-weight: 500; line-height: 1.3; }
        .stat-sub { font-size: 0.72rem; color: rgba(255,255,255,0.5); margin-top: 0.2rem; font-style: italic; }

        /* SECTIONS */
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

        /* SOLUTIONS */
        .solutions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 3rem; }
        .solution-card { border: 1px solid var(--c-border); border-radius: 12px; padding: 2.5rem; background: var(--c-white); text-decoration: none; color: inherit; transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s; position: relative; overflow: hidden; }
        .solution-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--c-accent); transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease; }
        .solution-card:hover { border-color: var(--c-green); box-shadow: 0 8px 32px rgba(26,111,191,0.12); transform: translateY(-2px); }
        .solution-card:hover::before { transform: scaleX(1); }
        .solution-icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(26,111,191,0.08); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
        .solution-title { font-family: var(--serif); font-size: 1.5rem; margin-bottom: 0.75rem; letter-spacing: -0.01em; line-height: 1.2; }
        .solution-desc { font-size: 0.9rem; color: var(--c-slate); line-height: 1.7; margin-bottom: 1.5rem; }
        .solution-metrics { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .metric-pill { background: rgba(109,191,58,0.1); border: 1px solid rgba(109,191,58,0.3); padding: 4px 10px; border-radius: 100px; font-size: 0.75rem; font-weight: 600; color: #3A8A1A; }
        .solution-link { font-size: 0.85rem; font-weight: 600; color: var(--c-green); display: inline-flex; align-items: center; gap: 6px; }
        .solution-link svg { transition: transform 0.2s; }
        .solution-card:hover .solution-link svg { transform: translateX(4px); }

        /* TECH */
        .tech-strip { background: var(--c-dark); padding: 6rem 5%; }
        .tech-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .tech-h2 { font-family: var(--serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); color: var(--c-white); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
        .tech-body { color: rgba(255,255,255,0.55); font-size: 0.95rem; line-height: 1.8; margin-bottom: 2rem; font-weight: 300; }
        .tech-points { list-style: none; display: flex; flex-direction: column; gap: 0.85rem; }
        .tech-points li { display: flex; align-items: flex-start; gap: 12px; font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.5; }
        .tech-points li::before { content: ''; flex-shrink: 0; width: 18px; height: 18px; border-radius: 50%; background: rgba(109,191,58,0.15); border: 1px solid rgba(109,191,58,0.4); margin-top: 1px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236DBF3A'%3E%3Cpath d='M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: center; background-size: 10px; }
        .tech-visual { border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; background: rgba(255,255,255,0.03); padding: 2rem; }
        .tech-metric-row { display: flex; flex-direction: column; gap: 1.25rem; }
        .tech-metric-header { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
        .tech-metric-name { font-size: 0.82rem; color: rgba(255,255,255,0.5); }
        .tech-metric-val { font-size: 0.82rem; font-weight: 600; color: var(--c-accent); }
        .tech-metric-bar { height: 4px; background: rgba(255,255,255,0.07); border-radius: 2px; overflow: hidden; }
        .tech-metric-fill { height: 100%; border-radius: 2px; background: linear-gradient(90deg, var(--c-green), var(--c-accent)); }
        .tech-source { margin-top: 1.5rem; font-size: 0.72rem; color: rgba(255,255,255,0.25); line-height: 1.6; font-style: italic; }

        /* PROCESS */
        .process-list { display: flex; flex-direction: column; gap: 0; margin-top: 3rem; }
        .process-item { display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; padding: 1.75rem 0; border-bottom: 1px solid var(--c-border); align-items: start; }
        .process-item:last-child { border-bottom: none; }
        .process-num { font-family: var(--serif); font-size: 1.4rem; color: var(--c-green); opacity: 0.5; padding-top: 0.1rem; }
        .process-title { font-size: 1rem; font-weight: 600; margin-bottom: 0.35rem; color: var(--c-dark); }
        .process-desc { font-size: 0.9rem; color: var(--c-slate); line-height: 1.65; }

        /* CERT STRIP */
        .cert-strip { background: var(--c-dark); padding: 1.5rem 5%; border-top: 1px solid rgba(109,191,58,0.12); }
        .cert-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; }
        .cert-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.35); white-space: nowrap; }
        .cert-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.12); flex-shrink: 0; }
        .cert-pills { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .cert-pill { font-size: 0.75rem; font-weight: 500; color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.12); padding: 5px 14px; border-radius: 100px; transition: border-color 0.2s, color 0.2s; }
        .cert-pill:hover { border-color: rgba(109,191,58,0.4); color: var(--c-accent); }

        /* PARTNER */
        .partner-strip { background: rgba(26,111,191,0.06); border-top: 1px solid rgba(26,111,191,0.15); border-bottom: 1px solid rgba(26,111,191,0.15); padding: 2rem 5%; }
        .partner-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
        .partner-text h3 { font-family: var(--serif); font-size: 1.1rem; margin-bottom: 0.4rem; color: var(--c-dark); }
        .partner-text p { font-size: 0.875rem; color: var(--c-slate); line-height: 1.6; max-width: 580px; }
        .partner-badge { display: inline-flex; align-items: center; gap: 8px; background: var(--c-green); color: var(--c-white); padding: 10px 20px; border-radius: 6px; font-size: 0.875rem; font-weight: 500; text-decoration: none; white-space: nowrap; transition: background 0.2s; }
        .partner-badge:hover { background: #1559A0; }
        .partner-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c-accent); flex-shrink: 0; }

        /* CTA */
        .cta-section { background: var(--c-dark); padding: 7rem 5%; text-align: center; }
        .cta-inner { max-width: 620px; margin: 0 auto; }
        .cta-h2 { font-family: var(--serif); font-size: clamp(2rem, 4vw, 3rem); color: var(--c-white); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
        .cta-sub { font-size: 1rem; color: rgba(255,255,255,0.5); line-height: 1.75; font-weight: 300; margin-bottom: 2.5rem; }
        .cta-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
        .btn-white { background: var(--c-accent); color: var(--c-dark); font-family: var(--sans); font-weight: 600; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-white:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(109,191,58,0.4); }
        .btn-white-ghost { background: transparent; color: rgba(255,255,255,0.75); font-family: var(--sans); font-weight: 500; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; border: 1px solid rgba(255,255,255,0.2); transition: border-color 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-white-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--c-white); }

        /* FOOTER */
        .footer { background: var(--c-dark); padding: 4rem 5% 2rem; border-top: 1px solid rgba(109,191,58,0.12); }
        .footer-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .footer-logo { display: flex; align-items: center; margin-bottom: 1rem; height: 36px; }
        .footer-tagline { font-size: 0.85rem; color: rgba(255,255,255,0.4); line-height: 1.7; margin-bottom: 1.25rem; max-width: 260px; }
        .footer-contact { font-size: 0.82rem; color: rgba(255,255,255,0.35); line-height: 2; }
        .footer-contact a { color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
        .footer-contact a:hover { color: var(--c-accent); }
        .footer-col h4 { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 1.25rem; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
        .footer-col ul a { font-size: 0.875rem; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
        .footer-col ul a:hover { color: var(--c-accent); }
        .footer-bottom { max-width: 1100px; margin: 1.5rem auto 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.25); }
        .footer-sgt { font-size: 0.75rem; color: rgba(255,255,255,0.25); }
        .footer-sgt a { color: rgba(26,111,191,0.7); text-decoration: none; }
        .footer-sgt a:hover { color: var(--c-accent); }

        /* HAMBURGER */
        .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .hamburger span { width: 24px; height: 2px; background: rgba(255,255,255,0.8); border-radius: 2px; display: block; }
        .mobile-menu { display: none; flex-direction: column; gap: 2rem; position: fixed; inset: 0; background: var(--c-dark); padding: 6rem 5%; z-index: 200; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { font-family: var(--serif); font-size: 2rem; color: var(--c-white); text-decoration: none; }
        .mobile-close { position: absolute; top: 1.5rem; right: 5%; background: none; border: none; font-size: 2rem; color: var(--c-white); cursor: pointer; }

        @media (max-width: 900px) {
          .solutions-grid { grid-template-columns: 1fr; }
          .tech-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
        @media (max-width: 560px) {
          .stats-grid { grid-template-columns: 1fr 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .partner-inner { flex-direction: column; align-items: flex-start; }
          .process-item { grid-template-columns: 60px 1fr; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-logo" style={{
          background: "rgba(255,255,255,0.09)",
          borderRadius: 8,
          padding: "4px 10px",
          backdropFilter: "blur(2px)"
        }}>
          <Image
            src="/images/earthion-logo-trans.png"
            alt="Earthion Tech"
            width={250}
            height={100}
            priority
            style={{ height: 52, width: "auto", objectFit: "contain" }}
          />
        </Link>
        <ul className="nav-links">
          <li><Link href="/solutions/dg-sets">DG Solutions</Link></li>
          <li><Link href="/solutions/vehicles">Vehicles</Link></li>
          <li><Link href="/technology">Technology</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact" className="nav-cta">Request POC</Link></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>×</button>
        <Link href="/solutions/dg-sets" onClick={() => setMenuOpen(false)}>DG Solutions</Link>
        <Link href="/solutions/vehicles" onClick={() => setMenuOpen(false)}>Vehicles</Link>
        <Link href="/technology" onClick={() => setMenuOpen(false)}>Technology</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Request POC</Link>
      </div>

      <main>
        {/* HERO */}
        <section className="hero" ref={heroRef}>
          <div className="hero-grid" />
          <div className="hero-inner">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              <span>NABL Validated · Zero H₂ Storage · Made in India</span>
            </div>
            <h1 className="hero-h1">
              Decarbonising Diesel.<br />
              <em>Without Replacing</em><br />
              a Single Engine.
            </h1>
            <p className="hero-sub">
              Earthion&apos;s Controlled Hydrogen Fuel Assist (CHFA) retrofit cuts fuel consumption
              by 5–22% and slashes particulate matter by up to 80% — on any diesel generator
              or vehicle fleet, without modifying the engine.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Request a POC
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/technology" className="btn-ghost">How It Works</Link>
            </div>
          </div>
          <div className="hero-scroll">
            <div className="hero-scroll-line" />
            Scroll to explore
          </div>
        </section>

        {/* STATS */}
        <div className="stats-strip">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div className="stat-item reveal" key={s.label} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SOLUTIONS */}
        <section className="section" style={{ background: "var(--c-warm)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">Our Solutions</div>
              <h2 className="section-h2">Two Focused Verticals.<br />One Proven Technology.</h2>
              <p className="section-body">
                Whether you operate diesel generators or run a vehicle fleet, Earthion delivers
                measurable decarbonisation — certified, bankable, and profitable.
              </p>
            </div>
            <div className="solutions-grid">

              {/* DG SETS */}
              <Link href="/solutions/dg-sets" className="solution-card reveal reveal-delay-1">
                <div className="solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="13" rx="2" stroke="#1A6FBF" strokeWidth="1.5" />
                    <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#1A6FBF" strokeWidth="1.5" />
                    <circle cx="12" cy="13.5" r="2.5" stroke="#6DBF3A" strokeWidth="1.5" />
                    <path d="M8 10h1m7 0h1" stroke="#1A6FBF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="solution-title">Hydrogen Fuel Systems<br />for Diesel Generators</div>
                <p className="solution-desc">
                  GreenX™ CHFA retrofit for DG sets from 25 kVA to 4,000 kVA. Cantonments,
                  hospitals, data centres, factories, or off-grid sites — if it runs on diesel,
                  it runs better with Earthion.
                </p>
                <div className="solution-metrics">
                  <span className="metric-pill">3–15% Diesel Saved</span>
                  <span className="metric-pill">PM ↓ 80%</span>
                  <span className="metric-pill">NOx ↓ 59%</span>
                  <span className="metric-pill">Under 4 hr Install</span>
                </div>
                <span className="solution-link">
                  Explore DG Solutions
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="#1A6FBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

              {/* VEHICLES — replaces old Industrial/Boiler/Kiln card */}
              <Link href="/solutions/vehicles" className="solution-card reveal reveal-delay-2">
                <div className="solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M1 17h2m18 0h2M3 17V9l3-5h12l3 5v8" stroke="#1A6FBF" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="7" cy="17" r="2.5" stroke="#6DBF3A" strokeWidth="1.5" />
                    <circle cx="17" cy="17" r="2.5" stroke="#6DBF3A" strokeWidth="1.5" />
                    <path d="M3 12h18" stroke="#1A6FBF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="solution-title">Hydrogen Fuel Systems<br />for Diesel Vehicles</div>
                <p className="solution-desc">
                  GreenDrive™ CHFA retrofit for any diesel vehicle — logistics trucks, defence fleets,
                  mining equipment, construction machinery. Nano, Mini, and Neo variants cover
                  2L to 25L+ engines. Any make. Any vintage.
                </p>
                <div className="solution-metrics">
                  <span className="metric-pill">6–22% Fuel Saved</span>
                  <span className="metric-pill">PM ↓ 80%</span>
                  <span className="metric-pill">Any Diesel Engine</span>
                  <span className="metric-pill">Under 4 hr Install</span>
                </div>
                <span className="solution-link">
                  Explore Vehicle Solutions
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="#1A6FBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* PRODUCTS STRIP
             Images go in: public/images/products/
             greendrive-mini.png        ← Greendrive-Mini-earthion.png
             greendrive-neo.png         ← GreenDrive-Neo_Earthion.png
             greenx-mini.png            ← GreenX-Mini-Back.png
             greenx-1.png               ← GreenX-1.png
        */}
        <div style={{ background: "#fff", padding: "4rem 5%", borderTop: "1px solid #D4DCE8", borderBottom: "1px solid #D4DCE8" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A6FBF", marginBottom: "0.75rem" }}>
              Our Products
            </div>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", marginBottom: "2.5rem", color: "#0D1B3E" }}>
              The hardware behind the numbers.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              {[
                {
                  src: "/images/products/greendrive-mini.png",
                  name: "GreenDrive Mini™",
                  tag: "Vehicles · MCV / 6×6",
                  spec: "150–400 ml/min · 12V/24V",
                },
                {
                  src: "/images/products/greendrive-neo.png",
                  name: "GreenDrive Neo™",
                  tag: "Vehicles · HCV / Heavy",
                  spec: "400–800 ml/min · 24V",
                },
                {
                  src: "/images/products/greenx-1.png",
                  name: "GreenX™",
                  tag: "DG Sets · 25–250 kVA",
                  spec: "100–600 ml/min · 12/24V",
                },
                {
                  src: "/images/products/greenx ultra.png",
                  name: "GreenX Ultra™",
                  tag: "DG Sets · 250–4000 kVA",
                  spec: "600–1800 ml/min · 24V",
                },
              ].map((p) => (
                <div key={p.name} style={{ border: "1px solid #D4DCE8", borderRadius: 12, overflow: "hidden", background: "#F5F7FA" }}>
                  {/* Product image */}
                  <div style={{ background: "#fff", padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 180 }}>
                    <img
                      src={p.src}
                      alt={p.name}
                      style={{ width: "100%", maxHeight: 160, objectFit: "contain", display: "block" }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback placeholder when image missing */}
                    <div style={{
                      display: "none", width: "100%", height: 160,
                      alignItems: "center", justifyContent: "center",
                      color: "#D4DCE8", fontSize: "0.75rem", fontFamily: "'DM Sans', system-ui, sans-serif",
                      letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center",
                    }}>
                      {p.name}<br />image coming
                    </div>
                  </div>
                  {/* Product info */}
                  <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6DBF3A", marginBottom: "0.3rem" }}>
                      {p.tag}
                    </div>
                    <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.05rem", color: "#0D1B3E", marginBottom: "0.3rem" }}>
                      {p.name}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "0.75rem", color: "#5A6B80" }}>
                      {p.spec}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TECHNOLOGY */}
        <div className="tech-strip">
          <div className="tech-inner">
            <div className="reveal">
              <div className="section-label" style={{ color: "var(--c-accent)" }}>The Science</div>
              <h2 className="tech-h2">Combustion physics, not chemistry tricks.</h2>
              <p className="tech-body">
                Every diesel engine in the world — no matter how well-tuned — burns 5 to 15%
                of its fuel incompletely. That waste exits as PM, CO, NOx, and CO₂.
                CHFA introduces trace hydrogen into the intake air, creating additional ignition
                kernels that reach the unburned pockets the diesel flame alone misses.
                The result: the same fuel, the same engine, burning more completely.
              </p>
              <ul className="tech-points">
                <li>No high-pressure hydrogen storage. Generated on-demand from water.</li>
                <li>No engine modification. No fuel switch. Bolt-on retrofit only.</li>
                <li>OEM warranty preserved. Independently validated across platforms.</li>
                <li>NABL-certified emission reports on every installation.</li>
              </ul>
            </div>
            <div className="tech-visual reveal reveal-delay-2">
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Emission reductions — NABL stack test
              </div>
              <div className="tech-metric-row">
                {[
                  { name: "Particulate Matter", val: "↓ 80.1%", width: "80%" },
                  { name: "NOx (as NO₂)", val: "↓ 59.2%", width: "59%" },
                  { name: "SO₂", val: "↓ 75.2%", width: "75%" },
                  { name: "CO₂", val: "↓ 42.9%", width: "43%" },
                  { name: "Fuel Consumption", val: "↓ 5–22%", width: "62%" },
                ].map((m) => (
                  <div className="tech-metric" key={m.name}>
                    <div className="tech-metric-header">
                      <span className="tech-metric-name">{m.name}</span>
                      <span className="tech-metric-val">{m.val}</span>
                    </div>
                    <div className="tech-metric-bar">
                      <div className="tech-metric-fill" style={{ width: m.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="tech-source">
                Source: NABL-accredited stack emission test. Heavy-duty diesel platform, baseline vs CHFA-assisted,
                identical load profile. Raw reports available to qualified reviewers under NDA.
              </div>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <section className="section" style={{ background: "var(--c-warm)" }}>
          <div className="section-inner">
            <div className="reveal">
              <div className="section-label">How We Work</div>
              <h2 className="section-h2">From audit to certified outcome.</h2>
              <p className="section-body">
                We do not drop hardware and leave. Every deployment follows a structured process
                with independent measurement at every stage.
              </p>
            </div>
            <div className="process-list reveal reveal-delay-1">
              {PROCESS.map((p) => (
                <div className="process-item" key={p.step}>
                  <div className="process-num">{p.step}</div>
                  <div>
                    <div className="process-title">{p.title}</div>
                    <div className="process-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <div className="cert-strip">
          <div className="cert-inner">
            <span className="cert-label">Validated by</span>
            <div className="cert-divider" />
            <div className="cert-pills">
              {CERTIFICATIONS.map((c) => (
                <span className="cert-pill" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* SGT PARTNER */}
        {/* <div className="partner-strip">
          <div className="partner-inner">
            <div className="partner-text">
              <h3>Technology Partner: SGT HydroEdge</h3>
              <p>
                Earthion&apos;s CHFA systems are built on technology developed and validated by
                SGT HydroEdge — India&apos;s first manufacturer of industrial on-demand hydrogen
                systems and a recognised DeepTech company under Startup India.
              </p>
            </div>
            <a href="https://www.sgthydroedge.com" target="_blank" rel="noopener noreferrer" className="partner-badge">
              <div className="partner-badge-dot" />
              Visit SGT HydroEdge ↗
            </a>
          </div>
        </div> */}

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-inner reveal">
            <h2 className="cta-h2">Start with a Proof of Concept.</h2>
            <p className="cta-sub">
              One asset. NABL-certified baseline. Post-installation measurement.
              You see the numbers before you commit to anything further.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn-white">Request a POC</Link>
              <Link href="/technology" className="btn-white-ghost">Read the Science</Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              {/*
                FOOTER LOGO: public/images/earthion-logo-white-bg.png
                filter makes dark logo appear white on dark footer background
              */}
<Link href="/" className="nav-logo" style={{ 
  background: "rgba(255,255,255,0.08)", 
  borderRadius: 8, 
  padding: "4px 10px",
  backdropFilter: "blur(4px)"
}}>
  <Image
    src="/images/earthion-logo-trans.png"
    alt="Earthion Tech"
    width={250}
    height={100}
    priority
    style={{ height: 52, width: "auto", objectFit: "contain" }}
  />
</Link>
            </div>
            <p className="footer-tagline">
              Decarbonising diesel generators and vehicle fleets through
              Controlled Hydrogen Fuel Assist. Made in Pune, India.
            </p>
            <div className="footer-contact">
              <div><a href="mailto:sales@earthion.co.in">sales@earthion.co.in</a></div>
              <div><a href="mailto:sales@earthion.co.in">nn@earthion.co.in</a></div>
              <div>501, Pratiek Plaza, Goregaon (W), Mumbai – 400104</div>
            </div>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/solutions/dg-sets">DG Set Systems</Link></li>
              <li><Link href="/solutions/vehicles">Vehicle Systems</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* <div className="footer-col">
            <h4>Technology Partner</h4>
            <ul>
              <li><a href="https://www.sgthydroedge.com" target="_blank" rel="noopener noreferrer">SGT HydroEdge</a></li>
            </ul>
          </div> */}
        </div>
        {/* <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} Earthion Tech LLP. All rights reserved.</span>
          <span className="footer-sgt">Technology by <a href="https://www.sgthydroedge.com" target="_blank" rel="noopener noreferrer">SGT HydroEdge</a> — Decarbonisation Infrastructure Company</span>
        </div> */}
      </footer>
    </>
  );
}