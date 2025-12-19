import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-[90%] max-w-[500px] flex items-center justify-center relative">
      <input
        type="text"
        placeholder="Search for delicious food..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full py-4 pl-12 pr-6 rounded-full border border-gray-200 dark:border-border outline-none text-lg text-foreground shadow-md transition-all duration-300 focus:shadow-lg focus:border-orange-500 focus:scale-[1.02] bg-white dark:bg-muted"
      />
      <RiSearchLine className="absolute left-5 text-muted-foreground text-xl pointer-events-none" />
    </div>
  );
};

export default SearchBar;
