import axios from "axios"
import { useEffect, useState } from "react"
import useDrinks from "../../hooks/useDrinks"

import Image from "next/image"
import Spinner from "../elements/Spinner"

import S from "@/styles/modal.module.css"
import G from '@/styles/Globals.module.css'

const ModalIngredient = () => {
   const [loadingIngredient, setLoadingIngredient] = useState(true);
   const [ingredient, setIngredient] = useState({});
   
   const { openIngredientDialog, ingredientName, handleIngredientModalClick } = useDrinks()
  
   useEffect(() => {
      setLoadingIngredient(true)
      const getIngredient = async ingredient => {
         try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`
            const { data } = await axios(url)
            setIngredient(data.ingredients[0]);
         } catch (error) {
            console.log(error);
         } finally {
            setLoadingIngredient(false)
         }
      }

      if(ingredientName) getIngredient(ingredientName)
   }, [ingredientName]);

   const { strIngredient, strDescription, strType, strAlcohol, strABV } = ingredient

   const handleCloseModal = value => {
      handleIngredientModalClick()
   }

   return (
      <dialog 
         id="DrinkDialog"
         open={openIngredientDialog}
         className={S.modal}
      >
         <div 
            className={S.background}
            onClick={() => handleCloseModal()}
         />
         <div className={`${S['modal-content']} ${S['modal-content--ingredient']}`}>
            {loadingIngredient ? <Spinner /> : 
            ingredientName.toLowerCase() === strIngredient.toLowerCase() && ( <>
               <header className={S['modal__header']}>
                  <h2 className={S.title}>{ingredientName}</h2>
                  <span 
                     className={S.close} 
                     onClick={() => handleCloseModal()}
                  >&times;</span>
               </header>
               <div className={`${S['modal__body']} ${G.scroll}`}>
                  <div>
                     <Image 
                        src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}.png`}
                        width={600}
                        height={600}
                        alt={`Ingredient Image ${strIngredient}`}
                        className={S.image}
                     />
                     <div className={S.details}>
                        <p>Type: {strType}</p>
                        { strAlcohol === 'Yes' ? 
                           strABV ? 
                              <p>It has {strABV}% alcohol</p> 
                              : <p>It is Alcoholic</p> 
                           : null
                        }
                        { strAlcohol === 'No' && (
                           <p>{`It has no alcohol`}</p>
                        ) }
                     </div>
                  </div>
                  <div className={S['modal__info']}>
                     <h2>Description</h2>
                     <p>{strDescription ? strDescription : 'There is no description for this ingredient'}</p>
                  </div>
               </div>
            </> ) }
         </div>
      </dialog>
   )
}

export default ModalIngredient