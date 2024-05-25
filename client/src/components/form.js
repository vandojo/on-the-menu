import {useState} from "react";

export function Form() {
  const [mealMenu, setMealMenu] = useState(true);

  const handleClick = () => {
    setMealMenu(!mealMenu);
  };
  return (
    <form className="container mx-auto py-8">
      <input
        type="search"
        placeholder="Enter your ingredients..."
        className="w-full h-16 px-3 text-black rounded mb-8 focus:outline-none focus:shadow-lg text-xl shadow-lg"
      ></input>
      <div className="flex relative py-4 px-2 text-left">
        <div>
          <button
            type="button"
            onClick={handleClick}
            className="block justify-center bg-orange-600 rounded px-2 py-1
            hover:bg-orange-800 hover:ring-gray-900 ring-1 hover:ring-2 focus:ring-2 focus:ring-gray-900
            
            
             text-sm text-gray-800 font-semibold mb-2"
            aria-expanded="true"
            aria-haspopup="true"
            id="meal_menu"
          >
            Meal
          </button>
        </div>
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="meal_menu"
          tabIndex="-1"
          className={
            "absolute top-10  left-0 z-10 mt-2 origin-top-right  rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " +
            (mealMenu ? " transition ease-out " : " transition ease-in ") +
            (mealMenu ? " duration-100 " : " duration-75 ") +
            (mealMenu ? " transform opacity-100 " : " transform opacity-0 ") +
            (mealMenu ? " scale-100 " : " scale-95 ")
          }
        >
          <select
            id="meals"
            placeholder="Meal"
            name="mealtypes"
            multiple
            className="bg-orange-600 border p-0 font-sans  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full dark:bg-orange-600 dark:border-gray-600  dark:text-gray-900 font-semibold "
          >
            <option className="hover:bg-orange-400  hover:rounded focus:bg-orange-400">
              Pick a meal
            </option>
            <option
              className="hover:bg-orange-400  hover:rounded focus:bg-orange-400"
              value="Breakfast"
            >
              Breakfast
            </option>
            <option
              className="hover:bg-orange-400 hover:rounded focus:bg-orange-400"
              value="Lunch"
            >
              Lunch
            </option>
            <option
              className="hover:bg-orange-400 hover:rounded focus:bg-orange-400"
              value="Dinner"
            >
              Dinner
            </option>
            <option
              className="hover:bg-orange-400 hover:rounded focus:bg-orange-400"
              value="Snack"
            >
              Snack
            </option>
          </select>
        </div>
      </div>
    </form>
  );
}
