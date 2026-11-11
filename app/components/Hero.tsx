import { T } from "@/lib/i18n";

export function Hero() {
  return (
    <section className="hero">
      <div className="floor" aria-hidden="true" />
      <div className="grid-v" aria-hidden="true" />
      <div className="orbit" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="shard s1" aria-hidden="true">
        <div className="a" />
        <div className="b" />
        <div className="c" />
        <div className="d" />
        <div className="e" />
        <div className="f" />
      </div>
      <div className="wrap hero-grid">
        <div>
          <T as="p" className="mono" fa="پورتفولیو — ۲۰۲۶" en="Portfolio — 2026" />
          <h1 className="hero-title" style={{ marginTop: ".8rem" }}>
            <T as="span" fa="یاسر" en="Yaser" />
            <T as="span" className="outline" fa="نامی" en="Nami" />
          </h1>
          <div className="hero-role">
            <T as="span" html fa="<b>۰۱</b>UI/UX" en="<b>01</b>UI/UX" />
            <T as="span" html fa="<b>۰۲</b>گرافیک" en="<b>02</b>Graphic" />
            <T as="span" html fa="<b>۰۳</b>موشن" en="<b>03</b>Motion" />
            <T as="span" html fa="<b>۰۴</b>ویدیو" en="<b>04</b>Video" />
          </div>
          <T
            as="p"
            className="hero-bio"
            fa="من رابط کاربری اپ و وب‌سایت طراحی می‌کنم، و کنارش هویت بصری، پوستر، محتوای شبکه‌های اجتماعی و موشن‌گرافیک. از اسکیس اولیه تا محصولی که مردم واقعاً استفاده می‌کنن."
            en="I design interfaces for apps and websites, and the visual identity, posters, social content and motion graphics around them. From the first sketch to a finished product people actually use."
          />
          <div className="hero-actions">
            <a
              className="btn btn-solid"
              href="https://t.me/yasernami"
              target="_blank"
              rel="noopener"
            >
              <T fa="شروع یک پروژه" en="Start a project" />
            </a>
            <a className="btn btn-line" href="#ui">
              <T fa="دیدن نمونه‌کارها" en="View work" />
            </a>
          </div>
        </div>

        <div className="scene" id="scene">
          <div className="portrait" id="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width={900}
              height={900}
              decoding="async"
              fetchPriority="high"
              className="cutout"
              src="/ig/yaser-cutout.webp"
              alt="Portrait of Yaser Nami"
            />
            <div className="ring" />
          </div>
        </div>
      </div>
    </section>
  );
}
