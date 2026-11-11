"use client";

import { T, useLang } from "@/lib/i18n";
import { useAlbum } from "@/lib/album";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  className?: string;
  brand?: string;
};

export function ProjectCard({ project, className = "", brand }: Props) {
  const { openAlbum } = useAlbum();
  const { isFa } = useLang();
  const n = project.slides.length;
  const slideLabel = isFa ? `${n} اسلاید` : `${n}${n === 1 ? " slide" : " slides"}`;

  return (
    <button
      type="button"
      className={`project reveal${className ? ` ${className}` : ""}`}
      onClick={() =>
        openAlbum({ title: project.title, alt: project.alt, slides: project.slides })
      }
    >
      <div className="project-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={project.coverWidth ?? 1080}
          height={project.coverHeight ?? 1920}
          decoding="async"
          src={project.cover}
          alt={project.alt}
          loading="lazy"
        />
      </div>
      <span className="project-index">{project.index}</span>
      <span className="slide-count" aria-hidden="true">
        {slideLabel}
      </span>
      <div className="project-info">
        {project.wrapInfo || brand ? (
          <div>
            <b>{brand ?? project.name}</b>
            <T as="span" fa={project.descFa} en={project.descEn} />
          </div>
        ) : (
          <>
            <b>{project.name}</b>
            <T as="span" fa={project.descFa} en={project.descEn} />
          </>
        )}
        <T as="span" className="mono" fa={project.tagFa} en={project.tagEn} />
      </div>
    </button>
  );
}
