"use client";
import { useEffect, useRef } from "react";

type Props = { src: string; poster: string; className?: string; label?: string };

/**
 * Muted looping preview that only plays while on screen.
 * preload="none" means no bytes are fetched until the tile approaches the viewport.
 */
export default function AutoVideo({ src, poster, className, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // React does not reliably render the `muted` attribute, which blocks autoplay on iOS/Chrome
    let visible = false;
    const motionOff = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "off";
    const sync = () => (visible && !motionOff() ? v.play().catch(() => {}) : v.pause());

    const io = new IntersectionObserver(
      ([e]) => { visible = e.isIntersecting; sync(); },
      { rootMargin: "200px 0px", threshold: 0.2 }
    );
    io.observe(v);
    const mo = new MutationObserver(sync); // reacts to the footer "Motion" switch
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <video ref={ref} className={className} poster={poster} autoPlay muted loop playsInline preload="none" aria-label={label}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
