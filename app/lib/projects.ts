export type Project = {
  title: string;
  description: string;
  repo: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio",
    description: "This website showcasing various projects.",
    repo: "https://github.com/example/portfolio",
  },
  {
    title: "Sample App",
    description: "A simple demonstration application built with Next.js.",
    repo: "https://github.com/example/sample-app",
  },
];
