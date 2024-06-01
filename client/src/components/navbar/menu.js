export function Menu({idname, menuitems}) {
  const hamburgerClick = () => {
    let elem = document.getElementById(idname);
    if (elem.style.display === "") {
      elem.style.display = "block";
    } else {
      elem.style.display = "";
    }
  };

  const list_element = (
    <div className="hidden w-full    md:block md:w-auto" id={idname}>
      <ul
        className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg 
        md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700"
      >
        {menuitems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:hover:text-fuchsia-400 hover:text-fuchsia-400 text-white md:hover:text-fuchsia-400 md:dark:hover:text-fuchsia-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <button
        data-collapse-toggle={idname}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none
          focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        aria-controls={idname}
        aria-expanded="false"
        onClick={hamburgerClick}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {list_element}
    </>
  );
}
