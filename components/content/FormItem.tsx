import React from "react";
import { useFormik } from "formik";
import { BookmarkItem, NoteItem } from "../../data/interfaces";
import { Interface } from "readline";

// May need to define the setVariable as such:
//// setVariable: React.Dispatch<React.SetStateAction<{ propOne: string; propTwo: string }>>

export default function FormItem({
  formLabel,
  setVariable,
  divStyle
}: {
  formLabel: string;
  setVariable: React.Dispatch<
    React.SetStateAction<{ title: string; text: string }>
  >;
  divStyle: string;
}) {
  // Define the two properties on the state variable object
  // This is unnecessary if the bookmark/note interfaces have the same keys
  //   const variableObjectArr = Object.values(variableObject);
  //   const statePropOne = variableObjectArr[0];
  //   const statePropTwo = variableObjectArr[1];

  // Define formik with specific values per the props from ContentList
  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
    },
    onSubmit: (values) => {
      console.log("Current active values:", values);
      setVariable({
        title: formik.values.title,
        text: formik.values.text,
      });
    },
  });

  console.log("Form Values:", formik.values);

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
