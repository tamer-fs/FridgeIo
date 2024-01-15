import "./style.css";

export default function IngredientItem({ removeIngredient, name }) {
  return (
    <div className="container">
      {name}
      <img
        onClick={() => removeIngredient(name)}
        src="../../src/assets/icons/close-fill.png"
        alt="close"
      ></img>
    </div>
  );
}
