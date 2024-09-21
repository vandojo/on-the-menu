import {useState} from "react";

import {PantryRecipe} from "./pantryrecipe";

export function Pantry() {
  const [pantryItems, SetPantryItems] = useState([
    {
      text: "Jamaican Jerk chicken",
      url: "https://www.bbcgoodfood.com/recipes/jamaican-jerk-chicken",
      ingredients: ["2 chicken thighs", "2 chicken legs"],
    },
    {
      text: "Teriyaki chicken",
      url: "https://www.bbcgoodfood.com",
      ingredients: ["mirin", "soy sauce", "ginger", "chicken"],
    },
  ]);

  return (
    <div className="grid ml-20 mr-20  grid-cols-2 md:grid-cols-4 gap-4 ">
      {pantryItems.map((item, key) => (
        <PantryRecipe key={key} item={item} id={key} />
      ))}
    </div>
  );
}
