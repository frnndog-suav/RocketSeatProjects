import { useEffect, useRef, useState } from "react";

export function useDebounce(value: string, delay = 2000) {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef(0);

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
}
