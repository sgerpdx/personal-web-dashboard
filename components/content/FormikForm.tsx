//// This component is intended as a reusable/universal form that can be used for either bookmarks or login -- HOWEVER due to formik's 'formik.values.[___]' syntax it seems that the form setup needs to be hardcoded specifically for each use case;
//// Therefore -- this file is currently not being used (see FormItem or AccessForm instead).
import React, { useState } from "react";
import supabase from "../../utils/supabase/supabaseClient";
import { useFormik } from "formik";
import { SignUpItem } from "../../data/interfaces";

export default function FormikForm({
  formLabel,
  formStyle,
  inputStyle,
  placeholderText,
  formInputs,
  userInfo,
  setVariable,
  version,
}: {
  formLabel: string;
  formStyle: string;
  inputStyle: string;
  placeholderText: string;
  formInputs: {
    label: string;
    keyword: string;
    type: string;
    active: boolean;
  }[];
  userInfo: SignUpItem;
  setVariable: React.Dispatch<
    React.SetStateAction<{ email: string; password: string }>
  >;
  version: string;
}) {
  // Local state variables:
  const [isExistingUser, setIsExistingUser] = useState(false);
  //
  const handleAccessToggle = () => {
    setIsExistingUser(!isExistingUser);
  };

  // Supabase Auth Function to Sign Up:
  const signUpWithEmail = async (newEmail: string, newPassword: string) => {
    const { user, session, error } = await supabase.auth.signUp({
      email: newEmail,
      password: newPassword,
    });
  };

  // Function to Sign In if already has account:
  const signInWithEmail = async (newEmail: string, newPassword: string) => {
    const { user, error } = await supabase.auth.signIn({
      email: newEmail,
      password: newPassword,
    });
  };

  //
  const submitSupabaseAuth = (email: string, password: string) => {
    isExistingUser
      ? signInWithEmail(email, password)
      : signUpWithEmail(email, password);
  };

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

      // setVariable
      if (version === "user") {
        setVariable({
          email: formik.values.email,
          password: formik.values.password,
        });
        // Supabase signup/signin
        submitSupabaseAuth(formik.values.email, formik.values.password);
      }

      // Reset form values on submit (can call initialValues?)
      formik.values.email = "";
      formik.values.password = "";
      formik.values.textOne = "";
      formik.values.textTwo = "";
    },
  });

  return (
    <div className={formStyle}>
      {isExistingUser ? (
        <h1 className="text-lg font-bold">User Login:</h1>
      ) : (
        <h1 className="text-lg font-bold">{formLabel}:</h1>
      )}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center align-middle"
      >
        <div>
          {formInputs.map((input) => {
            if (input.active) {
              const inputValue = Object.values(formik.values)[counter];
              //const inputKey = Object.keys(formik.values)[counter];
              console.log("FV:", formik.values);
              //const inputValue = formik.values.;
              const newInput = (
                <div key={Math.random()}>
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
            {isExistingUser ? <p>Login</p> : <p>Sign Up</p>}
          </button>
        </div>
      </form>
      <nav>
        {isExistingUser ? (
          <p>
            already logged in?{" "}
            <span
              onClick={handleAccessToggle}
              className="cursor-pointer font-bold"
            >
              sign up
            </span>
          </p>
        ) : (
          <p>
            already signed up?{" "}
            <span
              onClick={handleAccessToggle}
              className="cursor-pointer font-bold"
            >
              login
            </span>
          </p>
        )}
      </nav>
    </div>
  );
}
