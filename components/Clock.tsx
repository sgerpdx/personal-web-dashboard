import React, { useState, useEffect } from "react";
import { extractDateInfo, formatTimeDisplay } from "../utils/dateTimeUtils";
import { TimeItem, DateDisplayItem } from "../data/interfaces";

export default function Clock() {
  const [clockDisplayObj, setClockDisplayObj] = useState<TimeItem>({
    hour: "",
    minute: "",
    second: "",
    amPM: "",
  });
  const [dateDisplayObj, setDateDisplayObj] = useState<DateDisplayItem>({
    dayName: "",
    dayNumber: 0,
    monthName: "",
    year: 0,
    offsetUTC: 0,
  });

  // Function to retrieve and format JS date object
  function setClock() {
    const newDateTime: Date = new Date();

    // This handles hours > 12 and single-digit numbers returning formatted strings for hour/min/sec:
    const formattedTime: TimeItem = formatTimeDisplay(newDateTime);
    setClockDisplayObj({
      hour: formattedTime.hour,
      minute: formattedTime.minute,
      second: formattedTime.second,
      amPM: formattedTime.amPM,
    });
  }

  function setDate() {
    const newDateTime: Date = new Date();
    return extractDateInfo(newDateTime);
  }

  // Update the time every second and then cancel the updating when component unmounted
  useEffect(() => {
    const newDate: DateDisplayItem = setDate();
    setDateDisplayObj(newDate);
    //
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
          <figure className="flex flex-col border-2 border-frappetan my-2 mx-4 md:mx-10 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full justify-center align-middle text-center font-futurama">
            <p>
              {clockDisplayObj.hour}:{clockDisplayObj.minute}:
              {clockDisplayObj.second} {clockDisplayObj.amPM}
            </p>
          </figure>
        </div>
        <div className="flex justify-center align-middle w-2/4">
          {" "}
          <figure className="flex flex-col border-2 border-frappetan my-2 mx-4 md:mx-10 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full justify-center align-middle text-center font-futurama">
            <p>
              {dateDisplayObj.dayName}, {dateDisplayObj.monthName}{" "}
              {dateDisplayObj.dayNumber} {dateDisplayObj.year}
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}
