import { useState, createContext, useEffect, useRef } from 'react'
const FavoritesContext = createContext() 

const FavoritesProvider = ({children}) => {
   const favsListLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('favsList')) ?? [] : []
   const [favsList, setFavsList] = useState(favsListLS);

   
   useEffect(() => {
      localStorage.setItem('favsList', JSON.stringify( favsList ));
   }, [favsList]);
   
   const addToFavs = drink => {  
      setFavsList([...favsList, drink])
   }

   const removeFromFavs = id => {
      const newList = favsList.filter( drink => drink.idDrink !== id )
      setFavsList(newList);
   }

   return (
      <FavoritesContext.Provider
         value={{
            favsList,
            addToFavs,
            removeFromFavs
         }}
      >{children}</FavoritesContext.Provider>
   )
}
export {
   FavoritesProvider
}
export default FavoritesContext