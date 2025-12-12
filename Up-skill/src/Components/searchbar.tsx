import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="relative">
      {/* Search Icon */}
      <button
        onClick={() => setShowSearch(!showSearch)}
        className="p-2 text-black hover:text-indigo-600"
      >
        <FaSearch size={75} />
      </button>

      {/* Search Input */}
      {showSearch && (
        <div className="absolute top-full right-0 text-black w-45 bg-gray-50 min-h-screen">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      )}
    </div>
  );
}

export default Searchbar;
