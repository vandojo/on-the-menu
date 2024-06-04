import {useEffect, useState} from "react";

export function Gallery({items, apimethod}) {
  const [galleryData, setGalleryData] = useState([]);
  const [focusItem, setFocusItem] = useState(null);

  const baseCLs =
    "text-white border hover:text-fuchsia-400 border-gray-900 bg-gray-900 hover:border-fuchsia-400  focus:ring-2 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3  focus:ring-fuchsia-500";
  const focusCLS =
    "text-fuchsia-400 hover:text-white border border-fuchsia-400 bg-gray-900 hover:bg-fuchsia-400 focus:ring-2 focus:outline-none focus:ring-fuchsia-400 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3";
  const toggleClass = (e) => {
    items.map((item) => (document.getElementById(item).className = baseCLs));

    e.target.className = focusCLS;
  };

  const focusElement = (
    <div className="w-2/5  mr-20 border border-red-400">
      {focusItem ? focusItem : ""}
    </div>
  );

  const recipeData = (e) => {
    let id = e.target.id;
    let data = {...galleryData[id].recipe};
    console.log(data);
  };

  const makeGallery = (
    <div className="grid ml-20 mr-20  grid-cols-2 md:grid-cols-4 gap-4 w-3/5">
      {galleryData.map((item, index) => {
        return (
          <div key={index} className="justify-center flex  ">
            <img
              onClick={recipeData}
              id={index}
              className="h-auto rounded-lg w-full hover:opacity-50"
              src={item.recipe.images.SMALL.url}
              alt={item.recipe.label}
            />
          </div>
        );
      })}
    </div>
  );

  const getGalleryData = () => {
    apimethod().then((items) => setGalleryData(items));
  };

  const handleClick = (e) => {
    toggleClass(e);
    getGalleryData();
  };

  const topbar = (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap ">
      {items.map((item) => (
        <button
          id={item}
          key={item}
          type="button"
          onClick={handleClick}
          className={baseCLs}
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <section className="bg-gray-900   ">
      {topbar}
      <div className="flex ">
        {makeGallery}
        {focusElement}
      </div>
    </section>
  );
}
