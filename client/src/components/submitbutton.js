export function SubmitButton({btntxt}) {
  return (
    <button
      type="submit"
      className="w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-fuchsia-800"
    >
      {btntxt}
    </button>
  );
}
