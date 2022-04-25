import React, { useState } from "react";
import UserProfileForm from "./UserProfileForm";
import { SignUpItem, UserProfile } from "../../data/interfaces";
import AccessForm from "./AccessForm";

export default function AccountAccess({
  userId,
  date,
}: {
  userId: string;
  date: Date;
}) {
  // State Variables -----
  // For Supabase Auth:
  const [signUpInfo, setSignUpInfo] = useState<SignUpItem>({
    email: "",
    password: "",
  });
  // For Database Profile:
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: "",
    moniker: "",
    timezone: 0,
    lang: "",
  });
  const currentTimezone: number = date.getTimezoneOffset() / 60;
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-frappetan text-darkmaroon w-96 flex flex-col justify-center align-middle">
      <AccessForm info={signUpInfo} setVariable={setSignUpInfo} />
      <UserProfileForm
        userId={userId}
        timezone={currentTimezone}
        setVariable={setUserProfile}
      />
    </div>
  );
}
