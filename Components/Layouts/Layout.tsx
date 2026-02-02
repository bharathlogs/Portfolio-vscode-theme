import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { SideSecondPanel } from "./SeondPanel/SideSecondPanel";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("react-live-clock"), { ssr: false });
import { numberTOWords } from "../Helper/utility";
import { SideMainPanel } from "./SideMainPanel/SideMainPanel";
import Link from "next/link";
import { useIsMobile } from "../Helper/useIsMobile";
import { useRouter } from "next/router";

const routeToTab: Record<string, { name: string; icon: string }> = {
  "/": { name: "Welcome.tsx", icon: "icons8-typescript" },
  "/Skills": { name: "Skills.tsx", icon: "icons8-typescript" },
  "/Experience": { name: "Experience.tsx", icon: "icons8-typescript" },
  "/Education": { name: "Education.py", icon: "icons8-python" },
  "/Projects": { name: "Projects.tsx", icon: "icons8-typescript" },
  "/Email": { name: "Contact.tsx", icon: "icons8-typescript" },
  "/Hobbies": { name: "Hobbies.tsx", icon: "icons8-typescript" },
  "/Anime": { name: "Anime.jsx", icon: "icons8-react" },
  "/Learning": { name: "Learning.tsx", icon: "icons8-typescript" },
};

interface LayoutComponentProps {
  children: React.ReactNode;
  visitorsCount?: number;
}

const Layout: React.FC<LayoutComponentProps> = ({ children }) => {
  const isTabletOrMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [VisitorCount, setVisitorCount] = useState("Zero");
  const [openSideMenu, setOpenSideMenu] = useState(true);
  const [openTabs, setOpenTabs] = useState<string[]>(["/"]);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setVisitorCount(numberTOWords(0));
  }, []);

  useEffect(() => {
    if (mounted && isTabletOrMobile) {
      setOpenSideMenu(false);
    }
  }, [isTabletOrMobile, mounted]);

  useEffect(() => {
    const path = router.pathname.startsWith("/Projects/")
      ? "/Projects"
      : router.pathname;
    setOpenTabs((prev) => {
      if (!prev.includes(path) && routeToTab[path]) {
        return [...prev, path];
      }
      return prev;
    });

    if (typeof window !== "undefined" && router.pathname !== "/") {
      const storedLinks = localStorage.getItem("history");
      let recentLinks: string[] = storedLinks ? JSON.parse(storedLinks) : [];
      recentLinks = recentLinks.slice(0, 4);
      recentLinks = recentLinks.filter(
        (link: string) => link !== window.location.pathname
      );
      recentLinks.unshift(window.location.pathname);
      localStorage.setItem("history", JSON.stringify(recentLinks));
    }
  }, [router.pathname]);

  const closeTab = (e: React.MouseEvent, path: string) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((t) => t !== path);
    if (newTabs.length === 0) newTabs.push("/");
    setOpenTabs(newTabs);
    const currentPath = router.pathname.startsWith("/Projects/")
      ? "/Projects"
      : router.pathname;
    if (currentPath === path) {
      router.push(newTabs[newTabs.length - 1]);
    }
  };

  const activeRoute = router.pathname.startsWith("/Projects/")
    ? "/Projects"
    : router.pathname;

  const toggleSideMainMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  // Don't render responsive content until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="header w-full">
        <Link href="/">
          <div className="logo pl-2 " style={{ cursor: "pointer" }}>
            <img
              src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
              alt="Visual Studio Code Styled Portofolio Icon"
              width="60"
              height="60"
            />
          </div>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="header w-full">
        <Link href="/">
          <div className="logo pl-2 " style={{ cursor: "pointer" }}>
            <img
              src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
              alt="Visual Studio Code Styled Portofolio Icon"
              width="60"
              height="60"
            />
          </div>
        </Link>
        <ul className="header-menu">
          <li className="header-menu-link">
            <Link href="/">About</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Experience">Experience</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Skills">Skills</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Education">Education</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Projects">Projects</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Email">Contact</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Hobbies">Hobbies</Link>
          </li>
        </ul>
        {!isTabletOrMobile ? (
          <div className="header-app-icons">
            <div className="flex flex-row items-center">
              <button
                onClick={() => history.back()}
                className="flex flex-col justify-center items-center p-1 m-1 rounded-full 
                text-gray-400 transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2"
              >
                <svg
                  className="fill-current  h-5 w-5"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  style={{ fill: "white" }}
                >
                  <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                </svg>
              </button>
              <div
                className=" text-white rounded-full p-1 mr-2  "
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "rgba(248, 113, 113, 1)",
                }}
              ></div>
              <div
                className=" text-white rounded-full p-1 mr-2 "
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "rgba(251, 191, 36, 1)",
                }}
              ></div>
              <div
                className="text-white rounded-full p-1 mr-5"
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "rgba(52, 211, 153, 1)",
                }}
              ></div>
            </div>
          </div>
        ) : null}
      </div>
      <div className={`scrollbar w-full ${styles.layoutContainer}`}>
        <nav
          className={`${
            openSideMenu ? styles.navside : styles.navsidecollapse
          }`}
        >
          <SideMainPanel
            toggleSideMainMenu={toggleSideMainMenu}
            mainActiveSideButton={openSideMenu}
          />
          {openSideMenu && (
            <SideSecondPanel closeSideMenu={() => setOpenSideMenu(false)} />
          )}
        </nav>
        <div
          className={`${
            openSideMenu ? styles.mainside : styles.mainsidecollapse
          }`}
          style={{ display: "inline-flex", flexDirection: "column", width: "100%" }}
        >
          <div className="editor-tabs">
            {openTabs.map((path) => {
              const tab = routeToTab[path];
              if (!tab) return null;
              return (
                <div
                  key={path}
                  className={`editor-tab ${activeRoute === path ? "editor-tab-active" : ""}`}
                  onClick={() => router.push(path)}
                >
                  <span className={tab.icon} style={{ marginRight: "6px" }}></span>
                  <span className="editor-tab-name">{tab.name}</span>
                  <span
                    className="editor-tab-close"
                    onClick={(e) => closeTab(e, path)}
                  >
                    &times;
                  </span>
                </div>
              );
            })}
          </div>
          <main className="scrollbar" style={{ flex: 1, overflow: "auto", width: "100%" }}>
            {children}
          </main>
        </div>
      </div>

      {!isTabletOrMobile ? (
        <div className="bottom-header  pb-6 relative z-50 bg-blue-400">
          <ul className="right pt-1 " style={{ fontSize: "12px" }}>
            <li>Made in</li>
            <li>NEXT.JS</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>React</li>
          </ul>
          <ul className="left  ">
            <li>{VisitorCount} Total Visits</li>
            <li>
              {
                <Clock
                  format={"dddd, MMMM Mo, YYYY, h:mm:ss A"}
                  ticking={true}
                />
              }
            </li>
            <li>UTF-8</li>
            <li>
              <i className="fa fa-radiation-alt"></i> Port: 443
            </li>
          </ul>
        </div>
      ) : (
        <div className="bottom-header fixed pb-6 relative z-50 bg-blue-400">
          <ul className="right pt-1 " style={{ fontSize: "12px" }}>
            <li>NEXT.JS</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
          </ul>
          <ul className="left  ">
            <li>{VisitorCount} Total Visits</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Layout;
