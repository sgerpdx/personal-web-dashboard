import React from "react";
import Image from "next/image";

export default function ImageOfDay() {
  return (
    <>
      <section>
        <div className="bg-blue-700 text-white h-240 w-80">
          <Image
            src="/../public/square-art.png"
            alt="doodle art"
            width="96"
            height="96"
          />
        </div>
      </section>
    </>
  );
}
