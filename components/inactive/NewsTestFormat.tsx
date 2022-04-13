import React from "react";
import Image from "next/image";

export default function NewsTestFormat() {
  return (
    <section className="bg-blue-700 text-white h-240 w-80">
      <div>
        <Image
          src="/../public/square-art.png"
          alt="doodle art"
          width="96"
          height="96"
        />
      </div>
      <div className="bg-blue-500">
        <h3>Title of News Article</h3>
        <p>Summary of news story is as follows...</p>
      </div>
    </section>
  );
}
