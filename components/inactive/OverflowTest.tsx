import React from "react";

export default function OverflowTest() {
  return (
    <div>
      {" "}
      <section className="sticky top-0 z-50 h-48">Header</section>
      <section className="relative h-96">Body</section>
      <section className="h-32">footer</section>
    </div>
  );
}
