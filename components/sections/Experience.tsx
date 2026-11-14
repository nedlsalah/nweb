"use client";
import { useSite } from "../SiteProvider";
import SectionHead from "../SectionHead";

export default function Experience() {
  const { c } = useSite();
  const e = c.experience;
  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHead n="05" eyebrow={e.eyebrow} title={e.title} intro={e.intro} />
      <ol className="border-t border-line">
        {e.items.map((t, i) => (
          <li key={t} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-5 md:grid-cols-12">
            <span className="text-sm text-muted md:col-span-2">{String(i + 1).padStart(2, "0")}</span>
            <p className="md:col-span-8 md:text-lg">{t}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
