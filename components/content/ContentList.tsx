import React, { useState, useEffect } from "react";
// Tailwind Elements -- for accordion and modal
import "tw-elements";

// React Icons
import { BiRefresh } from "react-icons/bi";
import { RiBookmarkFill, RiNewspaperFill } from "react-icons/ri";
import { IoMdCreate } from "react-icons/io";

// Fetching
import { getFetchBookmarks } from "../../utils/databaseAPI";
import { getNews } from "../../utils/externalAPI";

// Interfaces
import { BookmarkItem, NewsResponse } from "../../data/interfaces";

// Components
import ContentItem from "./ContentItem";
import DataDisplay from "./DataDisplay";
import FormItem from "./FormItem";

export default function ContentList() {
  //
  // ***State Variables***
  // Object variable for a bookmark to save to db -- currently unused but may need:
  const [currentBookmark, setCurrentBookmark] = useState<BookmarkItem>({
    bookmarkTitle: "",
    bookmarkURL: "",
  });
  const [bookmarkData, setBookmarkData] = useState<Array<BookmarkItem>>([]);
  const [newsData, setNewsData] = useState<Array<NewsResponse>>([]);

  // Reload bookmarks list (invoke to update when new bookmark is saved)
  const handleBookmarksRefresh = async () => {
    const savedBookmarks = await getFetchBookmarks();
    setBookmarkData(savedBookmarks);
  };

  // Load bookmarks (db) and news(API) from server on component mount
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

  // Dev logging to keep track of server responses -- delete before production
  useEffect(() => {
    console.log("bookmarkData:", bookmarkData);
    console.log("newsData:", newsData);
  }, [bookmarkData, newsData]);

  return (
    <section className="flex flex-col align-middle md:flex-row md:justify-center w-11/12 md:w-4/5 h-max">
      {/* news section */}
      <div className="flex flex-col justify-start text-white w-full">
        <nav className="bg-pink-500 flex flex-row w-full h-10">
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
          <ContentItem newsData={newsData} />
        </div>
      </div>

      {/* bookmarks section */}
      <div className="flex flex-col text-white w-full">
        <nav className="bg-blue-500 flex flex-row w-full h-10">
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
          <nav className="bg-blue-400 flex flex-row justify-end px-6 text-black h-7">
            {/* refresh icon for eventual re-loading of bookmarks list */}
            <button onClick={handleBookmarksRefresh}>
              <BiRefresh />
            </button>

            {/* pencil icon button to launch FormItem modal */}
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
                      <button type="button" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="relative">
                      <FormItem
                        formLabel="New Bookmark"
                        setVariable={setCurrentBookmark}
                        divStyle="formDiv"
                        dataBsDismiss="modal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* display of the list of saved bookmarks */}
          <h3 className="bg-blue-200 text-black h-8">Saved Bookmarks:</h3>
          <DataDisplay
            dataLabel="Saved Bookmarks:"
            dataContents={bookmarkData}
            divStyle="overflow-auto bg-blue-100 p-4 h-56"
          />
        </div>
      </div>
    </section>
  );
}
