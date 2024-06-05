import {Navbar} from "./components/navbar/nav";
import {Form} from "./components/form/recipeform";
import {Gallery} from "./components/home/gallery";
//import {RecipeOverview} from "./components/overview";

import {LoginForm} from "./components/loginform";
import {SignUpForm} from "./components/signupform";

import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

import RecipesAPI from "./api/recipes";

import "./App.css";

function App() {
  const navbar_menu_elements = [
    {name: "Home", link: "/"},
    {name: "Search", link: "/search"},
    {name: "Login", link: "/login"},
    {name: "Sign Up", link: "/register"},
  ];

  const mealTypes = ["All", "Breakfast", "Lunch", "Snack", "Dinner"];

  const searchRecipes = (data) => {
    RecipesAPI.searchRecipes(data).then((response) => console.log(response));

    //
  };

  const fetchRandom = (params) => {
    let data = RecipesAPI.fetchRandom(params).then((response) => {
      return response.message;
    });
    //console.log(data);
    return data;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar menu_items={navbar_menu_elements} />
                <Outlet />
              </>
            }
          >
            <Route
              index
              element={<Gallery items={mealTypes} apimethod={fetchRandom} />}
            />
            <Route
              path="search"
              element={<Form searchrecipes={searchRecipes} />}
            />
            <Route
              path="login"
              element={<LoginForm register_page_route={"/register"} />}
            />
            <Route
              path="register"
              element={<SignUpForm login_page_route={"/login"} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
