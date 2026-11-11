"use client";

import { useEffect, useRef } from "react";
import { socialPosts } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { T } from "@/lib/i18n";

export function SocialRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    const block = blockRef.current;
    if (!rail || !track || !block) return;

    const originals = Array.from(track.children) as HTMLElement[];
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SPEED = reduce ? 0 : 46;
    let period = 0;
    let pos = 0;
    let last = 0;
    let hoverPaused = false;
    let dragging = false;
    let touchPaused = false;
    let visible = true;
    let startX = 0;
    let startPos = 0;
    let moved = 0;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    let raf = 0;
    let rt: ReturnType<typeof setTimeout> | null = null;

    function norm() {
      if (!period) return;
      pos = ((pos % period) + period) % period;
    }
    function paint() {
      track!.style.transform = `translate3d(${-pos}px,0,0)`;
    }
    function build() {
      track!.querySelectorAll("[data-clone]").forEach((n) => n.remove());
      const gap = parseFloat(getComputedStyle(track!).columnGap) || 0;
      period = originals.reduce((w, c) => w + c.getBoundingClientRect().width + gap, 0);
      if (!period) return;
      const copies = Math.ceil(rail!.clientWidth / period) + 1;
      for (let k = 0; k < copies; k++) {
        originals.forEach((card) => {
          const clone = card.cloneNode(true) as HTMLElement;
          clone.setAttribute("data-clone", "1");
          clone.setAttribute("aria-hidden", "true");
          clone.setAttribute("tabindex", "-1");
          clone.classList.remove("reveal");
          clone.classList.add("in");
          clone.addEventListener("click", () => card.click());
          track!.appendChild(clone);
        });
      }
      norm();
      paint();
    }
    function frame(t: number) {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      if (visible && !hoverPaused && !dragging && !touchPaused) {
        pos += SPEED * dt;
        norm();
        paint();
      }
      raf = requestAnimationFrame(frame);
    }

    track.style.willChange = "transform";
    rail.style.overflow = "hidden";
    rail.style.touchAction = "pan-y";
    build();
    raf = requestAnimationFrame(frame);

    const onResize = () => {
      if (rt) clearTimeout(rt);
      rt = setTimeout(build, 150);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("load", build);
    if (document.fonts?.ready) document.fonts.ready.then(build);
    originals.forEach((c) => {
      const im = c.querySelector("img");
      if (im && !im.complete) im.addEventListener("load", build);
    });

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (en) => {
          visible = en[0]?.isIntersecting ?? true;
        },
        { rootMargin: "200px" },
      );
      io.observe(rail);
    }

    const onEnter = () => {
      hoverPaused = true;
    };
    const onLeave = () => {
      hoverPaused = false;
    };
    block.addEventListener("mouseenter", onEnter);
    block.addEventListener("mouseleave", onLeave);

    const onDown = (e: PointerEvent) => {
      moved = 0;
      startX = e.clientX;
      startPos = pos;
      if (resumeTimer) clearTimeout(resumeTimer);
      touchPaused = true;
      dragging = true;
      rail.classList.add("dragging");
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      moved = Math.max(moved, Math.abs(e.clientX - startX));
      pos = startPos - (e.clientX - startX);
      norm();
      paint();
    };
    const release = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      rail.classList.remove("dragging");
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(
        () => {
          touchPaused = false;
        },
        e.pointerType === "mouse" ? 0 : 1200,
      );
    };
    const onClickCapture = (e: MouseEvent) => {
      if (moved > 6) {
        e.stopPropagation();
        e.preventDefault();
        moved = 0;
      }
    };

    rail.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    rail.addEventListener("click", onClickCapture, true);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", build);
      block.removeEventListener("mouseenter", onEnter);
      block.removeEventListener("mouseleave", onLeave);
      rail.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      rail.removeEventListener("click", onClickCapture, true);
      io?.disconnect();
      if (rt) clearTimeout(rt);
      if (resumeTimer) clearTimeout(resumeTimer);
    };
  }, []);

  return (
    <div className="social-block" ref={blockRef}>
      <div className="cat-head reveal">
        <T as="h3" className="cat-title" fa="پست شبکه‌های اجتماعی" en="Social Posts" />
        <T as="span" className="mono" fa="۰۵ پست" en="05 posts" />
      </div>
      <div className="social-rail" ref={railRef}>
        <div className="social-track" ref={trackRef}>
          {socialPosts.map((post) => (
            <ProjectCard
              key={post.id}
              className="social-card"
              brand={post.brand}
              project={{
                id: post.id,
                title: post.title,
                index: post.index,
                slides: post.slides,
                alt: post.alt,
                cover: post.cover,
                coverWidth: 1080,
                coverHeight: 1920,
                name: post.brand,
                descFa: post.descFa,
                descEn: post.descEn,
                tagFa: "پست شبکه‌های اجتماعی",
                tagEn: "Social Post",
                wrapInfo: true,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
