"use client";

import { useState } from "react";
import { T } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="topbar">
      <div className="wrap">
        <a className="brand" href="#top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src="/ig/logo.png" alt="" width={22} height={35} />
          <T as="span" fa="یاسر نامی" en="YASER NAMI" />
        </a>
        <ul className="nav">
          <li>
            <a href="#ui">
              <T fa="UI/UX" en="UI/UX" />
            </a>
          </li>
          <li>
            <a href="#graphic">
              <T fa="گرافیک" en="Graphic" />
            </a>
          </li>
          <li>
            <a href="#tools">
              <T fa="ابزارها" en="Tools" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <T fa="تماس" en="Contact" />
            </a>
          </li>
        </ul>
        <a
          className="btn btn-solid btn-sm"
          href="https://t.me/yasernami"
          target="_blank"
          rel="noopener"
        >
          <T fa="استخدام من" en="Hire me" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path
              d="M2 4.5H16M2 9H16M2 13.5H16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        <a href="#ui" onClick={close}>
          <T fa="UI/UX" en="UI/UX" />
        </a>
        <a href="#graphic" onClick={close}>
          <T fa="گرافیک" en="Graphic" />
        </a>
        <a href="#tools" onClick={close}>
          <T fa="ابزارها" en="Tools" />
        </a>
        <a href="#contact" onClick={close}>
          <T fa="تماس" en="Contact" />
        </a>
        <a href="https://t.me/yasernami" target="_blank" rel="noopener" onClick={close}>
          <T fa="تلگرام ↗" en="Telegram ↗" />
        </a>
      </div>
    </header>
  );
}
