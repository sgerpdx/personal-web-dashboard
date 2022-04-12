import React, { useState, useEffect, MouseEventHandler } from "react";
// Tailwind Elements -- for accordion and modal
import "tw-elements";

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

  // Grab the current page URL and title if needed:
  // const pageURL: string = window.location.href;
  // const pageTitle: string = document.title;

  const handleBookmarksRefresh = async () => {
    const savedBookmarks = await getFetchBookmarks();
    setBookmarkData(savedBookmarks);
  };

  useEffect(() => {
    // Fetch bookmarks
    async function loadBookmarks() {
      const savedBookmarks = await getFetchBookmarks();
      setBookmarkData(savedBookmarks);
    }
    //// Fetch news -- keep inactive during dev b/c request limits
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
    <section className="flex flex-col w-full">
      {/* news section */}
      <div className="bg-green-400 flex flex-col text-white w-full">
        <nav className="bg-pink-500 flex flex-row w-full">
          <button
            className="w-full text-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <RiNewspaperFill />
            News
          </button>
        </nav>
        <div
          id="collapseOne"
          className="relative overflow-hidden collapse transition-all duration-700"
        >
          <ContentItem newsData={newsData} currentNewsItem={currentNewsItem} />
        </div>
      </div>

      {/* bookmarks section */}
      <div className="bg-blue-500 flex flex-col text-white w-full">
        <nav className="bg-blue-500 flex flex-row w-full">
          <button
            className="w-full text-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <RiBookmarkFill color="White" />
            Bookmarks
          </button>
        </nav>
        <div
          id="collapseTwo"
          className="relative overflow-hidden collapse transition-all duration-700"
        >
          <nav className="bg-blue-400 flex flex-row justify-end px-6 text-black">
            {/* refresh icon for eventual re-loading of bookmarks list */}
            <button onClick={handleBookmarksRefresh}>
              <BiRefresh />
            </button>

            {/* create icon to launch FormItem modal */}
            <div>
              <div className="">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#formItemModal"
                  title="create new bookmark"
                >
                  <IoMdCreate />
                </button>
              </div>

              {/* FormItem modal */}
              <div
                className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="formItemModal"
                tabIndex={-1}
                aria-labelledby="formItemModalTitle"
                aria-modal="true"
                role="form"
              >
                <div className="modal-dialog modal-dialog-centered relative w-auto">
                  <div className="modal-content shadow-lg relative  w-full pointer-events-auto bg-white  text-current">
                    <div className="modal-header flex flex-shrink-0">
                      <h5 id="exampleModalScrollableLabel">
                        Enter New Bookmark:
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div className="relative">
                      <FormItem
                        formLabel="New Bookmark"
                        setVariable={setCurrentBookmark}
                        divStyle="formDiv"
                      />
                    </div>
                    <div>
                      <button className="bg-green-500 text-white" type="button">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <h3 className="bg-blue-200 text-black">Saved Bookmarks:</h3>

          {/* display of the list of saved bookmarks */}
          <DataDisplay
            dataLabel="Saved Bookmarks:"
            dataContents={bookmarkData}
            divStyle="overflow-auto h-40 bg-blue-100 p-4"
          />
        </div>
      </div>
    </section>
  );
}
