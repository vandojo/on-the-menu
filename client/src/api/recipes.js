export default class RecipesAPI {
  static fetchRandom() {
    return fetch(`http://localhost:3002/api`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  static searchRecipes(formData) {
    return fetch(`http://localhost:3002/search_recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}