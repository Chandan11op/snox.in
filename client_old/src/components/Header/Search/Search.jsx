import React, { useState, useEffect } from "react";
import { X, Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../state/api";
import { motion } from "framer-motion";

const Search = ({ setShowSearch }) => {
  const { data } = useGetAllProductsQuery();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSuggestion = (e) => {
    const searchWord = e.target.value.toLowerCase();
    setQuery(searchWord);
    const filteredProducts = data?.filter(
      (item) =>
        item.title.toLowerCase().includes(searchWord) ||
        item.category.toLowerCase().includes(searchWord)
    );
    setSuggestions(searchWord === "" ? [] : filteredProducts);
  };

  const handleSearch = () => {
    // Already handled by suggestions filtering.
    // In a real app, this might navigate to a dedicated search page.
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col"
    >
      {/* Search Header */}
      <div className="w-full max-w-4xl mx-auto px-6 py-8 flex items-center gap-4">
        <SearchIcon size={24} className="text-gray-400" />
        <input
          autoFocus
          type="text"
          placeholder="Search for products..."
          value={query}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          onChange={handleSuggestion}
          className="w-full text-2xl md:text-4xl font-medium bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-300"
        />
        <button 
          onClick={() => setShowSearch(false)}
          className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-600"
        >
          <X size={24} />
        </button>
      </div>

      <div className="w-full h-px bg-gray-100"></div>

      {/* Search Results */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-4xl mx-auto px-6 py-8">
          {query === "" ? (
            <p className="text-gray-500 text-lg">Start typing to see products...</p>
          ) : suggestions.length === 0 ? (
            <p className="text-gray-500 text-lg">No products found for "{query}".</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestions.map((item, index) => (
                <Link
                  to={`/product/${item._id}`}
                  key={index}
                  onClick={() => setShowSearch(false)}
                  className="flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="h-24 w-24 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 flex-shrink-0">
                    <img src={item?.photo} alt={item?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{item?.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{item?.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
