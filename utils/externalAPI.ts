import fetch from "node-fetch";

const unsplashURL: string =
  "https://api.unsplash.com/photos/random/?client_id=";

// interface ImageRes {
//   nom: "string";
// }

export const getImage = async () => {
  const response = await fetch(
    `${unsplashURL}${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const body = await response.text();

  console.log("Image fetch:", body);
};

