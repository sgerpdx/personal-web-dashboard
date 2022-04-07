import React, { useState, useEffect } from "react";

export default function Clock() {
  // Variable stores a string containing date and time
  const [currentDateTime, setCurrentDateTime] = useState<string>();

  // Function to retrieve and format JS date object
  function setClock() {
    const newDateTime: Date = new Date();
    // console.log("Date:", newDateTime);
    const dateTimeString: string = newDateTime.toString();
    setCurrentDateTime(dateTimeString);
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
    </section>
  );
}
