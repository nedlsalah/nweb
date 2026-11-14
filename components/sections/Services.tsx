"use client";
import { useSite } from "../SiteProvider";
import SectionHead from "../SectionHead";

export default function Services() {
  const { c } = useSite();
  const s = c.services;
  return (
    <section id="services" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHead n="01" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />
      <ol className="border-t border-line">
        {s.items.map((it, i) => (
          <li key={it.title} className="grid gap-6 border-b border-line py-10 md:grid-cols-12">
            <h3 className="text-2xl font-semibold tracking-tight md:col-span-5"><span className="me-3 text-base text-muted">{String(i + 1).padStart(2, "0")}</span>{it.title}</h3>
            <div className="md:col-span-7">
              <p className="text-muted">{it.desc}</p>
              <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                {it.points.map((p) => <li key={p} className="border-s border-line ps-3">{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
