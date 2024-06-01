export function Dropdowns({selectItems}) {
  const selectDropdowns = selectItems.map((elem) => {
    return (
      <div key={elem.id} className="relative h-10 w-40 ">
        <select
          name={elem.name}
          multiple=""
          className="text-white focus:bg-gray-700 peer h-full border-gray-600 border-1  rounded-[7px] w-full  border  border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-fuchsia-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        >
          <option value="">{elem.placeholder}</option>
          {elem.items.map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
        <label className="text-white focus-text-white pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-fuchsia-600 before:border-gray-600  peer-focus:after:border-t-2 peer-focus:after:border-r-2 after:border-gray-600 peer-focus:after:border-fuchsia-600  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent ">
          {elem.txt}
        </label>
      </div>
    );
  });

  return <>{selectDropdowns}</>;
}
