import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import Head from "next/head";
import { useState } from "react";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: "https://img.icons8.com/color/48/null/python--v1.png" },
      { name: "Dart", icon: "https://img.icons8.com/color/48/dart.png" },
      { name: "JavaScript", icon: "https://img.icons8.com/color/144/000000/javascript--v1.png" },
      { name: "HTML/CSS", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
    ],
  },
  {
    category: "AI/ML & Data Science",
    skills: [
      { name: "TensorFlow", icon: "https://img.icons8.com/color/48/tensorflow.png" },
      { name: "OpenCV", icon: "https://img.icons8.com/color/48/opencv.png" },
      { name: "MediaPipe", icon: "https://img.icons8.com/color/48/google-logo.png" },
      { name: "YOLO", icon: "https://img.icons8.com/color/48/artificial-intelligence.png" },
      { name: "Pandas", icon: "https://img.icons8.com/color/48/pandas.png" },
      { name: "NumPy", icon: "https://img.icons8.com/color/48/numpy.png" },
      { name: "PyTorch", icon: "https://img.icons8.com/fluency/48/pytorch.png" },
      { name: "Streamlit", icon: "https://img.icons8.com/color/48/streamlit.png" },
    ],
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: "https://img.icons8.com/color/144/000000/amazon-web-services.png" },
      { name: "Git", icon: "https://img.icons8.com/color/144/000000/git.png" },
      { name: "GitHub", icon: "https://img.icons8.com/fluency/144/000000/github.png" },
      { name: "VS Code", icon: "https://img.icons8.com/fluency/144/000000/visual-studio-code-2019.png" },
      { name: "JIRA", icon: "https://img.icons8.com/color/48/jira.png" },
      { name: "Firebase", icon: "https://img.icons8.com/color/48/firebase.png" },
      { name: "Flutter", icon: "https://img.icons8.com/color/48/flutter.png" },
    ],
  },
];

const Skills: NextPage = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(
    Object.fromEntries(skillsData.map((_, i) => [i, true]))
  );

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Skills</title>
        <meta name="description" content={`Skills`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Skills"} />
        <meta name="description" content={`Skills`} />
        <link rel="canonical" href={"https://www.bharathloganathan.dev"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.bharathloganathan.dev"} />
        <meta property="og:site_name" content="Bharath Loganathan" />
        <meta property="og:image" content="/mainthumbnail.PNG" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:widgets:csp" content="on" />
      </Head>
      <div className=" mt-2 w-full p-5 pb-40 ml-3 text-left">
        <h2 className="lg:text-5xl font-bold leading-tight text-white text-3xl">
          Skills
        </h2>
        <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
          Technologies and tools I work with.
        </p>

        <div className="w-full mb-5 pb-5">
          {skillsData.map((section, sectionIndex) => (
            <div key={section.category} className="mt-5 pt-3">
              <div
                className="flex items-center justify-between cursor-pointer border-b border-gray-600 pb-2"
                onClick={() => toggleSection(sectionIndex)}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      openSections[sectionIndex] ? "rotate-0" : "-rotate-90"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <p className="tracking-tight text-gray-300 text-xl font-medium">
                    {section.category}
                  </p>
                </div>
                <span className="text-sm text-gray-500">
                  {section.skills.length} skills
                </span>
              </div>
              {openSections[sectionIndex] && (
                <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-4 md:gap-y-4">
                  {section.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="relative flex items-center gap-2 p-2 rounded-md border border-gray-700 bg-gray-800 bg-opacity-50"
                    >
                      <div className="flex items-center justify-center h-7 w-7 rounded-md bg-white flex-shrink-0">
                        <img src={skill.icon} className="h-5 w-5" />
                      </div>
                      <p className="text-sm leading-5 font-medium text-gray-100">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          ))}
        </div>
      </div>
    </Scrollbars>
  );
};

export default Skills;
