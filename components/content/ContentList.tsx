import React, { MouseEventHandler } from "react";
// Interface imports
import { NewsItem } from "../../data/interfaces";
// Component imports
import ContentItem from "./ContentItem";

export default function ContentList({
  currentNewsItem,
  onClick,
}: {
  currentNewsItem: NewsItem;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <section>
        <div className="bg-purple-300 text-blue-700 h-240 w-80">
          <h2>Content Items:</h2>
          <ContentItem currentNewsItem={currentNewsItem} />
          <div>
            <form>
              <label>Bookmark a URL:</label>
              <input type="text" placeholder="title" />
              <input type="text" placeholder="URL" />
            </form>
            <button onClick={onClick}>Save</button>
          </div>
        </div>
      </section>
    </>
  );
}
