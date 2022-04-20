import React, { useState, useEffect, SyntheticEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import supabase from "../utils/supabase/supabaseClient";
import { DateDisplayItem } from "../data/interfaces";
import Image from "next/image";
import { User } from "@supabase/gotrue-js";

// React Icons
import { BsGithub } from "react-icons/bs";

// Supabase Auth Functions
import {
  signUpWithEmail,
  signInWithEmail,
  signOut,
} from "../utils/supabase/supabase";

// Components
import Clock from "../components/Clock";
import ContentList from "../components/content/ContentList";
import DaisyNavbar from "../components/daisyUI/DaisyNavbar";
import AccountAccess from "../components/userAccess/AccountAccess";

//
// const user = supabase.auth.user();
// const session = supabase.auth.session();
const date: Date = new Date();

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("");

  // Per Jitsu Next/Supabase Middleware Model:
  const [user, setUser] = useState<User | undefined>(
    supabase.auth.user() || undefined
  );

  //
  const handleSignUp = () => {
    signUpWithEmail();
  };

  const handleSignIn = () => {
    signInWithEmail();
  };

  const handleSignOut = () => {
    signOut();
  };

  //
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
  });

  // Basic app-mounting logic:
  useEffect(() => {
    // Jitsu Model:
    supabase.auth.onAuthStateChange(async (event, session) => {
      let newUser = supabase.auth.user();
      if (newUser) {
        await fetch("/api/auth/set", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        });
      }
      setUser(supabase.auth.user() || undefined);
    });

    //
    setLoading(false);
  }, []);

  //monitor the user
  useEffect(() => {
    //
    // supabase.auth.onAuthStateChange(

    //   )
    console.log(user);
    console.log("ID:", userId);
    // console.log("///UID:", userId);
    // console.log("***session:", session);
    if (user) setUserId(user.id || "789JKL");
  }, [user]);

  if (loading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div className="relative">
      <Head>
        <title>Personal Web Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cube_360-gs-24.png" />
      </Head>

      <header className="sticky top-0 z-50 w-full">
        <DaisyNavbar />
      </header>

      <main className="relative mx-auto overflow-auto md:max-w-7xl pb-32">
        <section className="bg-gray-300 flex justify-center">
          <Clock />
        </section>
        <section className=" bg-gray-500 flex justify-center">
          <ContentList />
        </section>
        <section>
          <div>
            <button onClick={handleSignUp}>signup</button>
            <button onClick={handleSignIn}>login</button>
            <button onClick={handleSignOut}>logout</button>
          </div>
          {/* <p>
            The Star Trek canon includes the Original Series, nine spin-off
            television series, and a film franchise; further adaptations also
            exist in several media. After the conclusion of the Original Series,
            the adventures of its characters continued in the 22-episode Star
            Trek: The Animated Series and six feature films. A television
            revival beginning in the 1980s saw three sequel series and a
            prequel: Star Trek: The Next Generation, following the crew of a new
            starship Enterprise a century after the original series;
          </p> */}
        </section>
        <section>
          <AccountAccess userId={userId} date={date} />
        </section>
      </main>

      <footer className="footerDiv">
        <a
          href="https://github.com/sgerpdx/personal-web-dashboard"
          target="_blank"
          rel="noreferrer"
          title="link to github repository"
        >
          <BsGithub />
        </a>
      </footer>
    </div>
  );
};

export default Home;
