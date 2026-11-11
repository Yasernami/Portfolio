import { T } from "@/lib/i18n";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-cube" aria-hidden="true" />
      <div className="deco plane" style={{ bottom: -40 }} aria-hidden="true" />
      <div className="deco ring" style={{ bottom: 40, left: "8%" }} aria-hidden="true" />
      <div
        className="deco cube"
        style={{ top: 80, left: "6%", width: 54, height: 54 }}
        aria-hidden="true"
      >
        <div className="a" />
        <div className="b" />
        <div className="c" />
        <div className="d" />
        <div className="e" />
        <div className="f" />
      </div>
      <div className="wrap section" style={{ paddingBlock: "clamp(60px,9vw,110px)" }}>
        <T as="p" className="mono reveal" fa="تماس" en="Contact" />
        <T
          as="h2"
          className="contact-big reveal"
          style={{ marginTop: ".8rem" }}
          html
          fa="بیایید با هم<br><em>چیزی</em><br>بسازیم."
          en="Let's build<br><em>something</em><br>together."
        />
        <div className="contact-row reveal">
          <a
            className="btn btn-solid"
            href="https://t.me/yasernami"
            target="_blank"
            rel="noopener"
          >
            <T fa="تلگرام · @yasernami" en="Telegram · @yasernami" />
          </a>
          <a
            className="btn btn-line"
            href="https://instagram.com/yasernamii"
            target="_blank"
            rel="noopener"
          >
            <T fa="اینستاگرام · @yasernamii" en="Instagram · @yasernamii" />
          </a>
        </div>
      </div>
    </section>
  );
}
