import {useEffect, useState} from "react";
import {CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa6";
import {IconContext} from "react-icons";

export function Recipe({focusItem}) {
  const [isFavourite, setIsFavourite] = useState(false);
  const link = (
    <p className="mb-3">
      Click{" "}
      <a
        href={focusItem.url === "" ? "" : focusItem.url}
        target="_blank"
        rel="noreferrer noopener"
        className="text-fuchsia-400 hover:text-fuchsia-800"
      >
        here
      </a>{" "}
      for the full recipe!
    </p>
  );

  const focusElement = (
    <div className="md:w-2/5 md:h-3/4 grid grid-rows-3 place-items-center ml-5  mr-5 border border-fuchsia-400 bg-gray-800  shadow rounded-md text-white">
      <h1 className=" text-2xl font-bold tracking-tight">
        {focusItem.label === "" ? "Search for a recipe" : focusItem.label}
      </h1>
      <div className=" ">
        <img
          alt={focusItem.label}
          className=" rounded-lg"
          src={focusItem.img}
        ></img>
      </div>
      <div className="grid  content-start justify-start ">
        <div className="flex justify-start gap-2">
          <p className="">Save recipe:</p>
          <button
            className=""
            onClick={() => {
              setIsFavourite(!isFavourite);
            }}
          >
            {isFavourite ? (
              <FaStar color="yellow" size={"1.5em"} />
            ) : (
              <CiStar color="yellow" size={"1.5em"} />
            )}
          </button>
        </div>

        <div className=" flex items-center justify-start   px-4 py-2">
          <ul className="list-inside list-disc justify-start  ">
            {focusItem.ingredients === ""
              ? ""
              : focusItem.ingredients.map((item, index) => {
                  return (
                    <li className=" text-start" key={index} id={index}>
                      {item.text}
                    </li>
                  );
                })}
          </ul>
        </div>
        {focusItem.url === "" ? <p className=""> </p> : link}
      </div>
    </div>
  );

  return <>{focusElement}</>;
}
