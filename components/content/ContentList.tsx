import React, { useState, useEffect, MouseEventHandler } from "react";

// React Icons
import {
  BiMenu,
  BiRightArrow,
  BiLeftArrow,
  BiUpArrow,
  BiDownArrow,
  BiGlobe,
  BiMoon,
  BiRefresh,
} from "react-icons/bi";
import {
  RiBookmarkFill,
  RiBookmarkLine,
  RiNewspaperFill,
  RiNewspaperLine,
  RiMap2Line,
} from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { BsFillSunFill, BsGithub } from "react-icons/bs";

// Fetching
import { getFetchBookmarks } from "../../utils/databaseAPI";
import { getNews } from "../../utils/externalAPI";

// Interfaces
import { NewsItem, BookmarkItem, NewsResponse } from "../../data/interfaces";

// Components
import ContentItem from "./ContentItem";
import DataDisplay from "./DataDisplay";
import FormItem from "./FormItem";

export default function ContentList({
  currentNewsItem,
  onClick,
}: {
  currentNewsItem: NewsItem;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  // Object variable for a bookmark to save to db:
  const [currentBookmark, setCurrentBookmark] = useState<BookmarkItem>({
    bookmarkTitle: "",
    bookmarkURL: "",
  });
  const [bookmarkData, setBookmarkData] = useState<Array<BookmarkItem>>([]);
  const [newsData, setNewsData] = useState<Array<NewsResponse>>([]);

  // Grab the current page URL and title to auto-fill the 'save bookmark' form:
  // const pageURL: string = window.location.href;
  // const pageTitle: string = document.title;

  useEffect(() => {
    // Fetch bookmarks
    async function loadBookmarks() {
      const savedBookmarks = await getFetchBookmarks();
      setBookmarkData(savedBookmarks);
    }
    //Fetch news -- keep inactive during dev b/c request limits
    // async function loadNews() {
    //   const response = await getNews();
    //   setNewsData(response);
    // }
    loadBookmarks();
    //loadNews();
  }, []);

  useEffect(() => {
    console.log("bookmarkData:", bookmarkData);
    console.log("newsData:", newsData);
  }, [bookmarkData, newsData]);

  return (
    <section className="flex flex-col">
      <div>
        <RiNewspaperFill color="white" />
        News
        <BiRightArrow color="white" />
        <BiLeftArrow color="white" />
        {/* <div className="bg-purple-300 text-blue-700 h-240 w-80">
          <h2>Content Items:</h2>
          <ContentItem currentNewsItem={currentNewsItem} />
        </div> */}
        <ContentItem newsData={newsData} currentNewsItem={currentNewsItem} />
        {/* <div className="bg-orange-300">
          <p>
            Bookmark: {currentBookmark.bookmarkTitle} +{" "}
            {currentBookmark.bookmarkURL}
          </p>
          <p>{pageURL}</p>
          <p>{pageTitle}</p>
        </div> */}
      </div>
      <div>
        <RiBookmarkFill color="White" />
        Bookmarks
        <FormItem
          formLabel="New Bookmark"
          setVariable={setCurrentBookmark}
          divStyle="bg-blue-300 p-4"
        />
        <h3 className="bg-blue-100">Saved Bookmarks:</h3>
        <DataDisplay
          dataLabel="Saved Bookmarks:"
          dataContents={bookmarkData}
          divStyle="overflow-auto h-40 bg-blue-100 p-4"
        />
      </div>
    </section>
  );
}
