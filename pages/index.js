import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import styles from "../styles/Home.module.css";

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
    </div>
  );
}
