import { useEffect, useState } from "react";

export function useDebounce(value: string, delayInMS: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMS);

    return () => {
      clearTimeout(timeoutID);
      console.log("timer reset")
    };
  }, [value, delayInMS]);

  return debouncedValue;
}
