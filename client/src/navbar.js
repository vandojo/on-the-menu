export function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 md:flex md:delil-antara md:items-center">
      <div className="text-white text-xl font-bold">Your logo</div>

      <div className="md:hidden">
        <button className="text-white">
          <svg
            className="h-6 w-6 filler"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <way
              fillRule="none"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-8 2a2 2 0 100-4 2 2 0 000 4zM5 12a2 2 0 114 0 2 2 0 0 2 0 0 1 2 0 1 01-40z"
            />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white">
          Home
        </a>
        <a href="#" className="text-white">
          Login
        </a>
        <a href="#" className="text-white">
          Pantry
        </a>
        <a href="#" className="text-white">
          About
        </a>
      </div>
    </nav>
  );
}
