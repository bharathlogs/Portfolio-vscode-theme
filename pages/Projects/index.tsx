import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import Link from "next/link";
import { useIsMobile } from "../../Components/Helper/useIsMobile";
import { projectsdata } from "../../data/projectsdata";
import { MetaTags } from "../../Components/SEO/MetaTags";

interface ProjectData {
  name: string;
  title: string;
  logo: string;
  gradient: string;
}

interface ProjectsPageProps {
  projects: ProjectData[];
}

const Projects: NextPage<ProjectsPageProps> = ({ projects }) => {
  const isTabletOrMobile = useIsMobile();

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <MetaTags
        title="Projects - Bharath Loganathan"
        description="AI/ML and Development Projects - College and Side Projects"
        ogTitle="Projects - College | Side"
      />
      <div className=" mt-2 w-full p-2 ml-1 text-left">
        <h2 className="lg:text-5xl pl-5 pb-2 font-bold leading-tight text-white text-3xl ">
          Projects
        </h2>
        <p className=" font-medium pl-5 pb-2 text-gray-400 text-md pt-1 w-4/5 ">
          AI/ML and Development Projects
        </p>
        {!isTabletOrMobile ? (
          <div className="w-full mt-3 mb-5 pb-5 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            {projects.map((obj, index) => (
              <div className="mb-4 p-3">
                <div className="w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                  <Link href={`/Projects/${index + 1}`}>
                    <div>
                      <div
                        className="flex flex-col items-center justify-center rounded-t-xl"
                        style={{ height: "160px", background: obj.gradient }}
                      >
                        <img src={obj.logo} alt={obj.name} className="h-10 w-10 mb-2" />
                        <p className="text-white font-bold text-base px-3 text-center">{obj.name}</p>
                      </div>
                      <div className="flex justify-between pr-3 pt-2 pl-3 pb-2">
                        <div className="flex items-center space-x-4">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={obj.logo}
                            alt={obj.name}
                          />
                          <h1 className="text-lg text-gray-100 font-bold">
                            {obj.name}
                            <p className=" font-medium text-gray-400 text-sm pt-1 w-4/5 ">
                              {obj.title}
                            </p>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full mt-3 pb-60 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            {projects.map((obj, index) => (
              <div className="mb-5 " key={index + 125}>
                <div className="w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                  <Link href={`/Projects/${index + 1}`}>
                    <div>
                      <div
                        className="flex flex-col items-center justify-center rounded-t-xl"
                        style={{ height: "140px", background: obj.gradient }}
                      >
                        <img src={obj.logo} alt={obj.name} className="h-10 w-10 mb-2" />
                        <p className="text-white font-bold text-base px-3 text-center">{obj.name}</p>
                      </div>
                      <div className="flex justify-between pr-3 pt-1 pl-3 pb-2">
                        <div className="flex items-center space-x-4">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={obj.logo}
                            alt={obj.name}
                          />
                          <h1 className="text-lg text-gray-100 font-bold">
                            {obj.name}
                            <p className=" font-medium text-gray-400 text-sm pt-1  ">
                              {obj.title}
                            </p>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Scrollbars>
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

export default Projects;
