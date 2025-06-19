import Link from "next/link";

const projects = [
  {
    title: "codex-v1",
    description: "Demo Next.js site used in examples.",
    url: "https://github.com/example/codex-v1",
  },
  {
    title: "awesome-api",
    description: "Express API for sample endpoints.",
    url: "https://github.com/example/awesome-api",
  },
  {
    title: "cli-tool",
    description: "Command line tool built with Node.js.",
    url: "https://github.com/example/cli-tool",
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex flex-col items-center gap-8 p-8 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="grid gap-4 w-full max-w-3xl">
        {projects.map((project) => (
          <li key={project.title} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Source code
            </a>
          </li>
        ))}
      </ul>
      <Link href="/" className="text-blue-600 hover:underline text-sm">
        Back to home
      </Link>
    </main>
  );
}
