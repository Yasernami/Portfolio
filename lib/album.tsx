"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type AlbumPayload = {
  title: string;
  alt: string;
  slides: string[];
};

type AlbumContextValue = {
  openAlbum: (payload: AlbumPayload) => void;
  closeAlbum: () => void;
};

const AlbumContext = createContext<AlbumContextValue | null>(null);

export function useAlbum() {
  const ctx = useContext(AlbumContext);
  if (!ctx) throw new Error("useAlbum must be used within AlbumProvider");
  return ctx;
}

export function AlbumProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [alt, setAlt] = useState("");
  const [slides, setSlides] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [target, setTarget] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const closeAlbum = useCallback(() => {
    setOpen(false);
    setSlides([]);
    setCurrent(0);
    setTarget(0);
  }, []);

  const openAlbum = useCallback((payload: AlbumPayload) => {
    setTitle(payload.title);
    setAlt(payload.alt);
    setSlides(payload.slides);
    setCurrent(0);
    setTarget(0);
    setOpen(true);
    requestAnimationFrame(() => {
      if (trackRef.current) trackRef.current.scrollLeft = 0;
    });
  }, []);

  const dirSign = useCallback(
    () => (document.documentElement.dir === "rtl" ? -1 : 1),
    [],
  );

  const goTo = useCallback(
    (i: number) => {
      if (i < 0 || i >= slides.length) return;
      const track = trackRef.current;
      if (!track) return;
      setTarget(i);
      setCurrent(i);
      track.scrollTo({ left: dirSign() * i * track.clientWidth, behavior: "auto" });
    },
    [dirSign, slides.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAlbum();
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(target + dirSign());
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(target - dirSign());
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeAlbum, goTo, target, dirSign]);

  const value = useMemo(() => ({ openAlbum, closeAlbum }), [openAlbum, closeAlbum]);

  return (
    <AlbumContext.Provider value={value}>
      {children}
      <div
        className={`album${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Project album"
        aria-hidden={!open}
      >
        <div className="album-top">
          <b>{title}</b>
          <span className="album-count">
            {slides.length ? `${current + 1} / ${slides.length}` : ""}
          </span>
          <button className="album-close" type="button" aria-label="Close" onClick={closeAlbum}>
            ✕
          </button>
        </div>
        <div
          className="album-track"
          ref={trackRef}
          onScroll={() => {
            const track = trackRef.current;
            if (!track) return;
            const i = Math.round(Math.abs(track.scrollLeft) / track.clientWidth);
            if (i !== current) setCurrent(i);
          }}
        >
          {slides.map((src, k) => (
            <div className="album-slide" key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${alt} — slide ${k + 1}`} />
            </div>
          ))}
        </div>
        <button
          className="album-nav prev"
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(target - 1)}
          style={{ visibility: current > 0 ? "visible" : "hidden" }}
        >
          ‹
        </button>
        <button
          className="album-nav next"
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(target + 1)}
          style={{ visibility: current < slides.length - 1 ? "visible" : "hidden" }}
        >
          ›
        </button>
        <div className="album-dots">
          {slides.map((src, k) => (
            <button
              key={src}
              type="button"
              aria-label={`Go to slide ${k + 1}`}
              aria-current={k === current ? "true" : undefined}
              onClick={() => goTo(k)}
            />
          ))}
        </div>
      </div>
    </AlbumContext.Provider>
  );
}
