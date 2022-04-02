import React from "react";

export default function ContentList() {
  return (
    <>
      <section>
        <div className="bg-purple-300 text-blue-700 h-240 w-80">
          <ul>
            Content Items:
            <li title="newt">news</li>
            <li>bookmarks</li>
            <li>notepad</li>
          </ul>
        </div>
      </section>
    </>
  );
}
