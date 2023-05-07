import React from 'react'

const QuantitiesIngredients = ({ recipe }) => {
   const showIngredients = () => {
      let ingredientsArray = []
      for(let i = 1; i < 16; i++) {
         if( recipe[`strIngredient${i}`] ) {
            ingredientsArray.push(
               <li key={i}>
                  <p>{recipe[`strIngredient${i}`]} - <span>{recipe[`strMeasure${i}`]}</span></p>
               </li>
            )
         }
      }
      return ingredientsArray
   }
   return (
      <ul>
         { showIngredients() }
      </ul>
   )
}

export default QuantitiesIngredients