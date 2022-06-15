import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import logo from '../assets/logo.png';
import red from '../assets/landingPage/red.png';
import blue from '../assets/landingPage/blue.png';
import green from '../assets/landingPage/green.png';
import yellow from '../assets/landingPage/yellow.png';
import desktop from '../assets/landingPage/desktop.png';
import mobile from '../assets/landingPage/mobile.png';
import { AppBar, Toolbar, Button } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Novus</title>
        <meta
          name="description"
          content="The ultimate solution for your task management"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.landingPage_margin}>
        <div className={styles.landingPage_navbar}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar color="transparent">
              <div className={styles.landingPage_logo}>
                <Image
                  src={logo}
                  alt="Logo"
                  width={90}
                  height={81}
                />
              </div>
              <Button color="inherit" style={{marginRight: 10, textTransform: 'none'}}>Log in</Button>
              <Button color="inherit" variant="outlined" style={{textTransform: 'none'}}>Sign up</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className={styles.landingPage_heroSection}>
          <div className={styles.landingPage_heroSectionRectangles}>
            <div className={styles.landingPage_yellowRectangle}>
              <Image
                src={yellow}
                alt="Rectangle"
              />
            </div>
            <div className={styles.landingPage_blueRectangle}>
              <Image
                src={blue}
                alt="Rectangle"
              />
            </div>
            <div className={styles.landingPage_greenRectangle}>
              <Image
                src={green}
                alt="Rectangle"
              />
            </div>
            <div className={styles.landingPage_redRectangle}>
              <Image
                src={red}
                alt="Rectangle"
              />
            </div>
          </div>
          <div className={styles.landingPage_titlesSection}>
            <h1 className={styles.landingPage_heroTitle_h1}>Novus</h1>
            <h3 className={styles.landingPage_heroTitle_h3}>From small ideas to big achievements</h3>
            <Button color="primary" variant="contained" style={{marginTop: 30,textTransform: 'none'}}>Get started</Button>
          </div>
          <div className={styles.landingPage_exampleRectangles}>
            <div className={styles.landingPage_desktopRectangle}>
              <Image
                src={desktop}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="Rectangle"
              />
            </div>
            <div className={styles.landingPage_mobileRectangle}>
              <Image
                src={mobile}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="Rectangle"
              />
            </div>
          </div>
        </div>
        <div>
          <span>test</span>
        </div>
      </div>
    </div>
  );
}
