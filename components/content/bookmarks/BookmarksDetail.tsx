import React from "react";
import { BookmarkItem } from "../../../data/interfaces";
import { RiBookmarkLine } from "react-icons/ri";

export default function BookmarksDetail({
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
            <div className="bg-customwhite" key={Math.random()}>
              <a href={bookmark.bookmarkURL} target="_blank" rel="noreferrer">
                <p>
                  {/* {bookmark.dateCreated}{" "} */}
                  <span className="itemHeadingBookmarks">
                    <RiBookmarkLine />
                    {bookmark.bookmarkTitle}
                  </span>
                </p>

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
