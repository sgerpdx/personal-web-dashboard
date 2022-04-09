import React from "react";
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
  
  // Prepare the Data for Rendering:
  
  
    console.log(dataContents);

  return (
    <>
      <div className={divStyle}>
        <h3>{dataLabel}</h3>
        {dataContents.map((bookmark) => {
          return (
            <div key={Math.random()}>
              {" "}
              <p>Title: {bookmark.bookmarkTitle}</p>
              <p>URL: {bookmark.bookmarkURL}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
