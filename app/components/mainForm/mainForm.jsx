import { useState } from "react";
import "./style.css";
import IngredientItem from "../ingredientItem/ingredientItem";

export default function MainForm() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsInput, setIngredientsInput] = useState("");
  const [random, setRandom] = useState(0);
  const [foundRecepies, setFoundRecepies] = useState([]);

  function addIngredient() {
    if (ingredientsInput) {
      let newIngredients = ingredients;
      newIngredients.push(ingredientsInput);
      setIngredients(newIngredients);
      setIngredientsInput("");
    }
  }

  const getRecepies = async () => {
    await setFoundRecepies([]);
    let foundRecepiesCopy = foundRecepies;
    let recepiesTotal = [];
    for (let i = 0; i < ingredients.length; i++) {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients[i]}`;
      const res = await fetch(url);
      const data = await res.json();
      foundRecepiesCopy.push(data.meals);
    }
    for (let i = 0; i < foundRecepiesCopy.length; i++) {
      for (let j = 0; j < foundRecepiesCopy[i].length; j++) {
        recepiesTotal.push(foundRecepiesCopy[i][j]);
      }
    }
    setFoundRecepies(recepiesTotal);
    console.log(recepiesTotal);
  };

  const removeIngredient = (name) => {
    let listCopy = ingredients;
    let index = listCopy.indexOf(name);
    listCopy.splice(index, 1);
    setIngredients(listCopy);
    setRandom(Math.random() * 10000 + 1);
  };

  return (
    <div className="form-container">
      <div className="input-container">
        <input
          onChange={(text) => {
            setIngredientsInput(text.target.value);
          }}
          type="text"
          aria-label="-"
          placeholder="Enter an ingredient"
          value={ingredientsInput}
        />
        <button
          onClick={() => {
            addIngredient();
          }}
        >
          Enter
        </button>
      </div>
      <div className="ingredients-container">
        <h2>Ingredients</h2>
        <div className="ingredients-list">
          {ingredients.length === 0 && "No ingredients added yet"}
          {ingredients.map((name) => {
            return (
              <IngredientItem name={name} removeIngredient={removeIngredient} />
            );
          })}
        </div>
        <button onClick={() => getRecepies()}>Get recepies</button>
      </div>
      <div className="found-recepies">
        <h2>{foundRecepies.length > 0 && "Found recepies"}</h2>
        {foundRecepies.map((recepie) => {
          return (
            <div className="meal-container">
              <h3>{recepie.strMeal}</h3>
              <img
                className="recepie-img"
                src={recepie.strMealThumb}
                alt="food-image"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
