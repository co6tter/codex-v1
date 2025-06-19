export const metadata = {
  title: "Portfolio",
};

interface Project {
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "Example Next.js project showcasing features.",
    url: "https://example.com/alpha",
  },
  {
    title: "Project Beta",
    description: "Another sample project using React and TypeScript.",
    url: "https://example.com/beta",
  },
  {
    title: "Project Gamma",
    description: "A creative project with Tailwind CSS styling.",
    url: "https://example.com/gamma",
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
            <a
              className="text-blue-600 hover:underline"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
