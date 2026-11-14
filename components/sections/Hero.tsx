"use client";
import { useSite } from "../SiteProvider";
import { asset } from "@/lib/asset";

export default function Hero() {
  const { c } = useSite();
  const h = c.hero;
  const pill = "rounded-full border border-line px-4 py-2 text-sm hover:bg-surface";
  return (
    <section id="hero" className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-20">
      <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        <a href={`mailto:${c.email}`} className="hover:text-fg">{c.email}</a>
        <a href={c.links.behance} target="_blank" rel="noopener noreferrer" className="hover:text-fg">Behance</a>
        <a href={c.links.photography} target="_blank" rel="noopener noreferrer" className="hover:text-fg">Photography</a>
        <a href={c.links.video} target="_blank" rel="noopener noreferrer" className="hover:text-fg">Video</a>
      </div>
      <div className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mb-6 text-sm text-muted">{h.available} <span className="mx-2">/</span> {h.location}</p>
          <h1 className="text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.95] tracking-tighter">{h.title}</h1>
          <p className="mt-10 max-w-2xl text-lg text-muted md:text-xl">{h.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg">{h.cta1}</a>
            <a href="#contact" className={pill + " py-3"}>{h.cta2}</a>
          </div>
        </div>
        <div className="lg:col-span-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/img/me.jpg")} alt={h.imgAlt} className="aspect-[4/5] w-full rounded-2xl object-cover" fetchPriority="high" />
        </div>
      </div>
      <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
        {h.stats.map(([k, v]) => (
          <div key={k}><dt className="text-sm text-muted">{k}</dt><dd className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{v}</dd></div>
        ))}
      </dl>
    </section>
  );
}
