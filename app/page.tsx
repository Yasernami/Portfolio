import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Strip } from "./components/Strip";
import { UiProjects } from "./components/UiProjects";
import { Graphic } from "./components/Graphic";
import { Tools } from "./components/Tools";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LangToggle } from "./components/LangToggle";
import { Effects } from "./components/Effects";
import { Sound } from "./components/Sound";

export default function HomePage() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="blobs" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <div className="spot" id="spot" aria-hidden="true" />

      <Header />

      <main id="top">
        <Hero />
        <Strip />
        <UiProjects />
        <Graphic />
        <Tools />
        <Contact />
      </main>

      <Footer />
      <LangToggle />
      <Effects />
      <Sound />
    </>
  );
}
