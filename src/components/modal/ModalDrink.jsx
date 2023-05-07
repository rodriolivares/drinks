import { useEffect, useState } from "react"
import axios from "axios"

import useDrinks from "../../hooks/useDrinks"
import Image from "next/image"
import Spinner from "../elements/Spinner"
import Button from "../elements/Button"
import QuantitiesIngredients from "./QuantitiesIngredients"

import S from "@/styles/modal.module.css"
import G from '@/styles/Globals.module.css'
import useFavorites from "@/hooks/useFavorites"

const ModalDrink = () => {
   const [recipe, setRecipe] = useState({});
   const [loadingRecipe, setLoadingRecipe] = useState(true);
   const [removeDrink, setRemoveDrink] = useState(false);
   
   const { drinkId, handleDrinkModalClick, openDrinkDialog } = useDrinks()
   const { addToFavs, favsList, removeFromFavs } = useFavorites()
  
   useEffect(() => {
      setLoadingRecipe(true)
      const getDrink = async drink => {
         try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`
            const { data } = await axios(url)
            setRecipe(data.drinks[0]);
         } catch (error) {
            console.log(error);
         } finally {
            setLoadingRecipe(false)
         }
      }

      if(drinkId) getDrink(drinkId) 
   }, [drinkId]);
   
   const isInFavsList = () => {
      return favsList.some( drinkState => drinkState.idDrink === drinkId ) 
   }

   const handleCloseModal = () => {
      handleDrinkModalClick()
   }

   const handleAddToFavorites = drink => {
      addToFavs(drink)
      handleCloseModal()
   }

   const handleRemoveFromFavorites = id => {
      setRemoveDrink(!removeDrink)
      removeFromFavs(id)
      handleCloseModal()
   }

   return (
      <dialog 
         id="DrinkDialog"
         open={openDrinkDialog}
         className={S.modal}
      >
         <div 
            className={S.background}
            onClick={() => handleCloseModal(recipe.drinkId)}
         />
         <div className={`${S['modal-content']} ${S['modal-content--drink']}`}>
            { loadingRecipe ? <Spinner /> : 
            drinkId === recipe.idDrink && ( <>
               <header className={S['modal__header']}>
                  <h2 className={S.title}>
                     {recipe.strDrink}
                  </h2>
                  <span 
                     className={S.close} 
                     onClick={() => handleCloseModal(recipe.drinkId)}
                  >&times;</span>
               </header>

               <div className={`${S['modal__body']} ${G.scroll}`}>
                  <div>
                     <Image 
                        src={recipe.strDrinkThumb}
                        width={600}
                        height={600}
                        alt={`Recipe Image ${recipe.strDrink}`}
                        className={`${S.image} ${S['image--loading']}`}
                     />
                     <p  className={S.details}><span>{recipe.strAlcoholic}</span> - <span>{recipe.strCategory}</span> - <span>{recipe.strGlass}</span></p>
                  </div>

                  <div className={S['modal__info']}>
                     <h2>You need</h2>
                     <QuantitiesIngredients recipe={recipe} />
                     <h2>You have to</h2>
                     <p>{recipe.strInstructions}</p>
                  </div>
               </div>

               <footer className={S.footer}>
                  { !isInFavsList() ? 
                     <Button 
                        handler={() => handleAddToFavorites(recipe)}
                     >Add to Favorites</Button>
                  : !removeDrink ?
                     <Button
                        handler={() => setRemoveDrink(!removeDrink)}
                     >Remove from Favorites</Button> 
                     : <div className={S.removeDrink}>
                        <p>Are you sure?</p>
                        <Button
                           handler={() => handleRemoveFromFavorites(recipe.idDrink)}
                        >Yes</Button>
                        <Button
                           handler={() => setRemoveDrink(!removeDrink)}
                        >No</Button>
                     </div>  
                  }
               </footer>
            </> ) }
         </div>
      </dialog>
   )
}
export default ModalDrink