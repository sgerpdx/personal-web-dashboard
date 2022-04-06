import React, { useState, useEffect, MouseEventHandler } from "react";
// Interface imports
import { NewsItem, BookmarkItem } from "../../data/interfaces";
// Component imports
import ContentItem from "./ContentItem";
// Formik
import { useFormik } from "formik";

export default function ContentList({
  currentNewsItem,
  onClick,
}: {
  currentNewsItem: NewsItem;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const [currentBookmark, setCurrentBookmark] = useState<BookmarkItem>({
    bookmarkTitle: "",
    bookmarkURL: "",
  });

  // This hook allows management of the Formik form setup and submission
  const formik = useFormik({
    initialValues: {
      title: "",
      url: "",
    },
    onSubmit: (values) => {
      console.log("SuperV:", values);
      setCurrentBookmark({
        bookmarkTitle: formik.values.title,
        bookmarkURL: formik.values.url,
      });
    },
  });

  useEffect(() => {
    console.log("//////Boooookmaaaark:", currentBookmark);
  }, [currentBookmark]);

  console.log("Form Values:", formik.values);

  return (
    <>
      <section>
        <div className="bg-purple-300 text-blue-700 h-240 w-80">
          <h2>Content Items:</h2>
          <ContentItem currentNewsItem={currentNewsItem} />
          {/* <div>
            <form>
              <label>Bookmark a URL:</label>
              <input type="text" placeholder="title" />
              <input type="text" placeholder="URL" />
            </form>
            <button onClick={onClick}>Save</button>
          </div> */}
        </div>
        <div className="bg-blue-300 p-4">
          <h2>Bookmark Formik Submission Form:</h2>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />

            <label htmlFor="url">URL</label>
            <input
              type="text"
              id="url"
              name="url"
              onChange={formik.handleChange}
              value={formik.values.url}
            />

            <button type="submit" className="bg-green-100">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
