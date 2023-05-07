import Head from 'next/head'
import { DrinksProvider } from "../context/DrinksProvider"

import '@/styles/globals.css'
import { FavoritesProvider } from "@/context/FavoritesProvider"
import { useEffect, useState } from "react"

export default function App({ Component, pageProps }) {
  const [readyPage, setReadyPage] = useState(false);

  useEffect(() => {
     setReadyPage(true)
  }, []);
  
  return (
    <>
      <Head>
        <title>Drink Recipes</title>
        <meta name="description" content="Drink recipes and ingredients, with diverse filters to search them" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DrinksProvider>
        <FavoritesProvider>
          { readyPage ? <Component {...pageProps} /> : null }
        </FavoritesProvider>
      </DrinksProvider>
    </>
  )
}
