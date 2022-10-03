import { useEffect, useRef, useState } from 'react';
import { DateTime } from 'luxon';

const useClock = (): { date: string; time: string } => {
  const [date, setDate] = useState<string>(DateTime.now().toFormat('dd/MM/yyyy'));
  const [time, setTime] = useState<string>(DateTime.now().toFormat('hh:mm:ss'));
  const intervalId = useRef<NodeJS.Timer>();

  useEffect(() => {
    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      setDate(DateTime.now().toFormat('dd/MM/yyyy'));
      setTime(DateTime.now().toFormat('hh:mm:ss'));
    });

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return { date, time };
};

export default useClock;
