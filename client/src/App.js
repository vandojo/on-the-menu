import {Navbar} from "./components/navbar/nav";
import {Form} from "./components/recipeform";

import "./App.css";

function App() {
  const navbar_menu_elements = [
    {name: "Home", link: "https://www.github.com"},
    {name: "Login", link: "https://www.github.com"},
    {name: "Pantry", link: "https://www.github.com"},
    {name: "About", link: "https://www.github.com"},
  ];

  return (
    <div className="App">
      <Navbar menu_items={navbar_menu_elements} />
      <Form />
    </div>
  );
}

export default App;
