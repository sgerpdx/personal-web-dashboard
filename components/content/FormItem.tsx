import React, { useEffect } from "react";
import { useFormik } from "formik";
import { saveBookmark } from "../../utils/databaseAPI";
import { BookmarkItem } from "../../data/interfaces";

export default function FormItem({
  formLabel,
  setVariable,
  divStyle,
  dataBsDismiss,
}: {
  formLabel: string;
  setVariable: React.Dispatch<
    React.SetStateAction<{ bookmarkTitle: string; bookmarkURL: string }>
  >;
  divStyle: string;
  dataBsDismiss: string;
}) {
  const date: string = "2022-04-09";
  // Define formik with specific values per the props from ContentList
  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
    },
    onSubmit: (values) => {
      console.log("Current active values:", values);
      setVariable({
        bookmarkTitle: formik.values.title,
        bookmarkURL: formik.values.text,
      });
      saveBookmark(
        { bookmarkTitle: formik.values.title, bookmarkURL: formik.values.text },
        date
      );
    },
  });

  return (
    <div className={divStyle}>
      <h2>{formLabel}</h2>
      <form onSubmit={formik.handleSubmit}>
        <label className="px-4" htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label className="px-4" htmlFor="text">
          URL:
        </label>
        <input
          type="text"
          id="text"
          name="text"
          onChange={formik.handleChange}
          value={formik.values.text}
        />

        <button type="submit" className="btn" data-bs-dismiss={dataBsDismiss}>
          Submit
        </button>
      </form>
    </div>
  );
}
