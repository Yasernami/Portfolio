"use client";

import { useLang } from "@/lib/i18n";

const IRAN = (
  <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="30" height="6.7" fill="#239f40" />
    <rect y="6.7" width="30" height="6.6" fill="#ffffff" />
    <rect y="13.3" width="30" height="6.7" fill="#da0000" />
    <circle cx="15" cy="10" r="2.1" fill="none" stroke="#da0000" strokeWidth="0.7" />
    <circle cx="15" cy="10" r="0.9" fill="#da0000" />
  </svg>
);

const USA = (
  <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect y="0" width="30" height="1.538" fill="#b22234" />
    <rect y="1.538" width="30" height="1.538" fill="#ffffff" />
    <rect y="3.077" width="30" height="1.538" fill="#b22234" />
    <rect y="4.615" width="30" height="1.538" fill="#ffffff" />
    <rect y="6.154" width="30" height="1.538" fill="#b22234" />
    <rect y="7.692" width="30" height="1.538" fill="#ffffff" />
    <rect y="9.231" width="30" height="1.538" fill="#b22234" />
    <rect y="10.769" width="30" height="1.538" fill="#ffffff" />
    <rect y="12.308" width="30" height="1.538" fill="#b22234" />
    <rect y="13.846" width="30" height="1.538" fill="#ffffff" />
    <rect y="15.385" width="30" height="1.538" fill="#b22234" />
    <rect y="16.923" width="30" height="1.538" fill="#ffffff" />
    <rect y="18.462" width="30" height="1.538" fill="#b22234" />
    <rect width="12" height="10.77" fill="#3c3b6e" />
    {[
      [1, 0.95],
      [2.9, 0.95],
      [4.8, 0.95],
      [6.7, 0.95],
      [8.6, 0.95],
      [10.5, 0.95],
      [1.95, 1.95],
      [3.85, 1.95],
      [5.75, 1.95],
      [7.65, 1.95],
      [9.55, 1.95],
      [1, 2.95],
      [2.9, 2.95],
      [4.8, 2.95],
      [6.7, 2.95],
      [8.6, 2.95],
      [10.5, 2.95],
      [1.95, 3.95],
      [3.85, 3.95],
      [5.75, 3.95],
      [7.65, 3.95],
      [9.55, 3.95],
      [1, 4.95],
      [2.9, 4.95],
      [4.8, 4.95],
      [6.7, 4.95],
      [8.6, 4.95],
      [10.5, 4.95],
      [1.95, 5.95],
      [3.85, 5.95],
      [5.75, 5.95],
      [7.65, 5.95],
      [9.55, 5.95],
      [1, 6.95],
      [2.9, 6.95],
      [4.8, 6.95],
      [6.7, 6.95],
      [8.6, 6.95],
      [10.5, 6.95],
      [1.95, 7.95],
      [3.85, 7.95],
      [5.75, 7.95],
      [7.65, 7.95],
      [9.55, 7.95],
      [1, 8.95],
      [2.9, 8.95],
      [4.8, 8.95],
      [6.7, 8.95],
      [8.6, 8.95],
      [10.5, 8.95],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.42" fill="#ffffff" />
    ))}
  </svg>
);

export function LangToggle() {
  const { isFa, toggle } = useLang();

  return (
    <button
      className="lang-toggle glass"
      type="button"
      aria-label={isFa ? "Switch to English" : "تغییر به فارسی"}
      onClick={toggle}
    >
      <span className="flag" aria-hidden="true">
        {isFa ? IRAN : USA}
      </span>
      <span>{isFa ? "فارسی" : "English"}</span>
    </button>
  );
}
