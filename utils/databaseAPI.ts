import fetch from "node-fetch";

const databaseURL: string =
  "http://localhost:3100/api/v1/bookmarks";

export const getImage = async () => {
  const response = await fetch(`${databaseURL}`);
  const body = await response.text();

  console.log("Bookmarks fetch:", body);
};
