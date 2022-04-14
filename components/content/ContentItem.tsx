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
  const newsArr = [
    {
      author: "Sam",
      title: "Sam wakes up.",
      source: "Morning Hello News",
      description: "Sam woke up and ate a waffle.",
      url: "url",
      image: "url",
      published: "2022-04-11",
    },
    {
      author: "Mark",
      title: "Mark wakes up.",
      source: "Morning Hello News",
      description: "Mark woke up and ate a waffle.",
      url: "url",
      image: "url",
      published: "2022-04-11",
    },
    {
      author: "Diane",
      title: "Diane wakes up.",
      source: "Morning Hello News",
      description: "Diane woke up and ate a waffle.",
      url: "url",
      image: "url",
      published: "2022-04-11",
    },
  ];

  // This component currently has a good deal of hard-coded data for dev testing
  // Ultimately it will be populated simply via a res from the Mediastack news API

  return (
    <section className="text-black">
      <nav className="flex flex-row justify-end px-6 h-7">
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
                    <a href={article.url} target="_blank">
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
        <div className="flex flex-col">
          <div className="flex flex-row align-middle">
            <figure className="w-12 h-12 mx-2">
              <Image
                src={PlaceholderImg}
                alt="news story thumbnail image"
                width="48"
                height="48"
              />
            </figure>
            <div className="flex align-text-bottom h-12">
              {" "}
              <h3 className="itemHeading">
                Souther Comfort Comforts Southerner
              </h3>
            </div>
          </div>
          <div>
            <h4 className="captionText">
              by Brian Van Lloyd at REMville Gazette
            </h4>
            <p>
              Twelve years ago seven octopi occupied a diner above a dive shop
              on the island of Danish Reef. Thirteen bears bore the weight of
              great thirst for beers that the would have liked to drink from the
              Danish sink.
            </p>
          </div>

          <p className="captionText">published: 2004-05-06</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row align-middle">
            <figure className="w-12 h-12 mx-2">
              <Image
                src={PlaceholderImg}
                alt="news story thumbnail image"
                width="48"
                height="48"
              />
            </figure>
            <div className="flex align-text-bottom h-12">
              {" "}
              <h3 className="itemHeading">
                Souther Comfort Comforts Southerner
              </h3>
            </div>
          </div>
          <div>
            <h4 className="captionText">
              by Brian Van Lloyd at REMville Gazette
            </h4>
            <p>
              Twelve years ago seven octopi occupied a diner above a dive shop
              on the island of Danish Reef. Thirteen bears bore the weight of
              great thirst for beers that the would have liked to drink from the
              Danish sink.
            </p>
          </div>

          <p className="captionText">published: 2004-05-06</p>
        </div>
        {/* <div className="bg-pink-400">
          <h3 className="itemHeading">{newsArr[1].title}</h3>
          <h4 className="captionText">
            by {newsArr[1].author} at {newsArr[1].source}
          </h4>
          <figure>
            <Image
              src="https://cdn.cnn.com/cnnnext/dam/assets/220101144008-rodri-super-169.jpg"
              alt="news story thumbnail image"
              width="120"
              height="120"
            />
            <figcaption>
              <i>news story thumbnail image</i>
            </figcaption>
          </figure>
          <p>{newsArr[1].description}</p>
          <p className="captionText">published: {newsArr[1].published}</p>
        </div> */}
      </div>
    </section>
  );
}
