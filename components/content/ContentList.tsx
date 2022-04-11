import React, { useState, useEffect, MouseEventHandler } from "react";
import 'tw-elements';

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
import { IoMdCreate } from "react-icons/io";

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
      {/* news section */}
      <div className="bg-pink-500 flex flex-col text-white">
        <nav className="flex flex-row">
          <RiNewspaperFill />
          <h3>
            <button className="accordion-button" type="button" data-bs-toggle="collapse">News</button>
          </h3>
        </nav>

        <ContentItem newsData={newsData} currentNewsItem={currentNewsItem} />
      </div>

      {/* bookmarks section */}
      <div className="bg-blue-500 flex flex-col text-white">
        <nav className="flex flex-row">
          <RiBookmarkFill color="White" />
          <h3>Bookmarks</h3>
        </nav>
        <nav className="bg-blue-400 flex flex-row justify-end px-6 text-black">
          <BiRefresh />
            {" "}
            <IoMdCreate />
        </nav>
        <FormItem
          formLabel="New Bookmark"
          setVariable={setCurrentBookmark}
          divStyle="formDiv"
        />
        <h3 className="bg-blue-200 text-black">Saved Bookmarks:</h3>
        <DataDisplay
          dataLabel="Saved Bookmarks:"
          dataContents={bookmarkData}
          divStyle="overflow-auto h-40 bg-blue-100 p-4"
        />
      </div>
    </section>
  );
}
