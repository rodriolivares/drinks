import axios from "axios";
import { useState } from 'react'
import useDrinks from "@/hooks/useDrinks";
import S from "@/styles/shelf.module.css"
import DrinksList from "../DrinksList";
import RandomIcon from "../svg/RandomIcon";
import Button from "../elements/Button";

const RandomShelf = () => {
   const [beingUsed, setBeingUsed] = useState(false);
   const [loading, setLoading] = useState(false);
   const [randomDrink, setRandomDrink] = useState({});

   const searchDrinks = async () => {
      setBeingUsed(true)
      setLoading(true)
      try {
         const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
         const { data } = await axios(url)
         setRandomDrink(data.drinks);
      } catch (error) {
         console.log(error.response.data);
         setRandomDrink({})
      }
      setLoading(false)
   }

   const handleClick = () => {
      searchDrinks()
   }
   
   return (
      <div className={S.shelf}>
         <div className={S['shelf__header']}>
            <RandomIcon />
            <div>
               <p>TRY YOUR LUCK</p>
               <h2>Random Drink</h2>
            </div>
         </div>
         <Button 
            handler={handleClick}
         >Search</Button>
         
         <DrinksList 
            beingUsed={beingUsed} 
            loading={loading}
            drinks={randomDrink}
         />

      </div>
   )
}

export default RandomShelf