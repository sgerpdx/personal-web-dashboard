import React from "react";
// Interface imports
import NewsItem from "../../data/interfaces";
// Component imports
import ContentItem from "./ContentItem";

export default function ContentList({
  currentNewsItem,
}: {
  currentNewsItem: NewsItem;
}) {
  return (
    <>
      <section>
        <div className="bg-purple-300 text-blue-700 h-240 w-80">
          <h2>Content Items:</h2>
          <ContentItem currentNewsItem={currentNewsItem}/>
          <ContentItem currentNewsItem={currentNewsItem}/>
          <ContentItem currentNewsItem={currentNewsItem}/>
        </div>
      </section>
    </>
  );
}
