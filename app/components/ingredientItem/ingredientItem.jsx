import "./style.css";

export default function IngredientItem({ removeIngredient, name }) {
  return (
    <div className="container">
      {name}

      <button onClick={() => removeIngredient(name)}>
        <img src="./close-fill.png" alt="delete" />
      </button>
    </div>
  );
}
