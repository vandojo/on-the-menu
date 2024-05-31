export function InputBar({idname, labeltxt, inputtype, name, placeholdertxt}) {
  return (
    <div className="text-left">
      <label
        htmlFor={idname}
        className="block mb-2 text-sm font-medium text-white"
      >
        {labeltxt}
      </label>
      <input
        type={inputtype}
        name={name}
        id={idname}
        className=" sm:text-sm rounded-lg outline-none border-2 focus:ring-fuchsia-600   hover:border-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
        required=""
        placeholder={placeholdertxt}
      ></input>
    </div>
  );
}
