import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import UserProfileForm from "./UserProfileForm";
import { SignUpItem, UserProfile } from "../../data/interfaces";
import { addUser } from "../../utils/databaseAPI";

//
// Supabase Auth Functions
import { signOut } from "../../utils/supabase/supabase";
import AccessForm from "./AccessForm";

export default function AccountAccess({
  userId,
  date,
}: {
  userId: string;
  date: Date;
}) {
  //
  const [authUser, setAuthUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);
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
  const currentTimezone: number = date.getTimezoneOffset() / 60;

  //
  const handleSignOut = () => {
    signOut();
  };

  const handleInfoUpdate = () => {};

  //   useEffect(() => {
  //     addUser({
  //       id: userProfile.id,
  //       moniker: userProfile.moniker,
  //       timezone: userProfile.timezone,
  //       lang: userProfile.lang,
  //     });
  //   }, [userId]);

  return (
    <div className="bg-frappetan text-darkmaroon">
      <h1>Login for Human</h1>
      {/* <SignUpForm info={signUpInfo} setVariable={setSignUpInfo} /> */}
      <AccessForm info={signUpInfo} setVariable={setSignUpInfo} />
      <UserProfileForm
        userId={userId}
        timezone={currentTimezone}
        setVariable={setUserProfile}
      />
    </div>
  );
}
