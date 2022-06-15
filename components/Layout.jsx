import React from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/Home.module.css";

import { Container } from "@mui/material";

export default function Layout(props) {
  return (
    <div>
      <Sidebar
        user_name="Antonio"
        user_email="antonio@gmail.com"
        user_avatar="https://icon-library.com/images/user-icon-image/user-icon-image-13.jpg"
      />

      <div className={styles.main_container}>
        <Container maxWidth="lg">{props.children}</Container>
      </div>
    </div>
  );
}
