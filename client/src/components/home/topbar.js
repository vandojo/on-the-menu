export function Topbar({items, handleclick}) {
  const baseCLs =
    "text-white border hover:text-fuchsia-400 border-gray-900 bg-gray-900 hover:border-fuchsia-400  focus:ring-2 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3  focus:ring-fuchsia-500";
  const focusCLS =
    "text-fuchsia-400 hover:text-white border border-fuchsia-400 bg-gray-900 hover:bg-fuchsia-400 focus:ring-2 focus:outline-none focus:ring-fuchsia-400 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3";
  const toggleClass = (e) => {
    items.map((item) => (document.getElementById(item).className = baseCLs));

    e.target.className = focusCLS;
    handleclick(e);
  };
  const topbar = (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap ">
      {items.map((item) => (
        <button
          id={item}
          key={item}
          type="button"
          onClick={toggleClass}
          className={item === items[0] ? focusCLS : baseCLs}
        >
          {item}
        </button>
      ))}
    </div>
  );

  return <>{topbar}</>;
}
