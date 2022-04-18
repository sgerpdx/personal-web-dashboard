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
