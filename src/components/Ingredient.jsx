import useDrinks from "../hooks/useDrinks"
import S from "@/styles/ingredient.module.css"
import Image from "next/image"
import { useState } from "react";

const Ingredient = ({ingredient}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
   const { handleIngredientModalClick, handleIngredientNameClick } = useDrinks()
   const { strIngredient1 } = ingredient

   return (
      <div 
         className={S.ingredient}
      >
         <Image
            src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Medium.png`}
            alt={`Imagen de ${strIngredient1}`}
            width={350}
            height={350}
            onLoad={() => setIsImageLoading(false)}
            className={`${S.image} ${isImageLoading && S['image--loading']}`}
            onClick={() => {
               handleIngredientModalClick()
               handleIngredientNameClick(strIngredient1)
            }}
         />

         <p
            className={S.text}
            onClick={() => {
               handleIngredientModalClick()
               handleIngredientNameClick(strIngredient1)
            }}
         >{strIngredient1}</p>
      </div> 
   )
}

export default Ingredient