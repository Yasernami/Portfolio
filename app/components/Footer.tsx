import { T } from "@/lib/i18n";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <T as="span" fa="© یاسر نامی" en="© Yaser Nami" />
        <T
          as="span"
          fa="UI/UX · گرافیک · موشن · ویدیو"
          en="UI/UX · Graphic · Motion · Video"
        />
      </div>
    </footer>
  );
}
