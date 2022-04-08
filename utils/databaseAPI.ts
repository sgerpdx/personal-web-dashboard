// This file contains CRUD-route access to the Dashboard Server for the purpose of interfacing with the app-native postgresSQL database

const databaseURL: string = "https://agile-refuge-37723.herokuapp.com/api/v1";
//const databaseURL: string = "http://localhost:3100/api/v1/";

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

export async function getSingleBookmark(url = `${databaseURL}/bookmarks/6`) {
  const response = await fetch(`${url}`, {
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
    bookmarkTitle: "The Bowling Club",
    bookmarkURL: "https://www.redbeardbowling.io/",
    dateCreated: "2022-04-08",
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

export async function updateBookmark(
  url = `${databaseURL}/bookmarks/6`,
  data = {
    id: 6,
    bookmarkTitle: "The AV Yacht Club",
    bookmarkURL: "https://www.avclub.com/",
    dateCreated: "2022-04-06",
  }
) {
  const response = await fetch(`${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data),
  });
  console.log("Fetch Test Res:", response.json);
  return response.json();
}

export async function deleteBookmark(url = `${databaseURL}/bookmarks/7`) {
  const response = await fetch(`${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
  console.log("Fetch Test Res:", response.json);
  return response.json();
}
