import {useEffect, useState} from "react";

import {Recipe} from "./recipe";

import {Topbar} from "./topbar";

export function Gallery({
  items,
  apimethod,
  gallerydata,
  setgallerydata,
  topbar = "",
}) {
  const [focusItem, setFocusItem] = useState({
    label: "",
    img: "",
    source: "",
    ingredients: "",
    url: "",
    uri: "",
  });

  useEffect(() => {
    getGalleryData(items[0]);
  }, []);

  const recipeData = (e) => {
    let id = e.target.id;
    let data = {...gallerydata[id].recipe};
    setFocusItem({
      ...focusItem,
      label: data.label,
      img: data.images.THUMBNAIL.url,
      source: data.source,
      url: data.url,
      uri: data.uri,
      ingredients: data.ingredients,
    });
    console.log(data);
  };

  const makeGallery = (
    <div className="grid ml-20 mr-20  grid-cols-2 md:grid-cols-4 gap-4 w-3/5">
      {gallerydata.map((item, index) => {
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

  const getGalleryData = (data) => {
    apimethod(data).then((items) => {
      setgallerydata(items);
      setFocusItem({
        ...focusItem,
        label: items[0].recipe.label,
        img: items[0].recipe.images.THUMBNAIL.url,
        source: items[0].recipe.source,
        url: items[0].recipe.url,
        uri: items[0].recipe.uri,
        ingredients: items[0].recipe.ingredients,
      });
    });
  };

  const handleClick = (e) => {
    let val = e.target.id;
    getGalleryData(val);
  };

  return (
    <section className="bg-gray-900   ">
      {topbar === "" ? "" : <Topbar items={items} handleclick={handleClick} />}

      <div className="grid md:flex gap-4 grid-cols-1 md:grid-cols-2">
        <Recipe focusItem={focusItem} />
        {makeGallery}
      </div>
    </section>
  );
}
