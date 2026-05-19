/*
 *  Earthion Tech — Shared base CSS
 *  lib/sharedStyles.js
 *
 *  Import in every page:
 *    import { BASE_CSS } from "@/lib/sharedStyles";
 *  Then in the page's <style>:
 *    <style>{BASE_CSS + `...page specific CSS...`}</style>
 */

export const BASE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    /* Earthion brand colours — matched to logo */
    --c-dark:   #0D1B3E;   /* navy */
    --c-green:  #1A6FBF;   /* sky blue — primary */
    --c-accent: #6DBF3A;   /* lime green — highlight / CTA */
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

  /* Sections */
  .section { padding: 6rem 5%; }
  .section-inner { max-width: 1100px; margin: 0 auto; }
  .section-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--c-green); margin-bottom: 1rem; }
  .section-h2 { font-family: var(--serif); font-size: clamp(1.7rem, 3vw, 2.6rem); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
  .section-body { font-size: 0.95rem; color: var(--c-slate); line-height: 1.8; max-width: 620px; font-weight: 300; margin-bottom: 2rem; }

  /* Page hero */
  .page-hero { background: var(--c-dark); padding: calc(var(--nav-h) + 4rem) 5% 5rem; position: relative; overflow: hidden; }
  .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 60% at 60% 70%, rgba(26,111,191,0.22) 0%, transparent 70%); }
  .page-hero-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
  .page-tag { display: inline-flex; align-items: center; gap: 8px; background: rgba(109,191,58,0.12); border: 1px solid rgba(109,191,58,0.3); padding: 5px 12px; border-radius: 100px; margin-bottom: 1.5rem; font-size: 0.75rem; font-weight: 600; color: #6DBF3A; letter-spacing: 0.06em; text-transform: uppercase; }
  .page-h1 { font-family: var(--serif); font-size: clamp(2.2rem, 5vw, 3.8rem); color: var(--c-white); letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1.25rem; max-width: 720px; }
  .page-h1 em { color: #6DBF3A; font-style: normal; }
  .page-sub { font-size: 1rem; color: rgba(255,255,255,0.55); line-height: 1.75; max-width: 580px; font-weight: 300; }

  /* Buttons */
  .btn-primary { background: #6DBF3A; color: #0D1B3E; font-family: var(--sans); font-weight: 600; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.2s, box-shadow 0.2s; }
  .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(109,191,58,0.4); }
  .btn-ghost { background: transparent; color: rgba(255,255,255,0.8); font-family: var(--sans); font-weight: 500; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; border: 1px solid rgba(255,255,255,0.2); transition: border-color 0.2s, color 0.2s; display: inline-flex; align-items: center; gap: 8px; }
  .btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: #fff; }

  /* Reveal animation */
  .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .reveal.revealed { opacity: 1; transform: translateY(0); }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }

  /* Footer mini */
  .footer-mini { background: var(--c-dark); padding: 2rem 5%; border-top: 1px solid rgba(109,191,58,0.12); }
  .footer-mini-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
  .footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.25); }
  .footer-sgt { font-size: 0.75rem; color: rgba(255,255,255,0.25); }
  .footer-sgt a { color: rgba(26,111,191,0.7); text-decoration: none; }
  .footer-sgt a:hover { color: #6DBF3A; }

  /* CTA section */
  .cta-section { background: var(--c-dark); padding: 7rem 5%; text-align: center; }
  .cta-inner { max-width: 620px; margin: 0 auto; }
  .cta-h2 { font-family: var(--serif); font-size: clamp(2rem, 4vw, 3rem); color: var(--c-white); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
  .cta-sub { font-size: 1rem; color: rgba(255,255,255,0.5); line-height: 1.75; font-weight: 300; margin-bottom: 2.5rem; }
  .btn-white { background: #6DBF3A; color: #0D1B3E; font-family: var(--sans); font-weight: 600; font-size: 0.9rem; padding: 13px 28px; border-radius: 6px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; display: inline-block; }
  .btn-white:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(109,191,58,0.4); }
`;
