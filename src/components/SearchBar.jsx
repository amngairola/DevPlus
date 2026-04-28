import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const SearchBar = ({ onSearch, initialValue = "" }) => {
  const [input, setInput] = useState(initialValue);

  //This runs on every render (just like any hook)
  const debounce = useDebounce(input, 1000);

  useEffect(() => {
    if (debounce) onSearch(debounce);
  }, [debounce]);

  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search GitHub username..."
      className="w-full px-5 py-3 rounded-2xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;

/*  ---------DOC-----------
  Full flow
User types → input updates
Component re-renders
useDebounce(input, 500) runs again
useEffect detects value change
Starts new timer
Clears old timer
  */
