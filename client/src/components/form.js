export function Form() {
  return (
    <form className="container mx-auto py-8">
      <input
        type="search"
        placeholder="Enter your ingredients..."
        className="w-full h-16 px-3 text-black rounded mb-8 focus:outline-none focus:shadow-lg text-xl shadow-lg"
      ></input>
      <nav class="flex">
        <a className="rounded no-underline text-orange-400 py-3 px-4 font-medium mr-3 bg-indigo-500 hover:bg-indigo-700">
          Cardamom
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo"
          href="#"
        >
          Cinnamon
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker"
          href="#"
        >
          Chamomille
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo"
          href="#"
        >
          Apple
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker"
          href="#"
        >
          Mint
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo"
          href="#"
        >
          Curry
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker"
          href="#"
        >
          Fragrance
        </a>
      </nav>
    </form>
  );
}
