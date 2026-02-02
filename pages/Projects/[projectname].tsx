import { useRouter, NextRouter } from "next/router";
import { projectsdata } from "../../data/projectsdata";
import ProjectDetails from "../../Components/ProjectDetails";
import { MetaTags } from "../../Components/SEO/MetaTags";

interface ProjectData {
  name: string;
  title: string;
  logo?: string;
  gradient?: string;
  [key: string]: any; // For other project properties
}

interface ProjectDetailsPageProps {
  projects: ProjectData[];
}

const Projectdetails = ({ projects }: ProjectDetailsPageProps) => {
  const router = useRouter();
  const projectDetails = projects[parseInt(router.query.projectname as string) - 1];
  const altt = projectDetails?.name + " - " + projectDetails?.title;
  return (
    <>
      <MetaTags
        title={`${projectDetails?.name || "Project"} - Bharath Loganathan`}
        description={projectDetails?.title || "Details of Projects developed."}
      />
      <ProjectDetails projectDetails={projectDetails} altt={altt} />
    </>
  );
};

export function getStaticProps() {
  const projects = projectsdata();
  return {
    props: {
      projects: projects,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { projectname: "1" } },
      { params: { projectname: "2" } },
      { params: { projectname: "3" } },
      { params: { projectname: "4" } },
      { params: { projectname: "5" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export default Projectdetails;
