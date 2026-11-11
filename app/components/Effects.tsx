"use client";

import { useEffect } from "react";

export function Effects() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const spot = document.getElementById("spot");
    if (!spot) return;

    const onMove = (e: MouseEvent) => {
      spot.style.setProperty("--sx", `${e.clientX}px`);
      spot.style.setProperty("--sy", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);

    const cards = document.querySelectorAll<HTMLElement>(".project, .gslot");
    const cleanups: Array<() => void> = [];
    cards.forEach((card) => {
      const handler = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      card.addEventListener("mousemove", handler);
      cleanups.push(() => card.removeEventListener("mousemove", handler));
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
