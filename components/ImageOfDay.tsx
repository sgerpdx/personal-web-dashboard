import React from "react";
import Image from "next/image";

export default function ImageOfDay({ imgURL }: { imgURL: string }) {
  return (
    <>
      <section>
        <div className="bg-blue-700 text-white h-240 w-80">
          <Image src={imgURL} alt="doodle art" width="96" height="96" />
        </div>
      </section>
    </>
  );
}
