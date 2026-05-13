export const metadata = {
  title: "Portfolio",
};

import Link from "next/link";
import ProjectVisual from "../components/ProjectVisual";
import { projects } from "../data/projects";

export default function PortfolioPage() {
  return (
    <div>
      <section className="border-b border-[#d5dde3] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase text-[#2f756b]">
            Work index
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.7fr_0.3fr]">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#17201d] sm:text-5xl">
              A compact archive of systems, prototypes, and visual product work.
            </h1>
            <p className="leading-7 text-[#4f5b64]">
              Each project focuses on a different product surface: publishing
              operations, game interaction, and image-led collection design.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
        <ul className="divide-y divide-[#d5dde3] border-y border-[#d5dde3]">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={project.path}
              className="grid gap-6 py-8 transition hover:bg-white/70 lg:grid-cols-[0.36fr_0.3fr_0.34fr] lg:items-center"
            >
              <ProjectVisual project={project} />
              <div>
                <p className="text-sm font-semibold uppercase text-[#2f756b]">
                  {project.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#17201d]">
                  {project.title}
                </h2>
                <p className="mt-4 leading-7 text-[#4f5b64]">
                  {project.summary}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-2xl font-semibold text-[#17201d]">
                      {metric.value}
                    </p>
                    <p className="text-sm text-[#5d6871]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      </section>
    </div>
  );
}
