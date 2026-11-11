"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { stripItems } from "@/lib/projects";

export function Strip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const rail = track.parentElement;
    if (!rail) return;

    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SPEED = reduce ? 0 : 70;
    let period = 0;
    let pos = 0;
    let last = 0;
    let dir = -1;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;

    track.style.direction = "ltr";
    rail.style.direction = "ltr";
    track.style.animation = "none";

    function makeGroup() {
      const g = document.createElement("div");
      g.className = "strip-group";
      stripItems.forEach((item) => {
        const span = document.createElement("span");
        span.textContent = lang === "fa" ? item.fa : item.en;
        g.appendChild(span);
      });
      return g;
    }

    function paint() {
      if (!period) return;
      pos = ((pos % period) + period) % period;
      const x = dir < 0 ? -pos : pos - period;
      track!.style.transform = `translate3d(${x}px,0,0)`;
    }

    function build() {
      track!.innerHTML = "";
      const probe = makeGroup();
      track!.appendChild(probe);
      period = probe.getBoundingClientRect().width;
      if (!period) return;
      const need = Math.ceil(rail!.clientWidth / period) + 2;
      for (let i = 1; i < need; i++) {
        const g = makeGroup();
        g.setAttribute("aria-hidden", "true");
        track!.appendChild(g);
      }
      dir = document.documentElement.dir === "rtl" ? 1 : -1;
      paint();
    }

    function frame(t: number) {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      pos += SPEED * dt;
      paint();
      raf = requestAnimationFrame(frame);
    }

    function later() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(build, 120);
    }

    build();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", later);
    window.addEventListener("load", later);
    if (document.fonts?.ready) document.fonts.ready.then(later);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", later);
      window.removeEventListener("load", later);
      if (timer) clearTimeout(timer);
    };
  }, [lang]);

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track" ref={trackRef}>
        <div className="strip-group">
          {stripItems.map((item) => (
            <span key={item.en}>{lang === "fa" ? item.fa : item.en}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
