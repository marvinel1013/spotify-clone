import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

function SearchInput({ query, setQuery }) {
  return (
    <div className="xl:mt-8">
      <label className="relative block md:w-[70%] lg:w-[50%] xl:w-[35%]">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="w-5 text-gray-400" />
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <XMarkIcon
            onClick={() => setQuery("")}
            className={`w-5 text-gray-400 ${
              query ? "visible" : "invisible"
            } cursor-pointer`}
          />
        </span>
        <input
          className="placeholder:text-gray-400 placeholder:text-sm placeholder:font-light border-none bg-neutral-800 w-full border rounded-full py-2 md:py-2.5 lg:py-3.5 px-10 pr-3 shadow-sm focus:outline-none focus:border-white focus:ring-white focus:ring-1 sm:text-sm xl:text-base"
          placeholder="What do you want to listen to?"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          autoFocus
        />
      </label>
    </div>
  );
}

export default SearchInput;
