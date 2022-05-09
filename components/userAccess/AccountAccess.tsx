import React, { useState } from "react";
import UserProfileForm from "./UserProfileForm";
import { SignUpItem, UserProfile } from "../../data/interfaces";
import AccessForm from "./AccessForm";
import FormikForm from "../inactive/FormikForm";

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

  // State/Props for testing refactored FormikForm component:
  const formLabel: string = "User Signup";
  const formStyle = "formDivAccess";
  const inputStyle =
    "input border border-solid border-darkmaroon text-customblack rounded-none w-64 h-8 m-2";
  const placeholderText = "enter here";
  const formInputs = [
    {
      label: "email address",
      keyword: "email",
      type: "email",
      active: true,
    },
    {
      label: "password",
      keyword: "password",
      type: "password",
      active: true,
    },
    {
      label: "page title",
      keyword: "title",
      type: "text",
      active: false,
    },
    {
      label: "page URL",
      keyword: "url",
      type: "text",
      active: false,
    },
  ];

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
