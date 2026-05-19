"use client";

/*
 *  Earthion Tech — Shared Navbar
 *  components/Navbar.jsx
 *
 *  Import this in every page:
 *    import Navbar from "@/components/Navbar";
 *
 *  IMAGE: public/images/earthion-logo-white-bg.png  (Earthion_Logo_WHite_BG.png)
 *  The filter brightness(0) invert(1) makes the dark logo appear white.
 *  Remove the filter if you have a white/transparent-bg version.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ activePage = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "DG Solutions", href: "/solutions/dg-sets",  key: "dg" },
    { label: "Vehicles",     href: "/solutions/vehicles", key: "vehicles" },
    { label: "Technology",   href: "/technology",         key: "technology" },
    { label: "About",        href: "/about",              key: "about" },
  ];

  return (
    <>
      <style>{`
        .e-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          height: 68px; display: flex; align-items: center;
          justify-content: space-between; padding: 0 5%;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .e-nav.scrolled {
          background: rgba(13,27,62,0.97);
          box-shadow: 0 1px 0 rgba(109,191,58,0.2);
          backdrop-filter: blur(12px);
        }
        .e-nav-logo { display: flex; align-items: center; text-decoration: none; height: 44px; }
        .e-nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
        .e-nav-links a {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.875rem; font-weight: 500;
          color: rgba(255,255,255,0.72); text-decoration: none;
          transition: color 0.2s; padding-bottom: 2px;
          border-bottom: 2px solid transparent;
        }
        .e-nav-links a:hover { color: #6DBF3A; }
        .e-nav-links a.active { color: #6DBF3A; border-bottom-color: #6DBF3A; }
        .e-nav-cta {
          background: #6DBF3A !important; color: #0D1B3E !important;
          font-weight: 600 !important; padding: 9px 20px; border-radius: 6px;
          font-size: 0.875rem !important; border-bottom: none !important;
          transition: background 0.2s, transform 0.15s !important;
        }
        .e-nav-cta:hover { background: #82D94A !important; transform: translateY(-1px); color: #0D1B3E !important; }
        .e-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .e-hamburger span { width: 24px; height: 2px; background: rgba(255,255,255,0.8); border-radius: 2px; display: block; }
        .e-mobile-menu {
          display: none; flex-direction: column; gap: 2rem;
          position: fixed; inset: 0; background: #0D1B3E;
          padding: 6rem 5%; z-index: 1100;
        }
        .e-mobile-menu.open { display: flex; }
        .e-mobile-menu a { font-family: 'Instrument Serif', Georgia, serif; font-size: 2rem; color: white; text-decoration: none; }
        .e-mobile-close { position: absolute; top: 1.5rem; right: 5%; background: none; border: none; font-size: 2rem; color: white; cursor: pointer; }
        @media (max-width: 900px) {
          .e-nav-links { display: none; }
          .e-hamburger { display: flex; }
        }
      `}</style>

      <nav className={`e-nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="e-nav-logo">
          <Image
            src="/images/earthion-logo-white-bg.png"
            alt="Earthion Tech"
            width={150}
            height={38}
            priority
            style={{ height: 38, width: "auto" }}
          />
        </Link>
        <ul className="e-nav-links">
          {links.map((l) => (
            <li key={l.key}>
              <Link href={l.href} className={activePage === l.key ? "active" : ""}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className={`e-nav-cta${activePage === "contact" ? " active" : ""}`}>
              Request POC
            </Link>
          </li>
        </ul>
        <button className="e-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`e-mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="e-mobile-close" onClick={() => setMenuOpen(false)}>×</button>
        {links.map((l) => (
          <Link key={l.key} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Request POC</Link>
      </div>
    </>
  );
}
