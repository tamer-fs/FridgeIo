import "./style.css";
import deleteImage from "./close-fill.png";

export default function IngredientItem({ removeIngredient, name }) {
  return (
    <div className="container">
      {name}
      <img
        src={deleteImage}
        alt="delete"
        onClick={() => removeIngredient(name)}
      />
    </div>
  );
}
