"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  "a, button, .btn, .project, .social-card, .tool, .tab, .lang-toggle, .ct-link, .service, .gslot, .card";
const STORAGE_KEY = "yn-sound";

const CSS = `
.snd-toggle{position:fixed;right:20px;bottom:20px;z-index:90;width:44px;height:44px;border-radius:50%;
  display:grid;place-items:center;cursor:pointer;color:var(--text);
  background:rgba(10,14,28,.5);backdrop-filter:blur(16px) saturate(160%);-webkit-backdrop-filter:blur(16px) saturate(160%);
  border:1px solid rgba(255,255,255,.2);box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 12px 30px -10px rgba(0,66,255,.6);
  transition:border-color .2s,transform .2s;}
.snd-toggle:hover{border-color:rgba(0,66,255,.9);transform:translateY(-2px);}
.snd-toggle:focus-visible{outline:2px solid var(--accent-2);outline-offset:3px;}
.snd-toggle svg{width:20px;height:20px;}
.snd-toggle .wave{transition:opacity .2s;}
.snd-toggle[aria-pressed="false"] .wave{opacity:0;}
`;

type Ctx = AudioContext;

export function Sound() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<Ctx | null>(null);
  const onRef = useRef(false);
  const lastHover = useRef(0);
  const lastEl = useRef<Element | null>(null);

  // restore preference (default: off)
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (saved === "on") {
      onRef.current = true;
      setOn(true);
    }
  }, []);

  useEffect(() => {
    onRef.current = on;
    try {
      localStorage.setItem(STORAGE_KEY, on ? "on" : "off");
    } catch {
      /* ignore */
    }
  }, [on]);

  // audio helpers: created lazily, after a user gesture
  useEffect(() => {
    const getCtx = (): AudioContext | null => {
      if (!ctxRef.current) {
        const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AC) return null;
        ctxRef.current = new AC();
      }
      if (ctxRef.current.state === "suspended") void ctxRef.current.resume();
      return ctxRef.current;
    };

    const tone = (
      freq: number,
      toFreq: number,
      dur: number,
      gain: number,
      type: OscillatorType = "sine"
    ) => {
      const ctx = getCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(Math.max(toFreq, 20), now + dur);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(gain, now + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      osc.connect(g).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.02);
    };

    const playHover = () => tone(1500, 1900, 0.06, 0.018, "sine");
    const playClick = () => {
      tone(640, 420, 0.13, 0.07, "triangle");
      tone(1320, 1000, 0.07, 0.025, "sine");
    };

    const onOver = (e: PointerEvent) => {
      if (!onRef.current || e.pointerType !== "mouse") return;
      const el = (e.target as Element | null)?.closest?.(HOVER_SELECTOR) ?? null;
      if (!el || el === lastEl.current) return;
      lastEl.current = el;
      const now = performance.now();
      if (now - lastHover.current < 90) return;
      lastHover.current = now;
      playHover();
    };
    const onOut = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(HOVER_SELECTOR) ?? null;
      if (el && el === lastEl.current) lastEl.current = null;
    };
    const onDown = (e: PointerEvent) => {
      if (!onRef.current) return;
      const el = (e.target as Element | null)?.closest?.(HOVER_SELECTOR);
      if (el) playClick();
    };

    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("pointerdown", onDown);
    };
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    if (next) {
      // confirmation tone (this click is a user gesture, so audio can start)
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AC) {
        if (!ctxRef.current) ctxRef.current = new AC();
        const ctx = ctxRef.current;
        if (ctx.state === "suspended") void ctx.resume();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.frequency.setValueAtTime(700, now);
        osc.frequency.exponentialRampToValueAtTime(1100, now + 0.12);
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(0.07, now + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
        osc.connect(g).connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.16);
      }
    }
  };

  return (
    <>
      <button
        type="button"
        className="snd-toggle"
        onClick={toggle}
        aria-pressed={on}
        aria-label={on ? "Mute sound effects" : "Enable sound effects"}
        title={on ? "Sound on" : "Sound off"}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor" stroke="none" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" className="wave" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" className="wave" />
          {!on && <path d="M16 9l5 6M21 9l-5 6" />}
        </svg>
      </button>
      <style>{CSS}</style>
    </>
  );
}
