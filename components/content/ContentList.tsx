import React, { useState, useEffect, MouseEventHandler } from "react";

// Fetching
import { getFetchBookmarks } from "../../utils/databaseAPI";
import { getNews } from "../../utils/externalAPI";

// Interfaces
import { NewsItem, BookmarkItem, NewsResponse } from "../../data/interfaces";

// Components
import ContentItem from "./ContentItem";
import DataDisplay from "./DataDisplay";
import FormItem from "./FormItem";

// Data import for rendering test:
import { NewsData } from "../../data/newsData";

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
  const pageURL: string = window.location.href;
  const pageTitle: string = document.title;

  useEffect(() => {
    // Fetch bookmarks
    async function loadBookmarks() {
      const savedBookmarks = await getFetchBookmarks();
      setBookmarkData(savedBookmarks);
    }
    // Fetch news -- keep inactive during dev b/c request limits
    // async function loadNews() {
    //   const response = await getNews();
    //   setNewsData(response);
    // }
    loadBookmarks();
    // loadNews();
  }, []);

  useEffect(() => {
    console.log("//////Current Bookmark:", currentBookmark);
  }, [currentBookmark]);

  useEffect(() => {
    console.log("bookmarkData:", bookmarkData);
    console.log("newsData:", newsData);
  }, [bookmarkData, newsData]);

  return (
    <>
      <section>
        News
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
      </section>
      <section>
        Bookmarks
        <FormItem
          formLabel="New Bookmark"
          setVariable={setCurrentBookmark}
          divStyle="bg-blue-300 p-4"
        />
        <DataDisplay
          dataLabel="Saved Bookmarks:"
          dataContents={bookmarkData}
          divStyle="bg-blue-100 p-4"
        />
      </section>
    </>
  );
}
