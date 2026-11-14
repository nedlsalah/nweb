"use client";
import { useState } from "react";
import { useSite } from "./SiteProvider";

export default function Footer() {
  const { c } = useSite();
  const f = c.footer;
  const [motion, setMotion] = useState(true);
  const flip = () => {
    const next = !motion;
    setMotion(next);
    document.documentElement.dataset.motion = next ? "on" : "off"; // AutoVideo + CSS listen to this
  };
  const ext = "text-muted transition-colors hover:text-fg";
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 text-sm md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="#hero" className="text-lg font-semibold tracking-tight">NEDLSALAH</a>
          <nav aria-label="Footer" className="flex flex-wrap gap-5">
            <a className={ext} href={f.privacy[1]}>{f.privacy[0]}</a>
            <a className={ext} href={f.terms[1]}>{f.terms[0]}</a>
            <a className={ext} href={c.links.behance} target="_blank" rel="noopener noreferrer">Behance<span className="sr-only"> (opens in a new tab)</span></a>
            <a className={ext} href={c.links.photography} target="_blank" rel="noopener noreferrer">Photography<span className="sr-only"> (opens in a new tab)</span></a>
            <a className={ext} href={c.links.video} target="_blank" rel="noopener noreferrer">Video<span className="sr-only"> (opens in a new tab)</span></a>
            <a className={ext} href={`mailto:${c.email}`}>{c.email}</a>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-muted">
          <p>{f.rights}</p>
          <button onClick={flip} aria-pressed={motion} className="rounded-full border border-line px-3 py-1 hover:text-fg">
            {f.motion}: {motion ? "On" : "Off"}
          </button>
        </div>
        <p className="text-muted">{f.note}</p>
      </div>
    </footer>
  );
}
