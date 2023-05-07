import { useState } from 'react';

export default function useFilterIngredients(array) {
   const [showedIngredients, setShowedIngredients] = useState(array);

   const filterObjectsByString = (array, string) => {
      const filteredArray = array.filter((obj) => {
         return obj.strIngredient1.toLowerCase().includes(string.toLowerCase());
      });
      setShowedIngredients(filteredArray);      
   }

   return [showedIngredients, filterObjectsByString];
}