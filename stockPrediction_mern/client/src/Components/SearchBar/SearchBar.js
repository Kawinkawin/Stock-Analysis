// src/Components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';
const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('IBM');

  const handleSearch = () => {
    onSearch(searchInput);
  };
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
       
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
