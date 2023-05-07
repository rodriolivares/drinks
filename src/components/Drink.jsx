import { useState } from "react";
import useDrinks from "../hooks/useDrinks"
import S from "@/styles/drinks.module.css"
import Image from "next/image";

const Drink = ({drink}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { handleDrinkModalClick, handleDrinkIdClick } = useDrinks()

  return (
    <div 
      className={S.drink}
      onClick={() => {
        handleDrinkModalClick()
        handleDrinkIdClick(drink.idDrink)
      }}
    >
      <div>
        <Image 
          src={drink.strDrinkThumb}
          width={150}
          height={150}
          onLoad={() => setIsImageLoading(false)}
          alt={`Imagen de ${drink.strDrink}`}
          className={`${S.image} ${isImageLoading && S['image--loading']}`}
        />
      </div>
      <p className={S.name}>{drink.strDrink}</p>
    </div>
  )
}

export default Drink