import React, { useEffect, useState } from "react";
import { DownIcon, RightIcon } from "../../SVG/IconsSVG";
import SidePanelSubLink from "./SidePanelSubLink";
import { useIsMobile } from "../../Helper/useIsMobile";
import { useRouter } from "next/router";

interface IProps {
  closeSideMenu: () => void;
}

export const SideSecondPanel: React.FC<IProps> = (props: any) => {
  const [portfolioClose, setPortfolioClose] = useState(false);
  const [hobbiesClose, setHobbiesClose] = useState(true);
  const isTabletOrMobile = useIsMobile();

  const router = useRouter();

  const [activeCurrentSubLink, setActiveCurrentSubLink] = useState("");
  useEffect(() => {
    let currentSubLink = window.location.href.split("/").pop();
    if (currentSubLink === "") {
      setActiveCurrentSubLink("Welcome.tsx");
    } else if (currentSubLink === "Experience") {
      setActiveCurrentSubLink("Experience.tsx");
    } else if (currentSubLink === "Skills") {
      setActiveCurrentSubLink("Skills.json");
    } else if (currentSubLink === "Education") {
      setActiveCurrentSubLink("Education.py");
    } else if (currentSubLink === "Projects") {
      setActiveCurrentSubLink("Projects.tsx");
    } else if (currentSubLink === "Email") {
      setActiveCurrentSubLink("Contact.tsx");
    } else if (currentSubLink === "Anime") {
      setActiveCurrentSubLink("Anime.jsx");
    } else if (currentSubLink === "Learning") {
      setActiveCurrentSubLink("Learning.tsx");
    }
  });

  return (
    <div className="menu-option overflow-hidden">
      <h5 className="myweight ">EXPLORER</h5>
      <div
        className="mb-5 pb-5 z-1 scrollbar "
        style={{ height: "84%", overflowY: "scroll" }}
      >
        <div className="menu-drop">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setPortfolioClose(!portfolioClose)}
            >
              <div className="myweight flex-min topPadd">
                {!portfolioClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="myweight flex-auto">PORTFOLIO</span>
            </div>
            {!portfolioClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Welcome.tsx" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Welcome.tsx"
                      link="/"
                      icon={<span className="icons8-typescript"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Experience");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={`smallSide ${
                      activeCurrentSubLink === "Experience.tsx" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Experience.tsx"
                      link="/Experience"
                      icon={<span className="icons8-typescript"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Skills");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Skills.json" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Skills.json"
                      link="/Skills"
                      icon={<span className="icons8-javascript"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Education");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Education.py" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Education.py"
                      link="/Education"
                      icon={<span className="icons8-python"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={`smallSide ${
                      activeCurrentSubLink === "Projects.tsx" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Projects.tsx"
                      link="/Projects"
                      icon={<span className="icons8-typescript"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Email");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Contact.tsx" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Contact.tsx"
                      link="/Email"
                      icon={<span className="icons8-typescript"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="menu-drop pt-1 pb-12">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setHobbiesClose(!hobbiesClose)}
            >
              <div className="myweight flex-min topPadd">
                {!hobbiesClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="myweight flex-auto">HOBBIES</span>
            </div>
            {!hobbiesClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/Anime");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Anime.jsx" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Anime.jsx"
                      link="/Anime"
                      icon={<span className="icons8-react"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Learning");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Learning.tsx" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Learning.tsx"
                      link="/Learning"
                      icon={<span className="icons8-typescript"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {!isTabletOrMobile && (
        <ul className="bottom-links  pl-2">
          <li className="border-b border-solid border-gray-500 ">
            <span className="text-gray-400">All Rights Reserved. </span>
          </li>
          <li>
            <span className="text-gray-400"> Ⓒ Copyright 2025. Bharath Loganathan </span>
          </li>
        </ul>
      )}
    </div>
  );
};
