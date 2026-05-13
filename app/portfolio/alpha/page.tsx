import { notFound } from "next/navigation";
import ProjectCaseStudy from "../../components/ProjectCaseStudy";
import { getProject } from "../../data/projects";

const project = getProject("alpha");

export const metadata = {
  title: project?.title ?? "Project Alpha",
};

export default function ProjectAlpha() {
  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
