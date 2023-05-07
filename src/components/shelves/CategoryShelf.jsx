import axios from "axios";
import { useState } from 'react'
import useDrinks from "@/hooks/useDrinks";
import S from "@/styles/shelf.module.css"
import DrinksList from "../DrinksList";
import Options from "../Options";
import CategoryIcon from "../svg/CategoryIcon";

const CategoryShelf = ({ categories }) => {
   const [beingUsed, setBeingUsed] = useState(false);
   const [loading, setLoading] = useState(false);
   const [drinksByCategory, setDrinksByCategory] = useState({});

   const searchDrinks = async string => {
      setBeingUsed(true)
      setLoading(true)
      try {
         const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${string}`
         const { data } = await axios(url)
         setDrinksByCategory(data.drinks);
      } catch (error) {
         console.log(error);
         setDrinksByCategory({})
      }
      setLoading(false)
   }
      
   return (
      <div className={S.shelf}>
         <div className={S['shelf__header']}>
            <CategoryIcon />
            <div>
               <p>FOR ESPECIAL OCCASIONS:</p>
               <h2>Filter by Category</h2>
            </div>
         </div>

         <Options
            className="options--few-elements"
            type={"strCategory"}
            options={categories}
            searchDrinks={searchDrinks}
            beingUsed={beingUsed}
            setBeingUsed={setBeingUsed}
         />
         
         <DrinksList 
            beingUsed={beingUsed}
            loading={loading}
            drinks={drinksByCategory}
         />
      </div>
   )
}

export default CategoryShelf