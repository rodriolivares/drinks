import axios from "axios";
import { useEffect, useState } from 'react'
import useFilterIngredients from "@/hooks/useFilterIngredients"
import S from "@/styles/shelf.module.css"
import Options from "@/components/Options"
import DrinksList from "../DrinksList";
import IngredientsIcon from "../svg/IngredientsIcon";
import InputText from "../elements/InputText";

const IngredientShelf = ({ ingredients }) => {
   const [beingUsed, setBeingUsed] = useState(false);
   const [loading, setLoading] = useState(false);
   const [drinksByIngredient, setDrinksByIngredient] = useState({});
   const [inputValue, setInputValue] = useState('');
   const [showedIngredients, filterObjectsByString] = useFilterIngredients(ingredients)

   const searchDrinks = async string => {
      setBeingUsed(true)
      setLoading(true)
      try {
         const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${string}`
         const { data } = await axios(url)
         setDrinksByIngredient(data.drinks);
      } catch (error) {
         console.log(error);
         setDrinksByIngredient({})
      }
      setLoading(false)
   }

   
   useEffect(() => {
      filterObjectsByString(ingredients, inputValue)
   }, [inputValue]);

   return (
      <div className={S.shelf}>
         <label 
            htmlFor="searchDrinkByIngredient" 
            className={S['shelf__header']}
         >
            <IngredientsIcon />
            <div>
               <p>INGREDIENTS ON HAND.. NEED IDEAS?</p>
               <h2>Filter by Ingredient</h2>
            </div>
         </label>
         { !beingUsed && 
            <InputText 
               id="searchDrinkByIngredient"
               placeholder="Type an ingredient"
               value={inputValue}
               changeHandler={ e => setInputValue(e.target.value) }
               resetHandler={ () => setInputValue('') }
            />
         }
         <Options 
            className="options--much-elements"
            type={"strIngredient1"}
            options={showedIngredients}
            searchDrinks={searchDrinks}
            beingUsed={beingUsed}
            setBeingUsed={setBeingUsed}
         />
         
         <DrinksList
            beingUsed={beingUsed} 
            loading={loading} 
            drinks={drinksByIngredient} 
         />
      </div>
   )
}

export default IngredientShelf