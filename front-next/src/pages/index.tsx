import CompletedChallanges from "../components/CompletedChallanges";
import Countdown from "../components/Countdown";

import Profile from "../components/Profile";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";
import React from "react";
import ChallangeBox from "../components/ChallangeBox";
import ExperienceBar from "../components/ExperienceBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <Countdown />
        </div>
        <div>
          <ChallangeBox />
        </div>
      </section>
    </div>
  );
}
