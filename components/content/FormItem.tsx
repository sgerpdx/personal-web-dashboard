import React from "react";
import { useFormik } from "formik";

export default function FormItem({
  formLabel,
  setVariable,
  divStyle,
}: {
  formLabel: string;
  setVariable: React.Dispatch<
    React.SetStateAction<{ bookmarkTitle: string; bookmarkURL: string }>
  >;
  divStyle: string;
}) {
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
      
    },
  });

  return (
    <div className={divStyle}>
      <h2>{formLabel}:</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          name="text"
          onChange={formik.handleChange}
          value={formik.values.text}
        />

        <button type="submit" className="bg-green-100">
          Submit
        </button>
      </form>
    </div>
  );
}
