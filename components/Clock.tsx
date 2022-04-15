import React, { useState, useEffect } from "react";
import Image from "next/image";
import { formatTimeDisplay } from "../utils/mungeUtils";
import { TimeItem } from "../data/interfaces";
import AndorianImg from "../public/shran.png";

export default function Clock() {
  // Variable stores a string containing date and time
  const [currentDateTime, setCurrentDateTime] = useState<string>();
  const [clockDisplayObj, setClockDisplayObj] = useState({
    hour: "",
    minute: "",
    second: "",
  });

  // Function to retrieve and format JS date object
  function setClock() {
    const newDateTime: Date = new Date();

    // General date and time info (remove before production)
    const dateTimeString: string = newDateTime.toString();
    setCurrentDateTime(dateTimeString);

    // This handles hours > 12 and single-digit numbers returning formatted strings for hour/min/sec:
    const formattedTime: TimeItem = formatTimeDisplay(newDateTime);
    setClockDisplayObj({
      hour: formattedTime.hour,
      minute: formattedTime.minute,
      second: formattedTime.second,
    });
  }

  // Update the time every second and then cancel the updating when component unmounted
  useEffect(() => {
    const updateClock = setInterval(setClock, 1000);
    return function cleanup() {
      clearInterval(updateClock);
    };
  }, []);

  return (
    <section className="clockDiv">
      <div className="flex justify-between align-middle">
        <div className="flex justify-center align-middle w-2/4">
          {" "}
          <figure className="flex border-2 border-frappetan my-2 mx-4 md:mx-10 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full justify-center align-middle text-center">
            <p>
              Time: {clockDisplayObj.hour}:{clockDisplayObj.minute}:
              {clockDisplayObj.second}
            </p>
          </figure>
        </div>
        <div className="flex justify-center align-middle w-2/4">
          {" "}
          <figure className="flex border-2 border-frappetan my-2 mx-4 md:mx-10 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full justify-center align-middle text-center">
            <p>Date: {currentDateTime}</p>
          </figure>
        </div>
      </div>
    </section>
  );
}
