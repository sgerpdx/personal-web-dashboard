import React from "react";
import { useFormik } from "formik";

export default function FormikForm() {
  // Mock props:
  const formLabel = "Demographic Information";
  const inputQuantity = 3;
  const inputFormStyle = "divStyle";
  const placeholderText = "enter here";
  const inputOne = {
    labelOne: "Page Title",
    keywordOne: "title",
    typeOne: "text",
  };
  //const { labelOne, keywordOne, typeOne } = inputOne;
  const inputTwo = {
    labelTwo: "Email Address",
    keywordTwo: "email",
    typeTwo: "email",
  };
  //const { labelTwo, keywordTwo, typeTwo } = inputTwo;
  const inputThree = {
    labelThree: "Age",
    keywordThree: "age",
    typeThree: "number",
  };
  //const { labelThree, keywordThree, typeThree } = inputThree;

  // Local state variables:

  // Formik setup:
  const formik = useFormik({
    initialValues: {
      keywordOne: "",
      keywordTwo: "",
      keywordThree: 0,
    },
    onSubmit: (values) => {
      console.log("Current active values:", values);

      // Call whatever database or useState setter functions need to be invoved with the Formik values, e.g. saveBookmark, setVariable (various) etc.

      // Reset form values on submit (can call initialValues?)
      formik.values.keywordOne = "";
      formik.values.keywordTwo = "";
      formik.values.keywordThree = 0;
    },
  });

  return (
    <div className={inputFormStyle}>
      <h2 className="text-lg font-bold">{formLabel}</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center align-middle"
      >
        <div>
          {" "}
          <label className="px-4" htmlFor="title">
            {inputOne.labelOne}:
          </label>
          <input
            type={inputOne.typeOne}
            id={inputOne.keywordOne}
            name={inputOne.keywordOne}
            placeholder={placeholderText}
            className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
            onChange={formik.handleChange}
            value={formik.values.keywordOne}
          />
        </div>

        {inputQuantity > 1 ? (
          <div>
            {" "}
            <label className="px-4" htmlFor="title">
              {inputTwo.labelTwo}:
            </label>
            <input
              type={inputTwo.typeTwo}
              id={inputTwo.keywordTwo}
              name={inputTwo.keywordTwo}
              placeholder={placeholderText}
              className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
              onChange={formik.handleChange}
              value={formik.values.keywordTwo}
            />
          </div>
        ) : (
          <></>
        )}

        {inputQuantity > 2 ? (
          <div>
            {" "}
            <label className="px-4" htmlFor="title">
              {inputThree.labelThree}:
            </label>
            <input
              type={inputThree.typeThree}
              id={inputThree.keywordThree}
              name={inputThree.keywordThree}
              placeholder={placeholderText}
              className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
              onChange={formik.handleChange}
              value={formik.values.keywordThree}
            />
          </div>
        ) : (
          <></>
        )}

        {/* <div>
          {" "}
          <label className="px-4" htmlFor="title">
            {inputFour.labelFour}:
          </label>
          <input
            type={inputFour.typeFour}
            id={inputFour.keywordFour}
            name={inputFour.keywordFour}
            placeholder={placeholderText}
            className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
            onChange={formik.handleChange}
            value={formik.values.keywordFour}
          />
        </div> */}

        {/* <div>
          {" "}
          <label className="px-4" htmlFor="title">
            {inputFive.labelFive}:
          </label>
          <input
            type={inputFive.typeFive}
            id={inputFive.keywordFive}
            name={inputFive.keywordFive}
            placeholder={placeholderText}
            className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
            onChange={formik.handleChange}
            value={formik.values.keywordFive}
          />
        </div> */}

        <div className="flex flex-row justify-center align-baseline pt-2">
          {" "}
          <button
            type="submit"
            className="btn bg-darkmaroon text-customwhite w-24 h-12"
            data-bs-dismiss="modal"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
