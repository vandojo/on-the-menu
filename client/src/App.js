import {Navbar} from "./components/navbar/nav";
import {Form} from "./components/form/recipeform";
import {RecipeOverview} from "./components/overview";

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

  const searchRecipes = (data) => {
    RecipesAPI.searchRecipes(data).then((response) => console.log(response));

    //RecipesAPI.fetchRandom().then((response) => console.log(response));
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
            <Route index element={<RecipeOverview />} />
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
