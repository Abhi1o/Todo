import React, { useState, useEffect } from "react";

const Logo = () => {
  // 1. Initialize a state variable to store the current date and time.
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // 2. Use the useEffect hook to update the date and time.
  useEffect(() => {
    // 3. Update the current date and time every second.
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // 4. Clean up the interval when the component unmounts.
    return () => clearInterval(intervalId);
  }, []);

  // Format the date as "Tue, 22 Jan 2023"
  const formattedDate = currentDateTime.toLocaleDateString(undefined, {
    weekday: "long", // Short weekday name (e.g., "Tue")
    month: "short", // Short month name (e.g., "Jan")
    day: "2-digit",
  });
  //Format the Time as "05:25 PM"
  const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  // 5. Render the current date and time.

  return (
    <>
      <header className="flex items-center justify-center">
        <h1 className=" tracking-wider font-semibold mt-14 text-4xl text-yellow-600 font-Proxima">
          ToDo{" "}
        </h1>
      </header>
      <div className=" flex items-center justify-center">
      <div className="mt-8 ml-3 timedate text-left">
        <p className="text-3xl tracking-wider font-sans text-white">
          {formattedTime}
        </p>
        <p className="text-xs ml-1 text-teal-100">{formattedDate}</p>
      </div></div>
    </>
  );
};
export default Logo;
