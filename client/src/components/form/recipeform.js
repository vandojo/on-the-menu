import {Dropdowns} from "./dropdowns";
import {SubmitButton} from "./submitbutton";
import {InputBar} from "./inputbar";

export function Form({searchrecipes}) {
  const selectItems = [
    {
      items: ["Breakfast", "Lunch", "Dinner", "Snack"],
      placeholder: "Meal",
      id: "meal_menu",
      txt: "Meal",
      name: "mealType",
    },

    {
      items: [
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
      txt: "Cuisine",
      name: "cuisineType",
    },

    {
      items: [
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
      placeholder: "Health",
      id: "health_menu",
      txt: "Dietary preferences",
      name: "healthLabels",
    },

    {
      items: [
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
      txt: "Dish types",
      name: "dishType",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formVals = Object.fromEntries(formData);

    // remove empty strings from the form data
    const filteredData = Object.entries(formVals).filter(
      ([key, val]) => val !== ""
    );
    const data = Object.fromEntries(filteredData);
    console.log(data);

    searchrecipes(data);
  };
  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          className="w-full rounded-lg shadow border md:mt-0   xl:p-0
        bg-gray-800 border-gray-700
        "
        >
          <div className="p-6 space-y-4 md:space-y-6  sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
              action="/search_recipes"
              method="post"
            >
              <InputBar
                idname={"searchbar"}
                name={"q"}
                inputtype={"text"}
                placeholdertxt={"rice chicken tofu"}
                labeltxt={"Enter ingredients - separate by a space"}
              />

              <div className="flex flex-wrap  sm:grid-cols-2 md:grid-cols-4  gap-4  justify-center">
                <Dropdowns selectItems={selectItems} />
              </div>
              <SubmitButton btntxt={"Search recipes"} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
