import supabase from "./supabaseClient";

// Add functions for signup + login + logout with email

export const signUpWithEmail = async () => {
  const { user, session, error } = await supabase.auth.signUp({
    email: "example@email.com",
    password: "example-password",
  });
};

export const signInWithEmail = async () => {
  const { user, error } = await supabase.auth.signIn({
    email: "example@email.com",
    password: "example-password",
  });
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
};

//module.exports = { signUpWithEmail, signInWithEmail, signOut };

// Pseudo-code for formik signup

const initialValuesSU = {
  email: "",
  password: "",
};

// feed into signUpWithEmail function:

// Pseudo-code for formik user-creation (SQL)

const initialValuesUS = {
  id: "",
  moniker: "",
  timezone: 0,
  lang: "",
};

// feed into the user equivalent of the saveBookmark function

// id -- comes from supbabase 'get user'
// moniker entered by user in form
// timezone -- comes from date
// lang -- chosen by user in dropdown menu in form
