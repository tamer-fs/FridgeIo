import "./style.css";

export default function IngredientItem({ removeIngredient, name }) {
  return (
    <div className="container">
      {name}
      <img
        onClick={() => removeIngredient(name)}
        src="https://icons8.com/icon/23543/close-window"
        alt="delete"
      ></img>
    </div>
  );
}
