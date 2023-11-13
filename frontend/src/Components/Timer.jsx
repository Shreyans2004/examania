import React, { useState, useEffect } from 'react';

const Timer = () => {
  const initial_Time_Limit1 = 60*60*3; 
  const [timeLimit, setTimeLimit] = useState(initial_Time_Limit1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLimit((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const hours = Math.floor(timeLimit / 3600);
  const minutes = Math.floor((timeLimit % 3600) / 60);
  const seconds = timeLimit % 60;

  return (
    <div>
      {timeLimit >= 0 ? (
        <p>{`${hours} hours: ${minutes} minutes: ${seconds} seconds remaining`}</p>
      ) : (
        <p>Time's up!</p>
      )}
    </div>
  );
};

export default Timer;
