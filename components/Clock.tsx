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
      <div className="flex">
        <figure className="border-2 mx-10 h-60 w-60 rounded-full flex justify-center align-middle">
          <Image src={AndorianImg} alt="andorian" />
        </figure>
        <div className="border-2 mx-10 h-60 w-60 rounded-full flex justify-center align-middle">
          <p>
            Time: {clockDisplayObj.hour}:{clockDisplayObj.minute}:
            {clockDisplayObj.second}
          </p>
        </div>
      </div>
    </section>
  );
}
