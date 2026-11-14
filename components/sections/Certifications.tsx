"use client";
import { useSite } from "../SiteProvider";
import SectionHead from "../SectionHead";

export default function Certifications() {
  const { c } = useSite();
  const k = c.certs;
  return (
    <section id="certifications" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHead n="07" eyebrow={k.eyebrow} title={k.title} intro={k.intro} />
      <ol className="border-t border-line">
        {k.items.map(([y, t, o]) => (
          <li key={t} className="grid grid-cols-[4rem_1fr] items-baseline gap-4 border-b border-line py-6 md:grid-cols-12">
            <span className="text-sm text-muted md:col-span-2">{y}</span>
            <h3 className="text-xl font-semibold tracking-tight md:col-span-7 md:text-2xl">{t}</h3>
            <p className="col-start-2 text-muted md:col-span-3 md:col-start-auto md:text-end">{o}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
