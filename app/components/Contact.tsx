import { T } from "@/lib/i18n";

const PHONE_DISPLAY = "+98 920 670 0126";
const PHONE_HREF = "tel:+989206700126";
const TELEGRAM_URL = "https://t.me/yasernami";
const INSTAGRAM_URL = "https://instagram.com/yasernamii";

const CSS = `
.ct{position:relative;overflow:hidden;border-top:1px solid var(--line);padding-block:clamp(72px,10vw,120px);isolation:isolate;}
.ct::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;
  background:radial-gradient(ellipse 55% 70% at 85% 45%,rgba(0,66,255,.22),transparent 70%);}
.ct-grid{position:absolute;inset:0;z-index:-1;pointer-events:none;
  background-image:linear-gradient(rgba(0,66,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,66,255,.07) 1px,transparent 1px);
  background-size:96px 96px;
  -webkit-mask-image:radial-gradient(ellipse 75% 65% at 50% 50%,#000,transparent);
  mask-image:radial-gradient(ellipse 75% 65% at 50% 50%,#000,transparent);}
.ct-inner{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(36px,6vw,88px);align-items:center;}
.ct-eyebrow{display:inline-flex;align-items:center;gap:.7em;color:var(--accent-2);font-size:.92rem;font-weight:500;}
.ct-eyebrow::before{content:"";width:28px;height:1px;background:var(--accent);}
.ct-title{margin-top:.6em;font-size:clamp(2rem,4.6vw,3.4rem);font-weight:800;line-height:1.3;letter-spacing:0;}
.ct-lead{margin-top:1.2rem;max-width:44ch;color:var(--muted);font-size:clamp(1rem,1.5vw,1.125rem);line-height:1.9;}
.ct-card{position:relative;border-radius:22px;padding:clamp(12px,1.6vw,18px);
  background:rgba(255,255,255,.05);backdrop-filter:blur(18px) saturate(160%);-webkit-backdrop-filter:blur(18px) saturate(160%);
  border:1px solid rgba(255,255,255,.14);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 30px 70px -30px rgba(0,66,255,.45);}
.ct-list{display:flex;flex-direction:column;gap:10px;margin:0;padding:0;list-style:none;}
.ct-link{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;
  padding:16px 18px;border-radius:16px;text-decoration:none;color:var(--text);
  background:rgba(10,14,28,.45);border:1px solid rgba(255,255,255,.08);
  transition:border-color .25s,background .25s,box-shadow .25s;}
.ct-link:hover,.ct-link:focus-visible{border-color:rgba(0,66,255,.85);background:rgba(0,66,255,.12);
  box-shadow:0 0 30px -10px rgba(0,66,255,.7);}
.ct-ico{width:46px;height:46px;border-radius:14px;display:grid;place-items:center;
  background:rgba(0,66,255,.18);border:1px solid rgba(0,66,255,.45);color:var(--accent-2);}
.ct-ico svg{width:22px;height:22px;}
.ct-meta{display:flex;flex-direction:column;gap:2px;min-width:0;}
.ct-label{font-size:.78rem;color:var(--muted);letter-spacing:.02em;}
.ct-value{font-size:1.05rem;font-weight:700;direction:ltr;text-align:start;unicode-bidi:plaintext;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.ct-arrow{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;color:var(--muted);transition:transform .25s,color .25s;}
.ct-arrow svg{width:16px;height:16px;}
.ct-link:hover .ct-arrow{color:var(--accent-2);transform:translateX(-3px);}
html[dir="ltr"] .ct-link:hover .ct-arrow{transform:translateX(3px);}
@media (max-width:860px){.ct-inner{grid-template-columns:1fr;}}
@media (max-width:420px){.ct-link{grid-template-columns:auto 1fr;}.ct-arrow{display:none;}}
`;

const Icon = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  telegram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 4.3 18.5 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.5.5-1 .5l.3-4.7L18 6.9c.4-.3-.1-.5-.6-.2L7 13.2 2.4 11.8c-1-.3-1-1 .2-1.5L20 3.6c.8-.3 1.6.2 1.6.7z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
};

export function Contact() {
  return (
    <section className="ct" id="contact">
      <div className="ct-grid" aria-hidden="true" />
      <div className="wrap ct-inner">
        <div className="reveal">
          <T as="p" className="ct-eyebrow" fa="تماس" en="Contact" />
          <T
            as="h2"
            className="ct-title"
            html
            fa="بیایید پروژه‌ی<br>بعدی رو شروع کنیم."
            en="Let's start your<br>next project."
          />
          <T
            as="p"
            className="ct-lead"
            fa="برای طراحی رابط کاربری، هویت بصری، پست و بنر، موشن‌گرافیک یا تدوین ویدیو پیام بدید. معمولاً در کوتاه‌ترین زمان جواب می‌دم."
            en="Message me for UI/UX design, visual identity, social posts and banners, motion graphics or video editing. I usually reply as soon as possible."
          />
        </div>

        <div className="ct-card reveal">
          <ul className="ct-list">
            <li>
              <a className="ct-link" href={PHONE_HREF}>
                <span className="ct-ico">{Icon.phone}</span>
                <span className="ct-meta">
                  <T as="span" className="ct-label" fa="شماره تماس" en="Phone" />
                  <span className="ct-value">{PHONE_DISPLAY}</span>
                </span>
                <span className="ct-arrow">{Icon.arrow}</span>
              </a>
            </li>
            <li>
              <a className="ct-link" href={TELEGRAM_URL} target="_blank" rel="noopener">
                <span className="ct-ico">{Icon.telegram}</span>
                <span className="ct-meta">
                  <T as="span" className="ct-label" fa="تلگرام" en="Telegram" />
                  <span className="ct-value">@yasernami</span>
                </span>
                <span className="ct-arrow">{Icon.arrow}</span>
              </a>
            </li>
            <li>
              <a className="ct-link" href={INSTAGRAM_URL} target="_blank" rel="noopener">
                <span className="ct-ico">{Icon.instagram}</span>
                <span className="ct-meta">
                  <T as="span" className="ct-label" fa="اینستاگرام" en="Instagram" />
                  <span className="ct-value">@yasernamii</span>
                </span>
                <span className="ct-arrow">{Icon.arrow}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style>{CSS}</style>
    </section>
  );
}
