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

  const accordionData = {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  };

  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);

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
      {/* <section className="bg-red-500">
        <h1>React Accordion Demo</h1>
        <div className="accordion">
          <div className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => setIsActive(!isActive)}
            >
              <div className="bg-orange-300">{title}</div>
              <div className="bg-purple-300">+</div>
            </div>
            {isActive && <div className="bg-orange-500 ease-in duration-300">{content}</div>}
          </div>
        </div>
      </section> */}
    </>
  );
}
