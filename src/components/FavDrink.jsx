import { useState } from "react";
import useDrinks from "../hooks/useDrinks"
import S from "@/styles/drinks.module.css"
import Image from "next/image";

const FavDrink = ({drink}) => {
   const [isImageLoading, setIsImageLoading] = useState(true);
   const { handleDrinkModalClick, handleDrinkIdClick } = useDrinks()
 
   return (
      <div 
         className={S['fav-drink']}
         onClick={() => {
            handleDrinkModalClick()
            handleDrinkIdClick(drink.idDrink)
         }}
      >
         <Image 
            src={drink.strDrinkThumb}
            width={150}
            height={150}
            onLoad={() => setIsImageLoading(false)}
            alt={`Imagen de ${drink.strDrink}`}
            className={`${S.image} ${isImageLoading && S['image--loading']}`}
         />
         <p className={S['name--fav']}>{drink.strDrink}</p>
         <div>
            <p className={S.info}>{drink.strAlcoholic}</p>
            <p className={S.info}>{drink.strCategory}</p>
         </div>
      </div>
   )
}

export default FavDrink