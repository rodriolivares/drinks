import Layout from "@/components/Layout"
import NameShelf from "@/components/shelves/NameShelf"
import IngredientShelf from "@/components/shelves/IngredientShelf"
import CategoryShelf from "@/components/shelves/CategoryShelf"
import AlcoholicShelf from "@/components/shelves/AlcoholicShelf"
import GlassShelf from "@/components/shelves/GlassShelf"
import RandomShelf from "@/components/shelves/RandomShelf"
import IngredientSearch from "@/components/IngredientSearch"
import ModalDrink from "@/components/modal/ModalDrink"
import ModalIngredient from "@/components/modal/ModalIngredient"

import G from "@/styles/Globals.module.css"

export default function Home({ ingredients, categories, glasses, alcoholics }) {

  return (
    <>
      <Layout>
        <main className={G.main}>
          <NameShelf />
          <IngredientShelf ingredients={ingredients} />
          <CategoryShelf categories={categories} />
          <AlcoholicShelf alcoholics={alcoholics} />
          <GlassShelf glasses={glasses} />
          <RandomShelf />
          <IngredientSearch ingredients={ingredients} />
        </main>
      </Layout>

      <ModalDrink />
      <ModalIngredient />
    </>
  )
}

export async function getStaticProps() {
  const urlIngredients = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  const urCategories = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  const urlGlasses = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
  const urlAlcoholic = "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"

  const [ resIngredients, resCategories, resGlasses, resAlcoholic ] = await Promise.all([
    fetch(urlIngredients),
    fetch(urCategories),
    fetch(urlGlasses),
    fetch(urlAlcoholic)
  ])
  const [{ drinks: ingredients }, { drinks: categories }, { drinks: glasses }, { drinks: alcoholics }] = await Promise.all([
    resIngredients.json(),
    resCategories.json(),
    resGlasses.json(),
    resAlcoholic.json()
  ])

  return {
    props: { ingredients, categories, glasses, alcoholics }
  }
}