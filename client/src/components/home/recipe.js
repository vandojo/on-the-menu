import {useEffect, useState} from "react";

export function Recipe({focusItem}) {
  const focusElement = (
    <div className="w-full h-full md:w-2/5 md:h-1/2 grid grid-rows-3 place-items-center  mr-20 border border-fuchsia-400 bg-gray-800  shadow rounded-md text-white">
      <h1 className="mb-2 text-2xl font-bold tracking-tight">
        Ingredients for: {focusItem.label === "" ? "" : focusItem.label}
      </h1>
      <div>
        <img
          alt={focusItem.label}
          className=" rounded-lg"
          src={focusItem.img}
        ></img>
      </div>
      <div className="flex content-start justify-start">
        <div className=" flex items-center justify-start   px-4 py-2">
          <ul className="list-inside list-disc justify-start ">
            {focusItem.ingredients === ""
              ? ""
              : focusItem.ingredients.map((item, index) => {
                  return (
                    <li className=" text-start" id={index}>
                      {item.text}
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
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
    </div>
  );

  return <>{focusElement}</>;
}