export type ProjectSlug = "alpha" | "beta" | "gamma";

export type Project = {
  slug: ProjectSlug;
  title: string;
  eyebrow: string;
  summary: string;
  path: string;
  role: string;
  year: string;
  status: string;
  impact: string;
  stack: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
  highlights: string[];
  decisions: string[];
  timeline: Array<{
    phase: string;
    detail: string;
  }>;
};

export const projects: Project[] = [
  {
    slug: "alpha",
    title: "Project Alpha",
    eyebrow: "Editorial platform",
    summary:
      "A publishing workflow for technical teams that keeps drafts, review states, and distribution notes visible in one calm workspace.",
    path: "/portfolio/alpha",
    role: "Product design, frontend architecture",
    year: "2026",
    status: "Shipped concept",
    impact: "Reduced handoff drift across content, design, and engineering.",
    stack: ["Next.js", "React", "TypeScript", "Markdown"],
    metrics: [
      { label: "Review states", value: "6" },
      { label: "Draft views", value: "3" },
      { label: "Setup time", value: "12m" },
    ],
    highlights: [
      "Structured review lanes for draft, fact check, legal, and launch readiness.",
      "Reusable article templates with frontmatter validation and publishing notes.",
      "Compact editorial dashboard designed for repeated daily use.",
    ],
    decisions: [
      "Kept status changes close to the content preview instead of hiding them in a modal.",
      "Used restrained color only for review risk and launch readiness.",
      "Prioritized dense summaries over marketing-style project pages.",
    ],
    timeline: [
      {
        phase: "Model",
        detail:
          "Mapped the editorial workflow into states, owners, and required checks.",
      },
      {
        phase: "Prototype",
        detail: "Built article previews, validation states, and handoff notes.",
      },
      {
        phase: "Polish",
        detail:
          "Tightened spacing, review labels, and empty states for scanning.",
      },
    ],
  },
  {
    slug: "beta",
    title: "Project Beta",
    eyebrow: "Browser puzzle game",
    summary:
      "A compact puzzle interface focused on quick restarts, readable state changes, and responsive input across desktop and mobile.",
    path: "/portfolio/beta",
    role: "Game UI, interaction design",
    year: "2026",
    status: "Playable prototype",
    impact:
      "Made short-session play feel predictable without flattening the challenge.",
    stack: ["React", "TypeScript", "Canvas", "State machines"],
    metrics: [
      { label: "Board modes", value: "4" },
      { label: "Input lag", value: "<16ms" },
      { label: "Restart", value: "1 tap" },
    ],
    highlights: [
      "Clear board states for active, locked, solved, and failed moves.",
      "Keyboard and pointer flows share the same state transition model.",
      "Compact HUD keeps score, streak, and remaining moves visible.",
    ],
    decisions: [
      "Separated visual feedback from scoring so animation timing never changes rules.",
      "Kept the board square with fixed track sizing to avoid layout shifts.",
      "Designed failure states to be legible without blocking immediate retry.",
    ],
    timeline: [
      {
        phase: "Rules",
        detail:
          "Defined board states and transitions before styling the interface.",
      },
      {
        phase: "Controls",
        detail:
          "Unified keyboard, pointer, and restart behavior around one reducer.",
      },
      {
        phase: "Feedback",
        detail:
          "Added readable motion, score changes, and solved-state contrast.",
      },
    ],
  },
  {
    slug: "gamma",
    title: "Project Gamma",
    eyebrow: "Photography portfolio",
    summary:
      "A visual archive for campaign photography with tight category browsing, project notes, and image-first collection pages.",
    path: "/portfolio/gamma",
    role: "Art direction, responsive UI",
    year: "2026",
    status: "Design system",
    impact: "Turned a loose image archive into a browsable collection system.",
    stack: ["Next.js", "Tailwind CSS", "Image systems", "Metadata"],
    metrics: [
      { label: "Collections", value: "9" },
      { label: "Breakpoints", value: "5" },
      { label: "Archive tags", value: "28" },
    ],
    highlights: [
      "Image-led collection pages with compact metadata and persistent context.",
      "Responsive crop rules for portrait, landscape, and mixed campaign sets.",
      "Gallery navigation built for browsing without losing the project thread.",
    ],
    decisions: [
      "Gave each collection a stable visual rhythm instead of relying on masonry randomness.",
      "Kept metadata visible beside the work so the photography stays inspectable.",
      "Used color sparingly to separate collection types, not decorate the page.",
    ],
    timeline: [
      {
        phase: "Inventory",
        detail: "Grouped images by campaign, subject, and usage constraints.",
      },
      {
        phase: "System",
        detail:
          "Created repeatable collection layouts and responsive crop rules.",
      },
      {
        phase: "Archive",
        detail:
          "Added metadata patterns for browsing, licensing, and project notes.",
      },
    ],
  },
];

export function getProject(slug: ProjectSlug) {
  return projects.find((project) => project.slug === slug);
}
