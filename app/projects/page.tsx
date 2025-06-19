import Link from "next/link";
import { projects } from "../lib/projects";

export default function Projects() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.title} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Repository
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
