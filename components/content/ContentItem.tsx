import React from "react";
import Image from "next/image";
import PlaceholderImg from "../../public/img-placeholder-96.png";

// React Icons
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

// Interface imports
import { NewsResponse } from "../../data/interfaces";

export default function ContentItem({
  newsData,
}: {
  newsData: Array<NewsResponse>;
}) {
  // This component currently has a good deal of hard-coded data for dev testing
  // Ultimately it will be populated simply via a res from the Mediastack news API

  return (
    <section className="text-black">
      <nav
        className="flex flex-row justify-end px-6 h-7"
        title="pagination under construction"
      >
        <BiLeftArrow />
        <BiRightArrow />
      </nav>
      <div className="newsContent">
        <div className="bg-orange-300 ">
          {newsData.map((article) => {
            return (
              <>
                <figure>
                  <Image
                    src={article.image || PlaceholderImg}
                    alt="news story thumbnail image"
                    width="48"
                    height="48"
                  />
                  <figcaption>
                    <i>news story thumbnail image</i>
                  </figcaption>
                </figure>
                <div className="px-4 bg-green-300" key={article.url}>
                  <h3 className="itemHeading">{article.title}</h3>
                  <h4 className="captionText">
                    ☆ by {article.author} at{" "}
                    <a href={article.url} target="_blank" rel="noreferrer">
                      {article.source}
                    </a>
                  </h4>
                  <p>{article.description}</p>
                  <p className="captionText">
                    ☆ published: {article.published}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
