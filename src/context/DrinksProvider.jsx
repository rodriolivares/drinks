import { useState, createContext, useEffect, useRef } from 'react'
const DrinksContext = createContext() 

const DrinksProvider = ({children}) => {
   const [drinkId, setDrinkId] = useState(null);
   const [ingredientName, setIngredientName] = useState(null);

   const [openDrinkDialog, setOpenDrinkDialog] = useState(false);
   const [openIngredientDialog, setOpenIngredientDialog] = useState(false);

   const handleDrinkModalClick = () => {
      setOpenDrinkDialog(!openDrinkDialog)
   }
   const handleDrinkIdClick = id => {
      setDrinkId(id)
   }
   
   const handleIngredientModalClick = () => {
      setOpenIngredientDialog(!openIngredientDialog)
   }
   const handleIngredientNameClick = name => {
      setIngredientName(name)
   }

   const divRef = useRef(null);
   const setInertAttribute = value => {
      if (divRef.current) {
         if (value) {
            divRef.current.setAttribute('inert', '');
         } else {
            divRef.current.removeAttribute('inert');
         }
      }
   }
   useEffect(() => {
      if(openDrinkDialog) setInertAttribute(openDrinkDialog)
      else setInertAttribute(openDrinkDialog)
   }, [openDrinkDialog, openIngredientDialog])
   
   return (
      <DrinksContext.Provider
         value={{
            drinkId,
            ingredientName,
            openDrinkDialog,
            openIngredientDialog,
            divRef,

            handleDrinkModalClick,
            handleDrinkIdClick,
            handleIngredientModalClick,
            handleIngredientNameClick,
         }}
      >{children}</DrinksContext.Provider>
   )
}
export {
   DrinksProvider
}
export default DrinksContext