import "./style.css";

export default function IngredientItem({ removeIngredient, name }) {
  return (
    <div className="container">
      {name}
      <img
        onClick={() => removeIngredient(name)}
        src="close-fill.png"
        alt="delete"
      ></img>
    </div>
  );
}
