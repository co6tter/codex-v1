import Link from "next/link";
import type { Project } from "../data/projects";
import ProjectVisual from "./ProjectVisual";

type ProjectCaseStudyProps = {
  project: Project;
};

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article>
      <section className="border-b border-[#d5dde3] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:py-16">
          <div className="space-y-6">
            <Link
              href="/portfolio"
              className="inline-flex rounded-md border border-[#cfd7dd] px-3 py-2 text-sm font-semibold text-[#4f5b64] transition hover:border-[#2f756b] hover:text-[#17201d]"
            >
              Back to work
            </Link>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase text-[#2f756b]">
                {project.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#17201d] sm:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#4f5b64]">
                {project.summary}
              </p>
            </div>
          </div>
          <ProjectVisual project={project} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.34fr_0.66fr] lg:py-16">
        <aside className="space-y-8">
          <div className="border-t border-[#cfd7dd] pt-5">
            <h2 className="text-sm font-semibold uppercase text-[#5d6871]">
              Overview
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ["Role", project.role],
                ["Year", project.year],
                ["Status", project.status],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-1">
                  <dt className="font-semibold text-[#17201d]">{label}</dt>
                  <dd className="text-[#5d6871]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-[#cfd7dd] pt-5">
            <h2 className="text-sm font-semibold uppercase text-[#5d6871]">
              Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[#cfd7dd] bg-white px-3 py-1.5 text-sm font-medium text-[#4f5b64]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-12">
          <section className="border-t border-[#cfd7dd] pt-5">
            <h2 className="text-sm font-semibold uppercase text-[#5d6871]">
              Impact
            </h2>
            <p className="mt-4 max-w-3xl text-2xl font-semibold leading-9 text-[#17201d]">
              {project.impact}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-[#cfd7dd] bg-white p-5"
                >
                  <p className="text-sm font-medium text-[#5d6871]">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-[#17201d]">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-t border-[#cfd7dd] pt-5 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase text-[#5d6871]">
                Highlights
              </h2>
              <ul className="mt-5 space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="border-l-2 border-[#2f756b] pl-4 leading-7 text-[#34424a]"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase text-[#5d6871]">
                Decisions
              </h2>
              <ul className="mt-5 space-y-4">
                {project.decisions.map((decision) => (
                  <li
                    key={decision}
                    className="border-l-2 border-[#d1a23d] pl-4 leading-7 text-[#34424a]"
                  >
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-t border-[#cfd7dd] pt-5">
            <h2 className="text-sm font-semibold uppercase text-[#5d6871]">
              Timeline
            </h2>
            <div className="mt-5 divide-y divide-[#d5dde3] border-y border-[#d5dde3]">
              {project.timeline.map((item) => (
                <div
                  key={item.phase}
                  className="grid gap-3 py-5 sm:grid-cols-[0.22fr_0.78fr]"
                >
                  <h3 className="font-semibold text-[#17201d]">{item.phase}</h3>
                  <p className="leading-7 text-[#4f5b64]">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}
