import {Gallery} from "./home/gallery";
export function RecipeOverview({apimethod}) {
  const mealTypes = ["All", "Breakfast", "Lunch", "Snack", "Dinner"];
  return <Gallery items={mealTypes} apimethod={apimethod} />;
}
