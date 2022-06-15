import React from "react";
import Image from "next/Image";
import Link from "next/Link";

import styles from "../styles/Home.module.css";
import ActiveLink from "../components/ActiveLink";

import { FiHome } from "react-icons/fi";
import { TbNotebook } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import { GiStairsGoal } from "react-icons/gi";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <Image src="/vercel.svg" alt="novus-logo" width="100" height="100" />

        <div>
          <ul className={styles.sidebar_links}>
            <ActiveLink href="/test" activeClassName={styles.activeLink}>
              <li>
                <FiHome />
                Dashboard
              </li>
            </ActiveLink>
            <Link href="/">
              <li>
                <TbNotebook />
                Notes
              </li>
            </Link>
            <Link href="/">
              <li>
                <BsFillGridFill />
                Projects
              </li>
            </Link>
            <Link href="/">
              <li>
                <GiStairsGoal />
                Goals
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div></div>
    </div>
  );
}
