import { useEffect, useState } from "react";

export default function useTimer(offerClosingTime: string) {
  const dateP: Date = new Date();
  const [diff, setDiff] = useState(
    Date.parse(offerClosingTime) - dateP.getTime()
  );

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDiff((_diff) => _diff - 1000);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [diff]);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
