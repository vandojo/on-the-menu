import {Gallery} from "./home/gallery";
export function RandomRecipe({
  items,
  apimethod,
  topbar,
  gallerydata,
  setgallerydata,
}) {
  return (
    <Gallery
      items={items}
      apimethod={apimethod}
      topbar={topbar}
      gallerydata={gallerydata}
      setgallerydata={setgallerydata}
    />
  );
}
