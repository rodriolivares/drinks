import { useEffect, useState } from 'react';

export default function useDebounce(callback, delay) {
   const [timerId, setTimerId] = useState(null);

   useEffect(() => { 
      return () => { if (timerId) clearTimeout(timerId); }; 
   }, [timerId]);

   function debouncedCallback(...args) {
      if (timerId) clearTimeout(timerId);

      const newTimerId = setTimeout(() => {
         callback(...args);
      }, delay);
      
      setTimerId(newTimerId);
   }

   return debouncedCallback;
}