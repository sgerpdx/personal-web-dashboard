import React from "react";
import Image from "next/image";

// Interface imports
import NewsItem from "../../data/interfaces";

export default function ContentItem({
  currentNewsItem,
}: {
  currentNewsItem: NewsItem;
}) {
  return (
    <div className="bg-orange-300 border-solid border-2 border-white py-4">
      <figure>
        <Image
          src={currentNewsItem.thumbnailURL}
          alt="news story thumbnail image"
          width="32"
          height="32"
        />
        <figcaption>
          <i>news story thumbnail image</i>
        </figcaption>
      </figure>
      <div>
        <h3>{currentNewsItem.headline}</h3>
        <p>{currentNewsItem.articleText}</p>
      </div>
    </div>
  );
}
