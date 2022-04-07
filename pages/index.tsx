import React, { useState, useEffect, SyntheticEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Utils function imports
import { getFetchBookmarks, addFetchBookmarks } from "../utils/databaseAPI";

// Interface imports
import { NewsItem, DailyData } from "../data/interfaces";

// Component imports
import Clock from "../components/Clock";
//import ImageOfDay from "../components/ImageOfDay";
import ContentList from "../components/content/ContentList";
//import UnsplashAPI from "../utils/swrHooks/unsplashAPI";
//import FormContentText from "../components/content/FormContentText";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [isWeekend, setIsWeekend] = useState<boolean>(false);
  // Additional desired state items:
  // dailyImage, lastNote, dailyNewsItem...some can be in the DailyData interface...just need to update and/or pull them out selectively

  // Local-native state object for index/home:
  const [currentDailyData, setCurrentDailyData] = useState<DailyData>({
    userName: "User",
    message: "Good day",
    numberOfTheDay: 7,
    letterOfTheDay: "A",
  });

  // State variable for the API image of the day:
  // const [dailyImageURL, setDailyImageURL] = useState<string>(
  //   "https://placekitten.com/200/300"
  // );

  // Here is the object-type format for the News API data:
  const [currentNewsItem, setCurrentNewsItem] = useState<NewsItem>({
    headline: "Super Cat Holds Place",
    articleText:
      "This weekend in Cleveland Ohio a cat held place in the parking lot of a local Dairy Queen.",
    thumbnailURL: "https://placekitten.com/200/300",
  });

  // Basic change handling demo
  const handleWeekendToggle = async () => {
    setIsWeekend(!isWeekend);
  };

  const handleFetchBookmarks = async () => {
    const fetchBookmarkData = await getFetchBookmarks();
    console.log("FETTTTTCH:", fetchBookmarkData);
  };

  const handleAddBookmark = async () => {
    const fetchBookmarkData = await addFetchBookmarks();
    console.log("Added Fetch BM:", fetchBookmarkData);
  };

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
    <div className={styles.container}>
      <Head>
        <title>Personal Web Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className="text-orange-700">
          {currentDailyData.message} {currentDailyData.userName}
        </h2>
        <ul className="bg-blue-500 text-white">
          <li>The number of the day is: {currentDailyData.numberOfTheDay}</li>
          <li>The letter of the day is: {currentDailyData.letterOfTheDay}</li>
        </ul>
        <button onClick={handleFetchBookmarks}>Fetch Bookmark</button>
        <Clock />
        <ContentList
          currentNewsItem={currentNewsItem}
          onClick={handleAddBookmark}
        />
      </main>

      <footer className={styles.footer}>
        <h4>This is the footer.</h4>
      </footer>
    </div>
  );
};

export default Home;
