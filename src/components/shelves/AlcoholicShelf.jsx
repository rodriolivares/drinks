import axios from "axios";
import { useState } from 'react'
import useDrinks from "@/hooks/useDrinks";
import S from "@/styles/shelf.module.css"
import DrinksList from "../DrinksList";
import Options from "../Options";
import AlcoholicIcon from "../svg/AlcoholicIcon";

const AlcoholicShelf = ({ alcoholics }) => {
   const [beingUsed, setBeingUsed] = useState(false);
   const [loading, setLoading] = useState(false);
   const [drinksByAlcohol, setDrinksByAlcohol] = useState({});

   const searchDrinks = async string => {
      setBeingUsed(true)
      setLoading(true)
      try {
         const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${string}`
         const { data } = await axios(url)
         setDrinksByAlcohol(data.drinks);
      } catch (error) {
         console.log(error);
         setDrinksByAlcohol({})
      }
      setLoading(false)
   }

   return (
      <div className={S.shelf}>
         <div className={S['shelf__header']}>
            <AlcoholicIcon />
            <div>
               <p>TAKE IT EASY, OR NOT..</p>
               <h2>Filter by Alcohol content</h2>
            </div>
         </div>
         <Options
            className="options--three-elements"
            type={"strAlcoholic"}
            options={alcoholics} 
            searchDrinks={searchDrinks} 
            beingUsed={beingUsed}
            setBeingUsed={setBeingUsed} 
         />
         
         <DrinksList 
            beingUsed={beingUsed} 
            loading={loading} 
            drinks={drinksByAlcohol} 
         />
      </div>
   )
}

export default AlcoholicShelf