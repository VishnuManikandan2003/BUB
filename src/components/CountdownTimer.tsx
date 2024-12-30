import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      seconds: '00'
    };

    if (difference > 0) {
      const totalSeconds = Math.floor(difference / 1000);
      timeLeft = {
        seconds: totalSeconds.toString().padStart(2, '0')
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-8 text-white">
      <TimeUnit label="Seconds" value={timeLeft.seconds} />
    </div>
  );
};

const TimeUnit: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl font-light mb-2">{value}</span>
    <span className="text-sm text-gray-400">{label}</span>
  </div>
);

export default CountdownTimer;