import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

// import { getUsers } from "../utils/users";

export default function Home() {
  // useEffect(() => {
  //   getUsers();
  // }, []);

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
    </div>
  );
}
