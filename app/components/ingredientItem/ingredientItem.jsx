import "./style.css";
import icon from "./close-fill";

export default function IngredientItem({ removeIngredient, name }) {
  return (
    <div className="container">
      {name}

      <img src={icon} alt="delete" onClick={() => removeIngredient(name)} />
    </div>
  );
}
