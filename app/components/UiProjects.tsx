import { T } from "@/lib/i18n";
import { uiProjects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function UiProjects() {
  return (
    <section className="section" id="ui">
      <div className="deco cube" style={{ top: 60, right: "4%" }} aria-hidden="true">
        <div className="a" />
        <div className="b" />
        <div className="c" />
        <div className="d" />
        <div className="e" />
        <div className="f" />
      </div>
      <div className="deco ring" style={{ top: 120, left: -80 }} aria-hidden="true" />
      <div className="wrap">
        <div className="section-head reveal">
          <T as="h2" fa="پروژه‌های UI/UX" en="UI/UX Projects" />
          <T as="p" className="mono" fa="۰۶ نمونه‌کار منتخب" en="06 selected works" />
        </div>
        <div className="projects">
          {uiProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
