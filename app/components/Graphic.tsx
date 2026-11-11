import { T } from "@/lib/i18n";
import { SocialRail } from "./SocialRail";

export function Graphic() {
  return (
    <section className="section" id="graphic" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="deco plane" aria-hidden="true" />
      <div className="deco-glow" style={{ top: -80, right: -60 }} aria-hidden="true" />
      <div className="wrap">
        <div className="section-head reveal">
          <T as="h2" fa="طراحی گرافیک" en="Graphic Design" />
          <T as="p" className="mono" fa="پوستر · پست · بنر" en="Posters · Social · Banners" />
        </div>

        <SocialRail />

        <div className="cat-head reveal" style={{ marginTop: "clamp(40px,6vw,64px)" }}>
          <T as="h3" className="cat-title" fa="پوستر" en="Posters" />
          <T as="span" className="mono" fa="به‌زودی" en="Coming soon" />
        </div>
        <div className="graphic-grid">
          <div className="gslot big reveal">
            <div className="glow-orb" aria-hidden="true" />
            <div className="dots dots-fill" />
            <T as="span" className="sticker" fa="پوستر" en="Poster" />
            <div>
              <T as="span" className="mono" fa="۰۱ — پوستر" en="01 — Poster" />
              <T
                as="h3"
                style={{ marginTop: ".6rem" }}
                html
                fa="به‌زودی"
                en="Coming<br>soon"
              />
            </div>
            <T
              as="p"
              fa="پوستر، ویژوال رویداد و کمپین."
              en="Posters, event and campaign visuals."
            />
          </div>
          <div className="gslot reveal">
            <div className="glow-orb" aria-hidden="true" />
            <T as="span" className="sticker" fa="بنر" en="Banner" />
            <div>
              <T as="span" className="mono" fa="۰۳ — بنر" en="03 — Banner" />
              <T as="h3" style={{ marginTop: ".6rem" }} fa="بنرها" en="Banners" />
            </div>
            <T as="p" fa="بنر وب و تبلیغاتی." en="Web and ad banners." />
          </div>
        </div>
      </div>
    </section>
  );
}
