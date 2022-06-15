import React from "react";
import Image from "next/Image";

import styles from "../styles/Home.module.css";
import ActiveLink from "../components/ActiveLink";

import { FiHome } from "react-icons/fi";
import { TbNotebook } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import { GiStairsGoal } from "react-icons/gi";
import { Avatar } from "@mui/material";

export default function Sidebar(props) {
  const { user_name, user_email, user_avatar } = props;
  return (
    <div className={styles.sidebar}>
      <div>
        <Image
          src="/vercel.svg"
          alt="novus-logo"
          width="100"
          height="100"
          className={styles.sidebar_logo}
        />

        <div>
          <ul className={styles.sidebar_links}>
            <ActiveLink href="/test" activeClassName={styles.activeLink}>
              <li>
                <FiHome />
                Dashboard
              </li>
            </ActiveLink>
            <ActiveLink href="/" activeClassName={styles.activeLink}>
              <li>
                <TbNotebook />
                Notes
              </li>
            </ActiveLink>
            <ActiveLink href="/" activeClassName={styles.activeLink}>
              <li>
                <BsFillGridFill />
                Projects
              </li>
            </ActiveLink>
            <ActiveLink href="/" activeClassName={styles.activeLink}>
              <li>
                <GiStairsGoal />
                Goals
              </li>
            </ActiveLink>
          </ul>
        </div>
      </div>

      <div className={styles.sidebar_userContainer}>
        <Avatar
          src={user_avatar}
          className={styles.sidebar_avatar}
          alt="user avatar"
        />
        <div className={styles.sidebar_userinfo}>
          <h4>{user_name}</h4>
          <span>{user_email}</span>
        </div>
      </div>
    </div>
  );
}
