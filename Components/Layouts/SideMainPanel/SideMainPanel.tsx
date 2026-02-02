import Link from "next/link";
import { useState } from "react";
import { AvatarIcon, Copyicon, SearchIcon, SourceControlIcon, ExtensionsIcon, SettingsIcon } from "../../SVG/IconsSVG";
import styles from "../Layout.module.css";

interface ISideMainPanel {
  mainActiveSideButton: boolean;
  toggleSideMainMenu: () => void;
}

export const SideMainPanel: React.FC<ISideMainPanel> = (props: any) => {
  const [selectedSideTab, setselectedSideTab] = useState("main");

  return (
    <div className="side-header text-center">
      <ul className="side-header-menu text-center relative h-full ">
        <li
          className={`${
            props.mainActiveSideButton && selectedSideTab === "main"
              ? "active"
              : ""
          } ${styles.faicons}`}
          title="Explorer"
          onClick={() => {
            props.toggleSideMainMenu();
            setselectedSideTab("main");
          }}
        >
          <Copyicon width={25} height={25} />
        </li>

        <Link href="/Projects">
          <li
            className={`${styles.faicons}`}
            title="Search"
          >
            <SearchIcon width={24} height={24} />
          </li>
        </Link>

        <Link href="https://github.com/bharathlogs" target="_blank">
          <li
            className={`${styles.faicons}`}
            title="Source Control"
          >
            <SourceControlIcon width={24} height={24} />
          </li>
        </Link>

        <Link href="/Skills">
          <li
            className={`${styles.faicons}`}
            title="Extensions"
          >
            <ExtensionsIcon width={24} height={24} />
          </li>
        </Link>

        <div className="sideMainBottom">
          <Link href="/">
            <li
              className={`${styles.faicons}`}
              title="About"
            >
              <AvatarIcon width={28} height={28} />
            </li>
          </Link>
          <Link href="/Email">
            <li
              className={`${styles.faicons}`}
              title="Settings"
            >
              <SettingsIcon width={22} height={22} />
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
};
