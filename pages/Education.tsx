import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/legacy/image";
import { useIsMobile } from "../Components/Helper/useIsMobile";
import Head from "next/head";

const Education: NextPage = () => {
  const isTabletOrMobile = useIsMobile();
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <div>
        <Head>
          <title>Education</title>
          <meta name="description" content={`Education`} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content={"Education"} />
          <meta name="description" content={`Education`} />
          <link rel="canonical" href={"https://www.bharathloganathan.dev"} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={"https://www.bharathloganathan.dev"}
          />
          <meta property="og:site_name" content="Bharath Loganathan" />
          <meta property="og:image" content="/mainthumbnail.PNG" />
          <meta property="og:image:width" content="1040" />
          <meta property="og:image:height" content="600" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:widgets:csp" content="on" />
        </Head>
        {!isTabletOrMobile ? (
          <div className="p-3  pl-5 pb-60 text-center ">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block lg:text-5xl  font-bold leading-tight text-3xl text-white">
                Education
              </span>
            </h2>
            <div className="pt-3 w-full timeline">
              <VerticalTimeline animate={false}>
                <VerticalTimelineElement
                  visible={true}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#2d2d2d",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #2d2d2d",
                  }}
                  date="Aug 2024 - Jul 2026"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={
                        "https://img.icons8.com/color/96/graduation-cap.png"
                      }
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="Sona College of Technology"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Master of Computer Applications (MCA)
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Sona College of Technology, IN
                  </h4>
                  <div className="text-left">
                    <p>
                      • Computer and Information Sciences and Support Services
                    </p>
                    <p>
                      • Focus on AI/ML, Data Science, and Software Engineering
                    </p>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible={true}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#2d2d2d",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #2d2d2d",
                  }}
                  date="Jul 2021 - Jul 2024"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"https://img.icons8.com/color/96/university.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="Dr.G.R.Damodaran College of Science"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Bachelor of Science (BS) - Computer Science
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Dr.G.R.Damodaran College of Science, IN
                  </h4>
                  <div className="text-left">
                    <p>• Computer Science</p>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        ) : (
          <div className=" pt-5 text-center ">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block lg:text-5xl  font-bold leading-tight text-3xl text-white">
                Education
              </span>
            </h2>
            <div className="pt-3 h-full pb-60 w-full">
              <VerticalTimeline animate={false}>
                <VerticalTimelineElement
                  visible={true}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#2d2d2d",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #2d2d2d",
                  }}
                  date="Aug 2024 - Jul 2026"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={
                        "https://img.icons8.com/color/96/graduation-cap.png"
                      }
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="Sona College of Technology"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Master of Computer Applications (MCA)
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Sona College of Technology, IN
                  </h4>
                  <div className="text-left">
                    <p>
                      • Computer and Information Sciences and Support Services
                    </p>
                    <p>
                      • Focus on AI/ML, Data Science, and Software Engineering
                    </p>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible={true}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#2d2d2d",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #2d2d2d",
                  }}
                  date="Jul 2021 - Jul 2024"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"https://img.icons8.com/color/96/university.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="Dr.G.R.Damodaran College of Science"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Bachelor of Science (BS) - Computer Science
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Dr.G.R.Damodaran College of Science, IN
                  </h4>
                  <div className="text-left">
                    <p>• Computer Science</p>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        )}
      </div>
    </Scrollbars>
  );
};

export default Education;
