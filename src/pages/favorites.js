import Layout from "@/components/Layout"
import React from 'react'
import useFavorites from "@/hooks/useFavorites"
import G from '@/styles/Globals.module.css'
import S from "@/styles/drinks.module.css"
import FavDrink from "@/components/FavDrink"
import ModalDrink from "@/components/modal/ModalDrink"


const Favorites = () => {
  const { favsList } = useFavorites()

  return ( <>
    <Layout>
      <main className={G.main}>
        <div>
          {favsList?.keys ? 
            <div className={S['list--grid']}>
              {favsList.map((drink) => (
                <FavDrink key={drink.idDrink} drink={drink} />
              ))}
            </div>
          : <p>
            No hay resultados. <span>Revisa lo que buscaste o intenta de otra forma.</span>
          </p> }
        </div>
      </main>
    </Layout>

    <ModalDrink />
  </> )
}

export default Favorites