import React from "react";
import Image from "next/image";

// This component is a STRETCH goal -- load a random image from the Unsplash API *if* there is time to incorporate the feature (the matter of attribution per the use agreement may take time to address)

export default function ImageOfDay({ imgURL }: { imgURL: string }) {
  return (
      <section>
        <div className="bg-blue-700 text-white h-240 w-80">
          <Image src={imgURL} alt="doodle art" width="96" height="96" />
        </div>
      </section>
  );
}
