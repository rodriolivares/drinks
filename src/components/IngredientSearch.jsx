import { useEffect, useState } from 'react'
import useFilterIngredients from "@/hooks/useFilterIngredients";
import S from "@/styles/shelf.module.css"
import Ingredient from "./Ingredient";
import SearchIngredientIcon from "./svg/SearchIngredientIcon";
import InputText from "./elements/InputText";

const IngredientSearch = ({ ingredients }) => {
   const [inputValue, setInputValue] = useState('');

   const [showedIngredients, filterObjectsByString] = useFilterIngredients(ingredients)

   useEffect(() => {
      filterObjectsByString(ingredients, inputValue)
   }, [inputValue]);

   return (
      <div className={S.shelf}>
         <div className={S['shelf--space-between']}>
            <label htmlFor="ingredient" className={S["shelf__header"]}>
                  <SearchIngredientIcon />
                  <div>
                     <p>SAME INGREDIENTS AS THOSE OF THE 2ND FILTER</p>
                     <h2>Search an Ingredient Info</h2>
                  </div>
            </label>
            <InputText 
               id="ingredient"
               placeholder="Type an ingredient"
               value={inputValue}
               changeHandler={ e => setInputValue(e.target.value) }
               resetHandler={ () => setInputValue('') }
            />
         </div>

         <div className={S.items}>
            {showedIngredients.map((ing, i) => (
               <Ingredient
                  key={i}
                  ingredient={ing}
               />
            ))}
         </div>
      </div>
   )
}

export default IngredientSearch