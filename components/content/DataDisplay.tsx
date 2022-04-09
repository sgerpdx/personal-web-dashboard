import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BookmarkItem, NewsResponse } from "../../data/interfaces";

export default function DataDisplay({
  dataLabel,
  dataContents,
  divStyle,
}: {
  dataLabel: string;
  dataContents: Array<BookmarkItem>;
  divStyle: string;
}) {
  console.log(dataContents);

  if (!dataContents) return <div>Loading Bookmarks...</div>;

  return (
    <>
      <div className={divStyle}>
        <h3>{dataLabel}</h3>
        {dataContents.map((bookmark) => {
          return (
            <div key={Math.random()}>
              {" "}
              <p>Title: {bookmark.bookmarkTitle}</p>
              <Link href={bookmark.bookmarkURL}>
                <p>URL: {bookmark.bookmarkURL}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
