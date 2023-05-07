import axios from "axios";
import { useState } from 'react'
import useDrinks from "@/hooks/useDrinks";
import S from "@/styles/shelf.module.css"
import DrinksList from "../DrinksList";
import Options from "../Options";
import GlassIcon from "../svg/GlassIcon";

const GlassShelf = ({ glasses }) => {
   const [beingUsed, setBeingUsed] = useState(false);
   const [loading, setLoading] = useState(false);
   const [drinksByGlass, setDrinksByGlass] = useState({});

   const searchDrinks = async string => {
      setBeingUsed(true)
      setLoading(true)
      try {
         const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${string}`
         const { data } = await axios(url)
         setDrinksByGlass(data.drinks);
      } catch (error) {
         console.log(error);
         setDrinksByGlass({})
      }
      setLoading(false)
   }

   return (
      <div className={S.shelf}>
         <div className={S['shelf__header']}>
            <GlassIcon />
            <div>
               <p>GOTTA BE PERFECT!</p>
               <h2>Filter by Glass</h2>
            </div>
         </div>
         <Options
            className="options--much-elements"
            type={"strGlass"}
            options={glasses} 
            searchDrinks={searchDrinks} 
            beingUsed={beingUsed}
            setBeingUsed={setBeingUsed} 
         />
         
         <DrinksList 
            beingUsed={beingUsed} 
            loading={loading} 
            drinks={drinksByGlass} 
         />
      </div>
   )
}

export default GlassShelf