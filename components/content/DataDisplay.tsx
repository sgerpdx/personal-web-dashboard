import React from "react";
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
  if (!dataContents) return <div>Loading Bookmarks...</div>;

  return (
    <section className="text-black">
      <div className={divStyle}>
        {dataContents.map((bookmark) => {
          return (
            <div key={Math.random()}>
              <p>
                {/* {bookmark.dateCreated}{" "} */}
                <span className="itemHeading">{bookmark.bookmarkTitle}</span>
              </p>
              <a href={bookmark.bookmarkURL} target="_blank" rel="noreferrer">
                <p>
                  ☆ <span className="externalLink">{bookmark.bookmarkURL}</span>
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
