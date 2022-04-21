// This file contains CRUD-route access to the Dashboard Server for the purpose of interfacing with the app-native postgresSQL database
import { BookmarkItem, UserProfile } from "../data/interfaces";

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

export async function getBookmarksByUser(url, userId) {
  const response = await fetch(`${url}/bookmarks/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
  console.log("Fetch Test Res:", response.json);
  return response.json();
}

// This one needs to be made dynamic but is not being used yet:
// export async function getSingleBookmark(url = `${databaseURL}/bookmarks/6`) {
//   const response = await fetch(`${url}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       //'Content-Type': 'application/x-www-form-urlencoded'
//     },
//   });
//   console.log("Fetch Test Res:", response.json);
//   return response.json();
// }

// export async function addFetchBookmarks(
//   url = `${databaseURL}/bookmarks`,
//   data = {
//     bookmarkTitle: "The Bowling Club",
//     bookmarkURL: "https://www.redbeardbowling.io/",
//     dateCreated: "2022-04-08",
//   }
// ) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       //'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: JSON.stringify(data),
//   });
//   console.log("Fetch Test Res:", response.json);
//   return response.json();
// }

export async function saveBookmark(
  bookmark: BookmarkItem,
  date: string,
  userId: string
) {
  const data = {
    bookmarkTitle: bookmark.bookmarkTitle,
    bookmarkURL: bookmark.bookmarkURL,
    dateCreated: date,
    userId: userId,
  };
  const response = await fetch(`${databaseURL}/bookmarks`, {
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

// User Profile creation:
export async function addUser(user: UserProfile) {
  const data = {
    id: user.id,
    moniker: user.moniker,
    timezone: user.timezone,
    lang: user.lang,
  };
  const response = await fetch(`${databaseURL}/users`, {
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

export async function getUserById(url, userId) {
  const response = await fetch(`${url}/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
  console.log("Fetch Test Res:", response.json);
  return response.json();
}
