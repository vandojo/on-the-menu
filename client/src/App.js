import {Navbar} from "./components/navbar/nav";
import {Form} from "./components/form/recipeform";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import RecipesAPI from "./api/recipes";

import "./App.css";

function App() {
  const navbar_menu_elements = [
    {name: "Home", link: "https://www.github.com"},
    {name: "Login", link: "https://www.github.com"},
    {name: "Pantry", link: "https://www.github.com"},
    {name: "About", link: "https://www.github.com"},
  ];

  const searchRecipes = (data) => {
    RecipesAPI.searchRecipes(data).then((response) => console.log(response));
  };

  //RecipesAPI.fetchRandom().then((response) => console.log(response));

  return (
    <div className="App">
      <Navbar menu_items={navbar_menu_elements} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Form searchrecipes={searchRecipes} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
