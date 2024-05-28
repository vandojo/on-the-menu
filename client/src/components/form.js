import {Formselect} from "./formselect";
import {useState} from "react";

export function Form() {
  const [formInput, setFormInput] = useState("");

  const filterOptions = [
    [
      {
        mealtypes: ["Breakfast", "Lunch", "Dinner", "Snack"],
        placeholder: "Meal",
        id: "meal_menu",
        txt: "Pick a meal",
      },
    ],
    [
      {
        cuisineType: [
          "American",
          "Asian",
          "British",
          "Italian",
          "Mediterranean",
          "Chinese",
          "Caribbean",
        ],
        placeholder: "Cuisine",
        id: "cuisine_menu",
        txt: "Pick a cuisine",
      },
    ],
    [
      {
        health: [
          "celery-free",
          "gluten-free",
          "vegetarian",
          "vegan",
          "soy-free",
          "kosher",
          "wheat-free",
          "fish-free",
          "egg-free",
          "shellfish-free",
        ],
        placeholder: "health",
        id: "health_menu",
        txt: "Diet preferences",
      },
    ],
    [
      {
        dishType: [
          "Bread",
          "Cereals",
          "Desserts",
          "Drinks",
          "Main course",
          "Pancake",
          "Salad",
          "Preserve",
          "Sandwiches",
          "Side dish",
          "Soup",
          "Starter",
          "Sweets",
        ],
        placeholder: "Dish",
        id: "dish_menu",
        txt: "Dish options",
      },
    ],
  ];

  const handleInputChange = (e) => {
    setFormInput(e.target.value);
  };

  return (
    <form className="container  py-8">
      <input
        type="input"
        name="query"
        placeholder="Enter your ingredients..."
        className="w-full h-16 px-3 text-black rounded  focus:outline-none focus:shadow-lg text-xl shadow-lg"
        value={formInput}
        onChange={handleInputChange}
      ></input>
      <div className="grid grid-cols-4 ">
        {filterOptions.map((item) => (
          <Formselect key={item[0].id} menuOptions={item} />
        ))}
      </div>
    </form>
  );
}
