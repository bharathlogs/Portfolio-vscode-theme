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

const MyWork: NextPage = () => {
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
          <title>Professional Experience</title>
          <meta name="description" content={`Professional Experience`} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content={"Professional Experience"} />
          <meta name="description" content={`Professional Experience`} />
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
              <span className="block pt-3 text-white text-2xl">
                Industry Experience
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
                  date="Dec 2025 - Present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"https://img.icons8.com/fluency/96/briefcase.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="Eidovis Inc"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Data Science Intern
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Eidovis Inc, California, USA
                  </h4>
                  <div className="text-left">
                    <p>
                      • Data analysis, visualization, and machine learning model
                      development
                    </p>
                    <p>
                      • Working on real datasets, building models, cleaning data
                    </p>
                    <p>
                      • Tech Stack: Python, Machine Learning, Data Analysis,
                      Data Visualization, Pandas
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
                  date="Nov 2023 - Jan 2024"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"https://img.icons8.com/fluency/96/building.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="ISOC Chennai"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Network Specialist
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Internet Society India Chennai (ISOC Chennai), IN
                  </h4>
                  <div className="text-left">
                    <p>• Network specialist internship</p>
                    <p>• Skills: Networking</p>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        ) : (
          <div className=" pt-5 text-center ">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block pt-3 text-white text-2xl">
                Industry Experience
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
                  date="Dec 2025 - Present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"https://img.icons8.com/fluency/96/briefcase.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="Eidovis Inc"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Data Science Intern
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Eidovis Inc, California, USA
                  </h4>
                  <div className="text-left">
                    <p>
                      • Data analysis, visualization, and machine learning model
                      development
                    </p>
                    <p>
                      • Working on real datasets, building models, cleaning data
                    </p>
                    <p>
                      • Tech Stack: Python, Machine Learning, Data Analysis,
                      Data Visualization, Pandas
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
                  date="Nov 2023 - Jan 2024"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"https://img.icons8.com/fluency/96/building.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="ISOC Chennai"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Network Specialist
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Internet Society India Chennai (ISOC Chennai), IN
                  </h4>
                  <div className="text-left">
                    <p>• Network specialist internship</p>
                    <p>• Skills: Networking</p>
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

export default MyWork;
