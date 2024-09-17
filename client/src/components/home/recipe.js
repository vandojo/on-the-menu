import {useEffect, useState} from "react";
export function Recipe({focusItem}) {
  const focusElement = (
    <div className="w-2/5  mr-20 border border-red-400 text-white">
      <h1 className="">{focusItem.label === "" ? "" : focusItem.label}</h1>
      <br></br>

      <img
        alt={focusItem.label}
        className="h-auto rounded-lg w-4/12"
        src={focusItem.img}
      ></img>
      <p>
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

      <ul>
        {focusItem.ingredients === ""
          ? ""
          : focusItem.ingredients.map((item, index) => {
              return <li id={index}>{item.text}</li>;
            })}
      </ul>
    </div>
  );

  return <>{focusElement}</>;
}
