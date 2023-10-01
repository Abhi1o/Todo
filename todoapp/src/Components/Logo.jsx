import React, { useState, useEffect } from 'react';

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

    weekday: 'long', // Short weekday name (e.g., "Tue")
    month: 'short',   // Short month name (e.g., "Jan")
    day: 'numeric',
  });
  //Format the Time as "05:25 PM"
  const formattedTime = currentDateTime.toLocaleTimeString(undefined,{
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, 
  })
  // 5. Render the current date and time.

  return (
    <>
    <header className='flex align-center justify-center'>
      <h1 className=' font-semibold text-5xl text-white font-calibri'>TODO</h1>
    </header>
      <div className='mt-9'>
      <p className="text-3xl font- text-white">{formattedTime}</p>
      <p className="text-white">{formattedDate}</p>
      </div>
    </>
  );
};
export default Logo;
