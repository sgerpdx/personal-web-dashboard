import React, { useState, useEffect } from "react";

export default function Clock() {
  // Variable stores a string containing date and time
  const [currentDateTime, setCurrentDateTime] = useState<string>();
  const [clockDisplayObj, setClockDisplayObj] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  // Function to retrieve and format JS date object
  function setClock() {
    const newDateTime: Date = new Date();
    // console.log("Date:", newDateTime);
    const newHour = newDateTime.getHours();
    const newMinute = newDateTime.getMinutes();
    const newSecond = newDateTime.getSeconds();
    //
    const dateTimeString: string = newDateTime.toString();
    setCurrentDateTime(dateTimeString);
    setClockDisplayObj({ hour: newHour, minute: newMinute, second: newSecond });
  }

  // Update the time every second and then cancel the updating when component unmounted
  useEffect(() => {
    const updateClock = setInterval(setClock, 1000);
    return function cleanup() {
      clearInterval(updateClock);
    };
  }, []);

  return (
    <section>
      <div className="bg-black text-white h-240 w-80">
        <p>Current Time + Date:</p>
        <p>{currentDateTime}</p>
      </div>
      <div>
        <p>
          Time: {clockDisplayObj.hour}:{clockDisplayObj.minute}:
          {clockDisplayObj.second}
        </p>
      </div>
    </section>
  );
}
