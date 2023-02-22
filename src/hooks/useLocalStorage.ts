import { useEffect, useState } from "react";

export function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState<any>(() => {
    // get value from storage
    const savedString = localStorage.getItem(key);

    if (savedString) {
      return JSON.parse(savedString);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
