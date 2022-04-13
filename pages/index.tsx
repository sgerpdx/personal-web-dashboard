import React, { useState, useEffect, SyntheticEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/Home.module.css";

// React Icons
import { BsFillSunFill, BsGithub } from "react-icons/bs";
import { BiMenu, BiGlobe, BiMoon } from "react-icons/bi";

// Utils function imports
import {
  getFetchBookmarks,
  getSingleBookmark,
  addFetchBookmarks,
  updateBookmark,
  deleteBookmark,
} from "../utils/databaseAPI";

// Interfaces
import { NewsItem, DailyData } from "../data/interfaces";

// Components
import Clock from "../components/Clock";
import ContentList from "../components/content/ContentList";
import NewsTestFormat from "../components/inactive/NewsTestFormat";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [isWeekend, setIsWeekend] = useState<boolean>(false);

  // Local-native state object for index/home:
  const [currentDailyData, setCurrentDailyData] = useState<DailyData>({
    userName: "User",
    message: "Good day",
    numberOfTheDay: 7,
    letterOfTheDay: "A",
  });

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

  const handleGetSingleBookmark = async () => {
    const fetchBookmarkData = await getSingleBookmark();
    console.log("FETTTTTCH:", fetchBookmarkData);
  };

  const handleAddBookmark = async () => {
    const fetchBookmarkData = await addFetchBookmarks();
    console.log("Added Fetch BM:", fetchBookmarkData);
  };

  const handleUpdateBookmark = async () => {
    const data = await updateBookmark();
    console.log("///Updated Fetch BM:", data);
  };

  const handleDeleteBookmark = async () => {
    const data = await deleteBookmark();
    console.log("---Deleted Fetch BM:", data);
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
    <div>
      <Head>
        <title>Personal Web Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-orange-700 text-white flex flex-row justify-between px-20">
        <figure>☆</figure>
        <h1 className="font-autobus text-2xl">App Title or Greeting</h1>
        <figure>
          <BiMenu />
        </figure>
      </header>

      <main className="container mx-auto">
        {/* <section className="container w-640 min-w-360 sm:w-full flex-nowrap justify-center  bg-gray-100">
          {" "}
          <h2 className="text-orange-700">
            {currentDailyData.message} {currentDailyData.userName}
          </h2>
          <ul className="bg-blue-500 text-white">
            <li>The number of the day is: {currentDailyData.numberOfTheDay}</li>
            <li>The letter of the day is: {currentDailyData.letterOfTheDay}</li>
          </ul>
          <button onClick={handleFetchBookmarks}>Fetch All Bookmarks</button>
          <button onClick={handleGetSingleBookmark}>Fetch One Bookmark</button>
          <button onClick={handleAddBookmark}>Add Bookmark</button>
          <button onClick={handleUpdateBookmark}>Update Bookmark</button>
          <button onClick={handleDeleteBookmark}>Delete Bookmark</button>
        </section> */}
        <section className="container w-640 min-w-360 sm:w-full flex justify-center  bg-gray-300">
          <Clock />
        </section>
        <section className="container w-640 min-w-360 sm:w-full flex justify-center  bg-gray-500">
          <ContentList
            currentNewsItem={currentNewsItem}
            onClick={handleAddBookmark}
          />
        </section>
      </main>

      <footer className="bg-orange-700 text-white flex flex-row justify-end px-10">
        <p>github link</p>
        {/* <BsGithub /> */}
      </footer>
    </div>
  );
};

export default Home;
