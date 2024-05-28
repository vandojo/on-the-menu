import {useState} from "react";
import {useRef} from "react";
export function Formselect({menuOptions}) {
  const [options, setOptions] = useState(false);
  const catMenu = useRef(null);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClick = () => {
    setOptions(!options);
  };
  const menuOpen = (e) => {
    if (options && !catMenu.current?.contains(e.target)) {
      handleClick();
    }
  };
  document.addEventListener("mousedown", menuOpen);

  const toggleBackground = (e) => {
    e.target.classList.contains("bg-orange-400")
      ? e.target.classList.remove("bg-orange-400")
      : e.target.classList.add("bg-orange-400");
  };

  const handleOptions = (e) => {
    let options = [...selectedOptions];
    e.target.classList.contains("bg-orange-400")
      ? options.push(e.target.textContent)
      : (options = options.filter((item) => item !== e.target.textContent));
    setSelectedOptions(options);
  };

  const items = menuOptions.map((opt) => {
    return (
      <div className=" relative py-2    text-left" key={opt.id}>
        <div>
          <button
            type="button"
            onClick={handleClick}
            className="block justify-center bg-orange-600 rounded px-2 py-1
        hover:bg-orange-800 hover:ring-gray-900 ring-1 hover:ring-2 focus:ring-2 focus:ring-gray-900
        
        
         text-sm text-gray-800 font-semibold mb-2"
            aria-expanded="true"
            aria-haspopup="true"
            id={opt.id}
          >
            {opt.placeholder}
          </button>
        </div>
        <div
          role="menu"
          ref={catMenu}
          aria-orientation="vertical"
          aria-labelledby={opt.id}
          tabIndex="-1"
          className={
            "absolute top-10   left-0 z-10 mt-2 origin-top-right  rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " +
            (options ? " transition ease-out " : " transition ease-in ") +
            (options ? " duration-100 " : " duration-75 ") +
            (options ? " transform opacity-100 " : " transform opacity-0 ") +
            (options ? " scale-100 " : " scale-95 ")
          }
        >
          <ul
            id={opt.placeholder}
            placeholder={opt.placeholder}
            name={Object.keys(opt)[0]}
            multiple
            className="bg-orange-600 border p-0 font-sans  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full dark:bg-orange-600 dark:border-gray-600  dark:text-gray-900 font-semibold "
          >
            <li className="hover:bg-orange-400 rounded  hover:rounded focus:bg-orange-400 px-1">
              {opt.txt}
            </li>

            {opt[Object.keys(opt)[0]].map((elem) => {
              return (
                <li
                  key={elem}
                  className="hover:bg-orange-400 rounded hover:rounded focus:bg-orange-400 px-1"
                  value={elem}
                  onClick={(e) => {
                    toggleBackground(e);
                    handleOptions(e);
                  }}
                >
                  {elem}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });

  return <>{items}</>;
}
