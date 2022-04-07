import React from "react";
import useSWR from "swr";

// const bookmarksURL =
//   "https://agile-refuge-37723.herokuapp.com/api/v1/bookmarks";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function SWRTEST() {
  const { data, error } = useSWR(
    "https://agile-refuge-37723.herokuapp.com/api/v1/bookmarks",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <div>hello bookmark {data[0].bookmarkTitle}!</div>;
}
