import S from "@/styles/drinks.module.css"
import Spinner from "./elements/Spinner";
import Drink from "./Drink";

const DrinksList = ({ beingUsed, loading, drinks }) => {
  if (!beingUsed) {
    return null;
  }
  
  if (loading) {
    return <Spinner />;
  }
  
  if (drinks?.keys) {
    return (
      <div className={S.list}>
        {drinks.map((drink) => (
          <Drink key={drink.idDrink} drink={drink} />
        ))}
      </div>
    );
  }
  
  return (
    <p>
      No hay resultados. <span>Revisa lo que buscaste o intenta de otra forma.</span>
    </p>
  );
}

export default DrinksList