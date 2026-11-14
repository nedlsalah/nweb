"use client";
import { useState } from "react";
import { useSite } from "./SiteProvider";

export default function Nav() {
  const { c, lang, toggle } = useSite();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-bg">{c.skip}</a>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#hero" className="text-lg font-semibold tracking-tight">NEDLSALAH</a>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm text-muted xl:flex">
          {c.nav.map(([n, label, id]) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-fg"><span className="me-1 text-[11px]">{n}</span>{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggle} className="rounded-full border border-line px-3 py-1 text-xs hover:bg-surface" aria-label="Switch language">
            <span className={lang === "en" ? "text-fg" : "text-muted"}>EN</span>/<span className={lang === "ar" ? "text-fg" : "text-muted"}>AR</span>
          </button>
          <button onClick={() => setOpen(!open)} className="rounded-full border border-line px-3 py-1 text-xs xl:hidden" aria-expanded={open} aria-controls="mobile-nav">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="grid gap-1 border-t border-line bg-bg px-5 py-4 xl:hidden">
          {c.nav.map(([n, label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="flex gap-3 py-2 text-lg">
              <span className="w-6 text-sm text-muted">{n}</span>{label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
