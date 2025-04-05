import { useState, useRef, useEffect } from "react";
import { FaSearch, FaTimes, FaArrowRight, FaRegClock } from "react-icons/fa";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    "MERN stack tutorial",
    "React hooks explained",
    "MongoDB best practices",
  ]);
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Add to recent searches if not already there
      if (!recentSearches.includes(query.trim())) {
        setRecentSearches((prev) => [query.trim(), ...prev.slice(0, 4)]);
      }
      // Here you would typically handle the actual search
      console.log(`Searching for: ${query}`);
    }
  };

  const clearSearch = () => {
    setQuery("");
    inputRef.current.focus();
  };

  const removeRecentSearch = (index) => {
    setRecentSearches((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRecentSearchClick = (search) => {
    setQuery(search);
    // Move this search to the top of recent searches
    setRecentSearches((prev) => [
      search,
      ...prev.filter((item) => item !== search),
    ]);
    // Focus the input
    inputRef.current.focus();
  };

  // Close the active state when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isActive &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <div className="card-container">
      <form onSubmit={handleSearch} className="relative">
        <div
          className={`flex items-center border overflow-hidden transition-all duration-200 ${
            isActive
              ? "border-blue-500 ring-2 ring-blue-100"
              : "border-gray-200"
          } rounded-lg`}
        >
          <FaSearch className="ml-3 text-gray-400 text-sm" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsActive(true)}
            placeholder="Search articles..."
            className="w-full py-2 px-3 text-gray-700 outline-none bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="mr-2 p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-500"
            >
              <FaTimes className="text-xs" />
            </button>
          )}
        </div>

        {isActive && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
            {recentSearches.length > 0 && (
              <div className="p-2">
                <div className="px-3 py-1 text-xs font-medium uppercase text-gray-500">
                  Recent Searches
                </div>
                <ul>
                  {recentSearches.map((search, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between group"
                    >
                      <button
                        type="button"
                        onClick={() => handleRecentSearchClick(search)}
                        className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                      >
                        <FaRegClock className="mr-2 text-gray-400 text-xs" />
                        <span className="truncate">{search}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => removeRecentSearch(index)}
                        className="p-1 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 mr-1"
                      >
                        <FaTimes className="text-xs" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-gray-50 p-2 border-t border-gray-200">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors text-sm font-medium"
              >
                Search Now
                <FaArrowRight className="ml-2 text-xs" />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchComponent;
