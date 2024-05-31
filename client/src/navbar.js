import {useState} from "react";

import {Logo} from "./components/navbar/logo";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="bg-indigo-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Logo />
            <div className="relative py-4 px-2 inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-indigo-900 hover:bg-indigo-500"
                  id="options_menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  Options
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "absolute right-0 z-10 mt-2 dark:bg-indigo-400  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " +
                  (openMenu
                    ? " transition ease-out "
                    : " transition ease-in ") +
                  (openMenu ? " duration-100 " : " duration-75 ") +
                  (openMenu
                    ? " transform opacity-100 "
                    : " transform opacity-0 ") +
                  (openMenu ? " scale-100 " : " scale-95 ")
                }
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options_menu"
                tabIndex="-1"
              >
                <div className="py-1 " role="none">
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-indigo-500 mt-0 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-indigo-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Pantry
                  </a>

                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="text-gray-700 block hover:bg-indigo-500 w-full px-4 py-3 text-left text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      Log in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
