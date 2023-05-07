import { useContext } from 'react'
import FavoritesContext from "../context/FavoritesProvider"
const useFavorites = () => {
   return useContext(FavoritesContext)
}
export default useFavorites