import React, { useState, useEffect, SyntheticEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/Home.module.css";

// React Icons
import { BsFillSunFill, BsGithub } from "react-icons/bs";
import { BiMenu, BiGlobe, BiMoon } from "react-icons/bi";
import { VscGlobe } from "react-icons/vsc";

// Utils function imports
import { addFetchBookmarks } from "../utils/databaseAPI";

// Interfaces

// Components
import Clock from "../components/Clock";
import ContentList from "../components/content/ContentList";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  // Basic app-mounting logic:
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div>
      <Head>
        <title>Personal Web Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header className="bg-orange-700 text-white flex flex-row justify-between px-20">
        <figure>☆</figure>
        <h1 className="font-autobus text-2xl">App Title or Greeting</h1>
        <figure>
          <BiMenu />
        </figure>
      </header> */}

      <main className="container mx-auto overflow-hidden md:max-w-7xl">
        <section className="bg-gray-300">
          <Clock />
        </section>
        <section className=" bg-gray-500">
          <ContentList />
        </section>
        <section>
          <p>
            The Star Trek canon includes the Original Series, nine spin-off
            television series, and a film franchise; further adaptations also
            exist in several media. After the conclusion of the Original Series,
            the adventures of its characters continued in the 22-episode Star
            Trek: The Animated Series and six feature films. A television
            revival beginning in the 1980s saw three sequel series and a
            prequel: Star Trek: The Next Generation, following the crew of a new
            starship Enterprise a century after the original series; Star Trek:
            Deep Space Nine and Star Trek: Voyager, set in the same era as the
            Next Generation; and Enterprise, set before the original series in
            the early days of human interstellar travel. The adventures of the
            Next Generation crew continued in four additional feature films. In
            2009, the film franchise underwent a reboot, creating an alternate
            continuity known as the Kelvin timeline; three films have been set
            in this continuity. The newest Star Trek television revival,
            beginning in 2017, includes the series Star Trek: Discovery, Picard,
            Short Treks, Lower Decks, and Prodigy, streaming exclusively on
            digital platforms, with an additional series, Star Trek: Strange New
            Worlds, currently in development.
          </p>
        </section>
      </main>

      {/* <footer className="bg-orange-700 text-white flex flex-row justify-end px-10">
        <p>github link</p>
        <BsGithub />
      </footer> */}
    </div>
  );
};

export default Home;
