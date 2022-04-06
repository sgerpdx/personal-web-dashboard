// This file contains CRUD-route access to the Dashboard Server

const databaseURL: string = "https://agile-refuge-37723.herokuapp.com/api/v1";

export async function getFetchBookmarks(url = `${databaseURL}/bookmarks`) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
  console.log("Fetch Test Res:", response.json);
  return response.json();
}

export async function addFetchBookmarks(
  url = `${databaseURL}/bookmarks`,
  data = {
    bookmarkTitle: "The AV Club",
    bookmarkURL: "https://www.avclub.com/",
    dateCreated: "2022-04-06",
  }
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data),
  });
  console.log("Fetch Test Res:", response.json);
  return response.json();
}
