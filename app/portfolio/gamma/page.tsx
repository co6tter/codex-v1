import { notFound } from "next/navigation";
import ProjectCaseStudy from "../../components/ProjectCaseStudy";
import { getProject } from "../../data/projects";

const project = getProject("gamma");

export const metadata = {
  title: project?.title ?? "Project Gamma",
};

export default function ProjectGamma() {
  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
