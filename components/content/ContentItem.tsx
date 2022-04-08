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
    <div className="bg-orange-300 border-solid border-2 border-white py-4">
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
  );
}
