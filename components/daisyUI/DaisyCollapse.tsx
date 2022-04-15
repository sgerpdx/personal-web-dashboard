import React from "react";

export default function DaisyCollapse() {
  return (
    <div className="h-40 bg-darkmaroon">
      <p>Collapse:</p>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >Outer Div
        <div className="collapse-title">Focus me to see content</div>
        <div className="collapse-content">
          <p>content</p>
        </div>
      </div>
    </div>
  );
}
