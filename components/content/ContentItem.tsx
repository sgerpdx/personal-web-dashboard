import React from "react";
import Image from "next/image";

// Interface imports
import { NewsItem, NewsResponse } from "../../data/interfaces";

export default function ContentItem({
  currentNewsItem,
  newsData,
}: {
  currentNewsItem: NewsItem;
  newsData: NewsResponse;
}) {
  return (
    <div className="bg-orange-300 border-solid border-2 border-white py-4">
      <figure>
        <Image
          src={newsData.image}
          alt="news story thumbnail image"
          width="32"
          height="32"
        />
        <figcaption>
          <i>news story thumbnail image</i>
        </figcaption>
      </figure>
      <div>
        <h3>{newsData.title}</h3>
        <h4>
          by {newsData.author} at {newsData.source}
        </h4>
        <p>{newsData.description}</p>
        <p>published: {newsData.published}</p>
      </div>
    </div>
  );
}
