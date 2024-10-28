import {Navbar} from "./components/navbar/nav";
import {Form} from "./components/form/recipeform";
//import {Gallery} from "./components/home/gallery";
import {RandomRecipe} from "./components/randomrecipe";
//import {RecipeOverview} from "./components/overview";

import {Pantry} from "./components/pantry/pantry";

import {LoginForm} from "./components/login/loginform";
import {SignUpForm} from "./components/signup/signupform";

import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import {useState} from "react";
import RecipesAPI from "./api/recipes";

import "./App.css";

function App() {
  const [galleryData, setGalleryData] = useState([]);
  const navbar_menu_elements = [
    {name: "Home", link: "/"},
    {name: "Random", link: "/random"},
    //{name: "Pantry", link: "/pantry"},
    {name: "Login", link: "/login"},
    {name: "Sign Up", link: "/register"},
  ];

  const mealTypes = ["All", "Breakfast", "Lunch", "Snack", "Dinner"];

  const searchRecipes = (data) => {
    let results = RecipesAPI.searchRecipes(data).then((response) => {
      return response.message;
    });

    return results;

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
    <div className="App bg-gray-900">
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
              path="random"
              element={
                <RandomRecipe
                  items={mealTypes}
                  apimethod={fetchRandom}
                  topbar="true"
                  gallerydata={galleryData}
                  setgallerydata={setGalleryData}
                />

                // <Gallery
                //   items={mealTypes}
                //   apimethod={fetchRandom}
                //   topbar="true"
                //   gallerydata={galleryData}
                //   setgallerydata={setGalleryData}
                // />
              }
            />
            <Route
              index
              element={
                <Form
                  searchrecipes={searchRecipes}
                  apimethod={fetchRandom}
                  items={mealTypes}
                  gallerydata={galleryData}
                  setgallerydata={setGalleryData}
                />
              }
            />
            <Route path="pantry" element={<Pantry />} />
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
