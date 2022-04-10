import React from "react";
import Link from "next/link";
import { BookmarkItem } from "../../data/interfaces";

export default function DataDisplay({
  dataLabel,
  dataContents,
  divStyle,
}: {
  dataLabel: string;
  dataContents: Array<BookmarkItem>;
  divStyle: string;
}) {
  console.log("DC:", dataContents);

  if (!dataContents) return <div>Loading Bookmarks...</div>;

  return (
    <>
      <div className={divStyle}>
        {dataContents.map((bookmark) => {
          return (
            <div key={Math.random()}>
              <p>
                {/* {bookmark.dateCreated}{" "} */}
                <span className="itemHeading">{bookmark.bookmarkTitle}</span>
              </p>
              <a href={bookmark.bookmarkURL} target="_blank">
                <p>
                  ☆ <span className="externalLink">{bookmark.bookmarkURL}</span>
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}