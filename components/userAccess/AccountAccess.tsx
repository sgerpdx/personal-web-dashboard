import React, { useState, useEffect } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { SignUpItem, UserProfile } from "../../data/interfaces";

//
// Supabase Auth Functions
import {
  signUpWithEmail,
  signInWithEmail,
  signOut,
} from "../../utils/supabase/supabase";

export default function AccountAccess() {
  //
  const [authUser, setAuthUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState<SignUpItem>({
    email: "",
    password: "",
  });
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: "",
    moniker: "",
    timezone: 0,
    lang: "",
  });

  //
  const handleSignUp = () => {
    signUpWithEmail();
  };

  const handleSignIn = () => {
    signInWithEmail();
  };

  const handleSignOut = () => {
    signOut();
  };

  const handleInfoUpdate = () => {

  }

  return (
    <div className="bg-frappetan text-darkmaroon">
      <h1>Login for Human</h1>
      <SignUpForm info={signUpInfo} setVariable={setSignUpInfo} />
      {/* <SignInForm submitSignIn={handleSignIn} setVariable={}/> */}
    </div>
  );
}
