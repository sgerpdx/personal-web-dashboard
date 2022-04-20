import React, { useState } from "react";
import supabase from "../../utils/supabase/supabaseClient";
import { useFormik } from "formik";
import { SignUpItem, UserProfile } from "../../data/interfaces";

export default function AccessForm({
  info,
  setVariable,
}: {
  info: SignUpItem;
  setVariable: React.Dispatch<
    React.SetStateAction<{ email: string; password: string }>
  >;
}) {
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

  //
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Current active values:", values);
      setVariable({
        email: formik.values.email,
        password: formik.values.password,
      });
      submitSupabaseAuth(formik.values.email, formik.values.password);
      formik.values.email = "";
      formik.values.password = "";
    },
  });

  //
  return (
    <>
      <div className="formDivAccess">
        {isExistingUser ? (
          <h1 className="text-lg font-bold">User Sign-In:</h1>
        ) : (
          <h1 className="text-lg font-bold">User Sign-Up:</h1>
        )}
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center align-middle"
        >
          <div>
            {" "}
            <label className="px-4" htmlFor="email">
              email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter here"
              className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div>
            {" "}
            <label className="px-4" htmlFor="password">
              password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="enter here"
              className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <div className="flex flex-row justify-center align-baseline pt-2">
            {" "}
            <button
              type="submit"
              className="btn bg-darkmaroon text-customwhite w-24 h-12"
              data-bs-dismiss=""
            >
              {isExistingUser ? <p>Sign In</p> : <p>Sign Up</p>}
            </button>
          </div>
        </form>
        <nav>
          <p>
            already signed-up?{" "}
            <span
              onClick={handleAccessToggle}
              className="cursor-pointer font-bold"
            >
              login
            </span>
          </p>
        </nav>
      </div>
    </>
  );
}
