"use client";
import { useSite } from "../SiteProvider";
import SectionHead from "../SectionHead";

export default function Testimonials() {
  const { c } = useSite();
  const t = c.testimonials;
  return (
    <section id="testimonials" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHead n="08" eyebrow={t.eyebrow} title={t.title} />
      <ul className="grid gap-6 md:grid-cols-2">
        {t.items.map(([topic, quote, role]) => (
          <li key={topic} className="flex flex-col justify-between rounded-2xl border border-line p-6 md:p-8">
            <p className="text-sm text-muted">{topic}</p>
            <blockquote className="mt-6 text-lg leading-relaxed">{quote}</blockquote>
            <p className="mt-8 text-sm text-muted">{role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
