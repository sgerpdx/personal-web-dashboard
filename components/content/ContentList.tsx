import React, { useState, useEffect, MouseEventHandler } from "react";
// Interface imports (BookmarkItem & NoteItem can be same interface)
import { NewsItem, BookmarkItem, NoteItem } from "../../data/interfaces";
// Component imports
// Use for news API display:
import ContentItem from "./ContentItem";
// Use for bookmarks/notes input forms:
import FormItem from "./FormItem";

// Data import for rendering test:
import { NewsData } from "../../data/newsData";

export default function ContentList({
  currentNewsItem,
  onClick,
}: {
  currentNewsItem: NewsItem;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  // Object variable for a bookmark to save to db:
  const [currentBookmark, setCurrentBookmark] = useState<BookmarkItem>({
    title: "",
    text: "",
  });

  const [currentNote, setCurrentNote] = useState<NoteItem>({
    title: "",
    text: "",
  });

  useEffect(() => {
    console.log("//////Current Bookmark:", currentBookmark);
    console.log("[][][]Current Note:", currentNote);
  }, [currentBookmark, currentNote]);

  return (
    <>
      <section>
        {/* <div className="bg-purple-300 text-blue-700 h-240 w-80">
          <h2>Content Items:</h2>
          <ContentItem currentNewsItem={currentNewsItem} />
        </div> */}
        <ContentItem newsData={NewsData} currentNewsItem={currentNewsItem} />
        <div className="bg-orange-300">
          <p>
            Bookmark: {currentBookmark.title} + {currentBookmark.text}
          </p>
          <p>
            Note: {currentNote.title} + {currentNote.text}
          </p>
        </div>
        <FormItem
          formLabel="New Bookmark"
          setVariable={setCurrentBookmark}
          divStyle="bg-blue-300 p-4"
        />
        <FormItem
          formLabel="New Note"
          setVariable={setCurrentNote}
          divStyle="bg-purple-300 p-4"
        />
      </section>
    </>
  );
}
