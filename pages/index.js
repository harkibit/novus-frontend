import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import logo from '../public/assets/logo.png';
import red from '../public/assets/landingPage/red.png';
import blue from '../public/assets/landingPage/blue.png';
import green from '../public/assets/landingPage/green.png';
import yellow from '../public/assets/landingPage/yellow.png';
import desktop from '../public/assets/landingPage/desktop.png';
import mobile from '../public/assets/landingPage/mobile.png';
import { AppBar, Toolbar, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { AiOutlineUnorderedList, AiOutlineBulb, AiOutlineCheck } from "react-icons/ai";


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
      <div className={styles.landingPage_padding}>
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
        <div className={styles.landingPage_features}>
          <Typography
            variant="h4"
            component="div"
            sx={{ maxWidth: 500, fontWeight: 400, textAlign: { xs: 'center', md: 'left' }}}>
            Stay organized and manage everything related to your
            study, career and work</Typography>
            <div className={styles.landingPage_featureSection}>
              <div className={`${styles.landingPage_featureBox} ${styles.landingPage_featureBox_first}`}>
                <AiOutlineUnorderedList fontSize={150} color="var(--blue)"/>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ maxWidth: 400, fontWeight: 400, textAlign: { xs: 'center', md: 'left' }}}>
                  Add Projects, where you can manage tasks and deadlines</Typography>
              </div>
              <div className={`${styles.landingPage_featureBox} ${styles.landingPage_featureBox_second}`}>
                <AiOutlineBulb fontSize={150} color="var(--yellow)"/>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ maxWidth: 400, fontWeight: 400, textAlign: { xs: 'center', md: 'left' }}}>
                  Manage Goals, notes and tasks and keep track of your progress</Typography>
              </div>
              <div className={styles.landingPage_featureBox}>
                <AiOutlineCheck fontSize={150} color="var(--green)"/>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ maxWidth: 400, fontWeight: 400, textAlign: { xs: 'center', md: 'left' }}}>
                 Get everything done on time without worrying about management</Typography>
              </div>
            </div>
        </div>
        <div className={styles.landingPage_slogan}>
          <div className={styles.landingPage_sloganMobile}>
            <Typography
                  variant="h4"
                  component="div"
                  color="white"
                  sx={{ maxWidth: 400, fontWeight: 400, textAlign: 'center'}}>
                 Your time is your most valuable resource</Typography>
          </div>
          <div className={styles.landingPage_sloganDesktop}>
            <div className={styles.landingPage_sloganDesktopBlueBox}>
              <Typography
                  variant="h3"
                  component="div"
                  color="white"
                  sx={{ maxWidth: 400, fontWeight: 400, textAlign: 'right'}}>
                 Your time <br /> valuable</Typography>
            </div>
            <div className={styles.landingPage_sloganDesktopBox}>
              <Typography
                  variant="h3"
                  component="div"
                  sx={{ maxWidth: 400, fontWeight: 400, textAlign: 'left'}}>
                 is your most <br /> resource</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.landingPage_footer}>
          <Typography
                  variant="h6"
                  component="div"
                  sx={{fontWeight: 400}}>
                 Copyright c 2021 - Novus</Typography>
        </div>
    </div>
  );
}
