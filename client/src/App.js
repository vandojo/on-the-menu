import {NavBar} from "./navbar";
import {Form} from "./components/form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <section className="bg-indigo-500 h-50 p-8 rounded">
          <Form />
        </section>
      </header>
    </div>
  );
}

export default App;
