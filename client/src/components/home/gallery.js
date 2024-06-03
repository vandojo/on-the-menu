import {useEffect, useState} from "react";

export function Gallery({items, apimethod}) {
  const [galleryData, setGalleryData] = useState([]);
  const baseCLs =
    "text-white border hover:text-fuchsia-400 border-gray-900 bg-gray-900 hover:border-fuchsia-400  focus:ring-2 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3  focus:ring-fuchsia-500";
  const focusCLS =
    "text-fuchsia-400 hover:text-white border border-fuchsia-400 bg-gray-900 hover:bg-fuchsia-400 focus:ring-2 focus:outline-none focus:ring-fuchsia-400 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3";
  const toggleClass = (e) => {
    items.map((item) => (document.getElementById(item).className = baseCLs));

    e.target.className = focusCLS;
  };

  const makeGallery = (
    <div className="grid  pl-10 grid-cols-2 md:grid-cols-5 gap-4">
      {galleryData.map((item, index) => {
        return (
          <div key={index}>
            <img
              key={item}
              className="h-auto rounded-lg"
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
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
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
    <section className="bg-gray-900">
      {topbar}
      {makeGallery}
    </section>
  );
}
