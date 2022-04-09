import React from "react";
import Image from "next/image";

// Interface imports
import { NewsItem, NewsResponse } from "../../data/interfaces";

export default function ContentItem({
  currentNewsItem,
  newsData,
}: {
  currentNewsItem: NewsItem;
  newsData: Array<NewsResponse>;
}) {
  return (
    <>
      <div className="bg-orange-300">
        {newsData.map((article) => {
          return (
            <>
              {/* <figure>
              <Image
                src={article.image}
                alt="news story thumbnail image"
                width="32"
                height="32"
              />
              <figcaption>
                <i>news story thumbnail image</i>
              </figcaption>
            </figure> */}
              <div>
                <h3>{article.title}</h3>
                <h4>
                  by {article.author} at {article.source}
                </h4>
                <p>{article.description}</p>
                <p>published: {article.published}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="bg-orange-300">
        <h3>Souther Comfort Comforts Southerner</h3>
        <h4>by Brian Van Lloyd at REMville Gazette</h4>
        <p>
          Twelve years ago seven octopi occupied a diner above a dive shop on
          the island of Danish Reef.
        </p>
        <p>published: 2004-05-06</p>
      </div>
    </>
  );
}
