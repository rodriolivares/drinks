import axios from "axios";
import { useRef, useState } from 'react'
import useDrinks from "@/hooks/useDrinks";
import S from "@/styles/shelf.module.css"
import DrinksList from "../DrinksList";
import useDebounce from "@/hooks/useDebounce";
import NameIcon from "../svg/NameIcon";
import InputText from "../elements/InputText";

const NameShelf = () => {
   const [drinkSearch, setDrinkSearch] = useState('');
   const [beingUsed, setBeingUsed] = useState(false);
   const [loading, setLoading] = useState(false);
   const [drinksByName, setDrinksByName] = useState({});

   const latestInputValue = useRef(drinkSearch);
   
   const handleInputChange = name => {
      setBeingUsed(true)
      setLoading(true)
      setDrinkSearch(name);
      latestInputValue.current = name;
      handleChange();
   };
   
   const handleChange = useDebounce(() => {
      searchDrinks()
   }, 1000);
   
   const searchDrinks = async () => {
      try {
         const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${latestInputValue.current}`
         const { data } = await axios(url)
         setDrinksByName(data.drinks);
      } catch (error) {
         console.log(error);
         setDrinksByName({})
      }
      setLoading(false)
   }

   console.log(drinksByName);

   return (
      <div className={S.shelf}>
         <label 
            htmlFor="drinkSearch" 
            className={S['shelf__header']}
         >
            <NameIcon />
            <div>
               <p>TYPE A DRINK HERE!</p>
               <h2>Search by Name</h2>
            </div>
         </label>
         <InputText 
            id="drinkSearch"
            placeholder="Type a drink"
            value={drinkSearch}
            changeHandler={ e => handleInputChange(e.target.value) }
            resetHandler={ () => handleInputChange('') }
         />
         
         <DrinksList beingUsed={beingUsed} loading={loading} drinks={drinksByName} />
      </div>
   )
}

export default NameShelf