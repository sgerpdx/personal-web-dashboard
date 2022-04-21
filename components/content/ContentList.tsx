import React, { useState, useEffect, SyntheticEvent } from "react";

// React Icons
import { BiRefresh } from "react-icons/bi";
import { RiBookmarkFill, RiNewspaperFill } from "react-icons/ri";
import { IoMdCreate, IoMdRefresh } from "react-icons/io";

// Fetching
import { getBookmarksByUser } from "../../utils/databaseAPI";
import { getNews } from "../../utils/externalAPI";

// Interfaces
import {
  BookmarkItem,
  NewsResponse,
  CollapseSettings,
} from "../../data/interfaces";

// Components
import ContentItem from "./ContentItem";
import DataDisplay from "./DataDisplay";
import FormItem from "./FormItem";

export default function ContentList({
  userId,
  date,
}: {
  userId: string;
  date: Date;
}) {
  //
  // ***State Variables***
  // Object variable for a bookmark to save to db -- currently unused but may need:
  const [currentBookmark, setCurrentBookmark] = useState<BookmarkItem>({
    bookmarkTitle: "",
    bookmarkURL: "",
  });
  const [bookmarkData, setBookmarkData] = useState<Array<BookmarkItem>>([]);
  const [newsData, setNewsData] = useState<Array<NewsResponse>>([]);
  const databaseURL: string = "https://agile-refuge-37723.herokuapp.com/api/v1";

  // Reload bookmarks list (invoke to update when new bookmark is saved)
  const handleBookmarksRefresh = async () => {
    const savedBookmarks = await getBookmarksByUser(databaseURL, userId);
    setBookmarkData(savedBookmarks);
    setCurrentBookmark({
      bookmarkTitle: "",
      bookmarkURL: "",
    });
  };

  const clearBookmarksData = () => {
    setBookmarkData([]);
  };

  // Load bookmarks (db) and news(API) from server on component mount
  useEffect(() => {
    // Clear stored bookmarks
    clearBookmarksData();
    // Fetch bookmarks
    async function loadBookmarks() {
      const savedBookmarks = await getBookmarksByUser(databaseURL, userId);
      setBookmarkData(savedBookmarks);
    }
    // Fetch news -- keep inactive during dev b/c request limits
    async function loadNews() {
      const response = await getNews();
      setNewsData(response);
    }
    loadBookmarks();
    loadNews();
  }, []);

  // Dev logging to keep track of server responses -- delete before production
  useEffect(() => {
    handleBookmarksRefresh();
  }, [userId]);

  return (
    <main className="flex flex-col align-middle md:flex-row md:justify-center w-11/12 md:w-4/5 h-max">
      <section className="flex flex-col justify-start align-middle w-full md:w-2/4">
        {/* news section */}
        <div className="newsDiv">
          <div tabIndex={0} className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="newsLabel cursor-pointer collapse-title">
              <RiNewspaperFill className="mx-2" />
              News
            </div>

            <div className="collapse-content relative transition-all  overflow-hidden">
              <ContentItem newsData={newsData} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-start align-middle w-full md:w-2/4">
        {/* bookmarks section */}
        <div className="bookmarksDiv">
          <div tabIndex={0} className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="bookmarksLabel cursor-pointer collapse-title">
              <RiBookmarkFill className="mx-2" />
              Bookmarks
            </div>

            <div className="collapse-content relative overflow-hidden transition-all duration-700">
              <div>
                <nav className="bg-blue-400 flex flex-row justify-end px-6 text-black h-7">
                  {/* refresh icon for eventual re-loading of bookmarks list */}
                  <button
                    onClick={handleBookmarksRefresh}
                    className="mr-4 text-lg"
                    title="refresh bookmarks"
                  >
                    <IoMdRefresh />
                  </button>

                  {/* pencil icon button to launch FormItem modal */}
                  <button className="mr-4 text-lg" title="add new bookmark">
                    <label htmlFor="my-modal" className="cursor-pointer">
                      <IoMdCreate />
                    </label>
                  </button>

                  {/* container for FormItem bookmark save modal */}
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <input
                      type="checkbox"
                      id="my-modal"
                      className="modal-toggle"
                    />
                    <div className="flex flex-col modal-box border-4 border-solid border-frappetan text-darkmaroon">
                      <label
                        htmlFor="my-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2 bg-darkmaroon text-customwhite"
                      >
                        ✕
                      </label>
                      <FormItem
                        formLabel="New Bookmark:"
                        setVariable={setCurrentBookmark}
                        divStyle="formDiv"
                        dataBsDismiss="modal"
                        userId={userId}
                      />
                      <div className="modal-action">
                        {/* <label
                          htmlFor="my-modal"
                          className="btn bg-darkmaroon text-customwhite"
                        >
                          Close
                        </label> */}
                      </div>
                    </div>
                  </div>
                </nav>

                {/* display for saved bookmarks */}
                <h3 className="bg-blue-200 text-black h-8">Saved Bookmarks:</h3>
                <DataDisplay
                  dataLabel="Saved Bookmarks:"
                  dataContents={bookmarkData}
                  divStyle="overflow-auto bg-blue-100 p-4 h-56"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
