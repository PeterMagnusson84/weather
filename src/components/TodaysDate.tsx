import { useState, useEffect } from 'react';

const TodayDate = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    // Get today's date
    const today = new Date();

    // Format the date (e.g., Tuesday 8, October)
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    };
    const formattedDate = today.toLocaleDateString('sv-SE', options);

    // Set the formatted date in the state
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>{currentDate}</div>
  );
};

export default TodayDate;