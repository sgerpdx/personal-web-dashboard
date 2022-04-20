import React, { useState, useEffect } from "react";
import supabase from "../../utils/supabase/supabaseClient";
import { useFormik } from "formik";
import { addUser } from "../../utils/databaseAPI";

//
const user = supabase.auth.user();
const session = supabase.auth.session();

export default function UserProfileForm({
  userId,
  timezone,
  setVariable,
}: {
  userId: string;
  timezone: number;
  setVariable: React.Dispatch<
    React.SetStateAction<{
      id: string;
      moniker: string;
      timezone: number;
      lang: string;
    }>
  >;
}) {
  const [currentUID, setCurrentUID] = useState<string>("abc123");

  //
  // supabase.auth.onAuthStateChange((event, session) => {
  //   const currentSession = session ?? null;
  //   if (currentSession) {
  //     setCurrentUID(session.user.id);
  //   }
  //   setCurrentUID(user.id);
  // });

  // Formik handler and submission framework:
  // This should only be active if the user has not yet created an account, i.e. they have just signed up for the first time:
  const formik = useFormik({
    initialValues: {
      id: "",
      moniker: "",
      timezone: timezone,
      lang: "en",
    },
    onSubmit: (values) => {
      console.log("Current active values:", values);

      // Update state:
      setVariable({
        id: userId || currentUID,
        moniker: formik.values.moniker,
        timezone: timezone,
        lang: "en",
      });

      // Add the user's info to the database:
      addUser({
        id: userId || currentUID,
        moniker: formik.values.moniker,
        timezone: timezone,
        lang: "en",
      });

      // Clear text from input onSubmit:
      formik.values.moniker = "";
    },
  });

  //   useEffect(() => {
  //     addUser({
  //       id: userProfile.id,
  //       moniker: userProfile.moniker,
  //       timezone: userProfile.timezone,
  //       lang: userProfile.lang,
  //     });
  //   }, [userId]);

  return (
    <>
      <div className="formDiv">
        <h2 className="text-lg font-bold">User Profile:</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center align-middle"
        >
          <div>
            {" "}
            <label className="px-4" htmlFor="email">
              name:
            </label>
            <input
              type="text"
              id="moniker"
              name="moniker"
              placeholder="enter username here"
              className="input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2"
              onChange={formik.handleChange}
              value={formik.values.moniker}
            />
          </div>

          <div className="flex flex-row justify-center align-baseline pt-2">
            {" "}
            <button
              type="submit"
              className="btn bg-darkmaroon text-customwhite w-24 h-12"
              data-bs-dismiss=""
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
