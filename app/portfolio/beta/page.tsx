import { notFound } from "next/navigation";
import ProjectCaseStudy from "../../components/ProjectCaseStudy";
import { getProject } from "../../data/projects";

const project = getProject("beta");

export const metadata = {
  title: project?.title ?? "Project Beta",
};

export default function ProjectBeta() {
  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
