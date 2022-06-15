import React from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/Home.module.css";

import { Box, Toolbar } from "@mui/material";

const drawerWidth = 240;

export default function Layout(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        user_name="Antonio"
        user_email="antonio@gmail.com"
        user_avatar="https://icon-library.com/images/user-icon-image/user-icon-image-13.jpg"
        pageTitle="Hello World"
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* instead of toolbar we'll add a navbar */}
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
