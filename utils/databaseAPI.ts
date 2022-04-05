import fetch from "node-fetch";

const databaseURL: string =
  "https://agile-refuge-37723.herokuapp.com/api/v1/bookmarks";

export const getImage = async () => {
  const response = await fetch(`${databaseURL}`);
  const body = await response.text();

  console.log("Bookmarks fetch:", body);
};
