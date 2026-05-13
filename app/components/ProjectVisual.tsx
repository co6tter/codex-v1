import type { Project } from "../data/projects";

type ProjectVisualProps = {
  project: Pick<Project, "slug" | "title" | "eyebrow">;
};

const visualShell: Record<Project["slug"], string> = {
  alpha: "bg-[#eef5f2]",
  beta: "bg-[#f3f5fb]",
  gamma: "bg-[#f8f3ed]",
};

export default function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <div
      className={`relative aspect-16/10 overflow-hidden rounded-lg border border-[#cfd7dd] ${visualShell[project.slug]}`}
      aria-label={`${project.title} visual preview`}
    >
      <div className="absolute inset-x-0 top-0 flex h-10 items-center gap-2 border-b border-[#cfd7dd] bg-white/75 px-4">
        <span className="h-2.5 w-2.5 rounded-sm bg-[#ce5d4b]" />
        <span className="h-2.5 w-2.5 rounded-sm bg-[#d1a23d]" />
        <span className="h-2.5 w-2.5 rounded-sm bg-[#2f756b]" />
        <span className="ml-3 text-xs font-medium text-[#5d6871]">
          {project.eyebrow}
        </span>
      </div>
      {project.slug === "alpha" ? <AlphaVisual /> : null}
      {project.slug === "beta" ? <BetaVisual /> : null}
      {project.slug === "gamma" ? <GammaVisual /> : null}
    </div>
  );
}

function AlphaVisual() {
  return (
    <div className="grid h-full grid-cols-[0.82fr_1.18fr] gap-4 px-5 pb-5 pt-14">
      <div className="space-y-3">
        {["Draft", "Review", "Ready"].map((label, index) => (
          <div
            key={label}
            className="rounded-md border border-[#c4d1d0] bg-white p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#20332f]">
                {label}
              </span>
              <span className="h-2 w-8 rounded-sm bg-[#2f756b]" />
            </div>
            <div className="mt-3 space-y-2">
              <span className="block h-2 rounded-sm bg-[#dbe6e4]" />
              <span
                className={`block h-2 rounded-sm bg-[#dbe6e4] ${
                  index === 1 ? "w-4/5" : "w-2/3"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-md border border-[#c4d1d0] bg-[#fbfdfc] p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#20332f]">
            Launch brief
          </span>
          <span className="rounded-sm bg-[#d1a23d] px-2 py-1 text-xs font-semibold text-white">
            82%
          </span>
        </div>
        <div className="space-y-2">
          <span className="block h-3 rounded-sm bg-[#2f756b]" />
          <span className="block h-3 w-11/12 rounded-sm bg-[#dbe6e4]" />
          <span className="block h-3 w-4/5 rounded-sm bg-[#dbe6e4]" />
          <span className="block h-24 rounded-md bg-[#edf4f2]" />
        </div>
      </div>
    </div>
  );
}

function BetaVisual() {
  const cells = [
    "bg-[#335c9d]",
    "bg-[#d1a23d]",
    "bg-white",
    "bg-[#335c9d]",
    "bg-white",
    "bg-[#ce5d4b]",
    "bg-[#d1a23d]",
    "bg-white",
    "bg-[#20332f]",
  ];

  return (
    <div className="grid h-full grid-cols-[1fr_0.62fr] gap-5 px-5 pb-5 pt-14">
      <div className="grid aspect-square grid-cols-3 gap-2 self-center">
        {cells.map((cell, index) => (
          <span
            key={`${cell}-${index}`}
            className={`rounded-md border border-[#cfd7dd] ${cell}`}
          />
        ))}
      </div>
      <div className="space-y-3 self-center">
        <div className="rounded-md border border-[#cfd7dd] bg-white p-3">
          <span className="text-xs font-semibold text-[#5d6871]">Streak</span>
          <strong className="mt-1 block text-3xl text-[#20332f]">14</strong>
        </div>
        <div className="rounded-md border border-[#cfd7dd] bg-white p-3">
          <span className="text-xs font-semibold text-[#5d6871]">
            Moves left
          </span>
          <strong className="mt-1 block text-3xl text-[#20332f]">08</strong>
        </div>
      </div>
    </div>
  );
}

function GammaVisual() {
  return (
    <div className="grid h-full grid-cols-[0.75fr_1.25fr] gap-3 px-5 pb-5 pt-14">
      <div className="grid gap-3">
        <span className="rounded-md bg-[#20332f]" />
        <span className="rounded-md bg-[#ce5d4b]" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <span className="rounded-md bg-[#d1a23d]" />
        <span className="rounded-md bg-[#e4ddd4]" />
        <span className="col-span-2 rounded-md bg-[#2f756b]" />
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-[#d8d0c7] pt-3 text-xs font-semibold text-[#5d4d43]">
        <span>Archive</span>
        <span>Campaign 03</span>
      </div>
    </div>
  );
}
