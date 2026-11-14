"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { en, ar, type Content } from "@/lib/content";

type Lang = "en" | "ar";
const Ctx = createContext<{ c: Content; lang: Lang; toggle: () => void }>({ c: en, lang: "en", toggle: () => {} });
export const useSite = () => useContext(Ctx);

export default function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const c = lang === "ar" ? ({ ...en, ...ar } as Content) : en;
  return <Ctx.Provider value={{ c, lang, toggle: () => setLang((l) => (l === "en" ? "ar" : "en")) }}>{children}</Ctx.Provider>;
}
