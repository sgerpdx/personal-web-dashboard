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
  const stringValueReset = (str: string) => {
    return str = '';
  }
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
      formik.values.title = "";
      formik.values.text = "";
    },
  });

  return (
    <div className={divStyle}>
      <h2 className="text-lg font-bold">{formLabel}</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center align-middle"
      >
        <div>
          {" "}
          <label className="px-4" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="title"
            className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>

        <div>
          {" "}
          <label className="px-4" htmlFor="text">
            URL:
          </label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="url"
            className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
            onChange={formik.handleChange}
            value={formik.values.text}
          />
        </div>

        <div className="flex flex-row justify-center align-baseline pt-2">
          {" "}
          <button
            type="submit"
            className="btn bg-darkmaroon text-customwhite w-24 h-12"
            data-bs-dismiss={dataBsDismiss}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
