import {Formselect} from "./formselect";

export function Form() {
  return (
    <form className="container mx-auto py-8">
      <input
        type="search"
        placeholder="Enter your ingredients..."
        className="w-full h-16 px-3 text-black rounded mb-8 focus:outline-none focus:shadow-lg text-xl shadow-lg"
      ></input>
      <Formselect />
    </form>
  );
}
