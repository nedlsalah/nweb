"use client";
import { useSite } from "../SiteProvider";
import SectionHead from "../SectionHead";

export default function Skills() {
  const { c } = useSite();
  const s = c.skills;
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHead n="06" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {s.groups.map(([g, items]) => (
          <div key={g} className="border-t border-line pt-5">
            <h3 className="text-lg font-semibold tracking-tight">{g}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((i) => <li key={i} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
