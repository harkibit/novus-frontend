import React from "react";
import Image from "next/Image";

import styles from "../styles/Home.module.css";
import ActiveLink from "../components/ActiveLink";

import { FiHome } from "react-icons/fi";
import { TbNotebook } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import { GiStairsGoal } from "react-icons/gi";
import { HiMenuAlt4 } from "react-icons/hi";

import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

export default function Sidebar(props) {
  const { user_name, user_email, user_avatar, pageTitle } = props;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <HiMenuAlt4 />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
