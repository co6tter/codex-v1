export const metadata = {
  title: "Portfolio",
};

import Link from "next/link";

interface Project {
  title: string;
  description: string;
  path: string;
}

const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "Blog platform built with Next.js.",
    path: "/portfolio/alpha",
  },
  {
    title: "Project Beta",
    description: "Browser-based puzzle game.",
    path: "/portfolio/beta",
  },
  {
    title: "Project Gamma",
    description: "Photography portfolio with Tailwind CSS.",
    path: "/portfolio/gamma",
  },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Portfolio</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.title} className="border p-4 rounded-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <Link href={project.path} className="text-blue-600 hover:underline">
              View project
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
