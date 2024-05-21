import {Navbar} from "./navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <div className="container flex flex-row columns-3 bg-red-400">
          <input></input>
        </div>
      </header>
    </div>
  );
}

export default App;
