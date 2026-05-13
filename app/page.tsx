import Link from "next/link";
import ProjectVisual from "./components/ProjectVisual";
import { projects } from "./data/projects";

export const metadata = {
  title: "Home",
};

const stats = [
  { label: "Product surfaces", value: "12" },
  { label: "Reusable systems", value: "8" },
  { label: "Prototype cycles", value: "24" },
];

export default function Home() {
  const featured = projects[0];

  return (
    <div>
      <section className="border-b border-[#d5dde3] bg-[#f5f7f8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:py-16">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase text-[#2f756b]">
                Independent digital portfolio
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#17201d] sm:text-5xl">
                Product interfaces with strong structure and quiet visual
                detail.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#4f5b64]">
                Narrow Pixel collects selected product design, frontend systems,
                and interactive prototypes built for teams that need clarity
                more than decoration.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="rounded-md bg-[#17201d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2f756b]"
              >
                View work
              </Link>
              <a
                href="mailto:hello@example.com"
                className="rounded-md border border-[#c0cad1] bg-white px-4 py-3 text-sm font-semibold text-[#17201d] transition hover:border-[#2f756b]"
              >
                Start a project
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <ProjectVisual project={featured} />
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[#d5dde3] bg-white p-4"
                >
                  <p className="text-2xl font-semibold text-[#17201d]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[#5d6871]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#d5dde3] pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[#5d6871]">
              Selected work
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#17201d]">
              Three focused case studies
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-[#2f756b] hover:text-[#17201d]"
          >
            Open full index
          </Link>
        </div>

        <div className="divide-y divide-[#d5dde3]">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.path}
              className="group grid gap-6 py-8 transition hover:bg-white/55 lg:grid-cols-[0.42fr_0.58fr]"
            >
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase text-[#2f756b]">
                  {project.eyebrow}
                </p>
                <h3 className="text-2xl font-semibold text-[#17201d]">
                  {project.title}
                </h3>
                <p className="max-w-2xl leading-7 text-[#4f5b64]">
                  {project.summary}
                </p>
                <span className="inline-flex text-sm font-semibold text-[#17201d]">
                  Read case study
                </span>
              </div>
              <ProjectVisual project={project} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
