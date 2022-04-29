import React from "react";
import { useFormik } from "formik";

export default function FormikForm() {
  // Mock props:
  const formLabel = "Demographic Information";
  const inputQuantity = 3;
  const formStyle = "formStyle";
  const inputStyle = "inputStyle";
  const placeholderText = "enter here";

  // Input-specific props as single data array to map through
  // Schema is that indices 0 and 1 are email and password, 2-3 are text
  const formInputs = [
    {
      label: "Email Address",
      keyword: "email",
      type: "email",
      active: true,
    },
    {
      label: "Password",
      keyword: "password",
      type: "password",
      active: true,
    },
    {
      label: "Page Title",
      keyword: "title",
      type: "text",
      active: false,
    },
    {
      label: "Page URL",
      keyword: "url",
      type: "text",
      active: false,
    },
  ];

  // Local state variables:
  let counter = 0;
  //// NOTE: 'counter' exists specifically to help fill the value attribute of the input in the rendered form -- because this attribute is looking at formik's initialValues the syntax must take the form of 'formik.values.[value]' and the only way to grab that unique value while mapping is to identify it by its index in the target object (not its exact name, e.g. 'email' or 'textOne');
  //// IMPLEMENTATION: in the setup for the mapped input div, the variable 'inputValue' is derived using Object.keys on formik's values with the index specified by the current value of 'counter' (0 to begin; incremented each time);

  // Formik for mapping -- wait this may not be possible with Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      textOne: "",
      textTwo: "",
    },
    onSubmit: (values) => {
      console.log("Current active values:", values);

      // Call whatever database or useState setter functions need to be invoved with the Formik values, e.g. saveBookmark, setVariable (various) etc.

      // Reset form values on submit (can call initialValues?)
      formik.values.email = "";
      formik.values.password = "";
      formik.values.textOne = "";
      formik.values.textTwo = "";
    },
  });

  return (
    <div className={formStyle}>
      <h2 className="text-lg font-bold">{formLabel}</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center align-middle"
      >
        <div>
          {formInputs.map((input) => {
            if (input.active) {
              const inputValue = Object.keys(formik.values)[counter];
              const newInput = (
                <div>
                  {" "}
                  <label className="px-4" htmlFor="title">
                    {input.label}:
                  </label>
                  <input
                    type={input.type}
                    id={input.keyword}
                    name={input.keyword}
                    placeholder={placeholderText}
                    className={inputStyle}
                    onChange={formik.handleChange}
                    value={inputValue}
                  />
                </div>
              );
              counter++;
              return newInput;
            }
          })}
        </div>
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
