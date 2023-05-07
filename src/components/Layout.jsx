import Link from "next/link";
import { useRouter } from "next/router";
import useDrinks from "@/hooks/useDrinks";

import ExploreIcon from "./svg/ExploreIcon";
import FavouriteIcon from "./svg/FavouriteIcon";

import G from '@/styles/Globals.module.css'
import L from '../styles/layout.module.css'

const Layout = ({ children }) => {
   const router = useRouter()
   const { divRef } = useDrinks()

   return (
      <div 
         ref={divRef}
         className={`${G.scroll} ${L['h-100']}`}
      >
         <header className={L.header}>
            <h1 
               className={L.h1}
               onClick={() => router.push('/')}
            >Drink Recipes</h1>
            <nav>
               <ul className={L.navigation}>
                  <li>
                     <Link 
                        className={`${L.link} ${router.pathname === '/' && L.active}`}
                        href="./"
                     >
                        <ExploreIcon />
                        <p>Explore</p>
                     </Link>
                  </li>
                  <li>
                     <Link 
                        className={`${L.link} ${router.pathname === '/favorites' && L.active}`}
                        href="./favorites"
                     >
                        <FavouriteIcon />
                        <p>Favourites</p>
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
         {children}
      </div>
   )
}

export default Layout