import React from "react";
import { useFormik } from "formik";
import { BookmarkItem, NoteItem } from "../../data/interfaces";
import { Interface } from "readline";

// May need to define the setVariable as such:
//// setVariable: React.Dispatch<React.SetStateAction<{ propOne: string; propTwo: string }>>

export default function FormItem({
  formLabel,
  idOne,
  idTwo,
  variableObject,
  setVariable,
}: {
  formLabel: string;
  idOne: string;
  idTwo: string;
  variableObject: { title: string; text: string };
  setVariable: React.Dispatch<
    React.SetStateAction<{ title: string; text: string }>
  >;
}) {
  // Define the two properties on the state variable object
  // This is unnecessary if the bookmark/note interfaces have the same keys
  //   const variableObjectArr = Object.values(variableObject);
  //   const statePropOne = variableObjectArr[0];
  //   const statePropTwo = variableObjectArr[1];

  // Define formik with specific values per the props from ContentList
  const formik = useFormik({
    initialValues: {
      idOne: "",
      idTwo: "",
    },
    onSubmit: (values) => {
      console.log("Current active values:", values);
      setVariable({
        title: formik.values.idOne,
        text: formik.values.idTwo,
      });
    },
  });

  return (
    <div className="bg-blue-300 p-4">
      <h2>{formLabel}:</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor={idOne}>{idOne}</label>
        <input
          type="text"
          id={idOne}
          name={idOne}
          onChange={formik.handleChange}
          value={formik.values.idOne}
        />

        <label htmlFor={idTwo}>{idTwo}</label>
        <input
          type="text"
          id={idTwo}
          name={idTwo}
          onChange={formik.handleChange}
          value={formik.values.idTwo}
        />

        <button type="submit" className="bg-green-100">
          Submit
        </button>
      </form>
    </div>
  );
}
