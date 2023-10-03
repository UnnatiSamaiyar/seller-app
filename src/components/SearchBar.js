import React, { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleIconClick = () => {
    handleSearch();
  };

  return (
    <div className="search-container">
    <div className="search-bar">
      <div className="search-icon" onClick={handleIconClick}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
    </div>
  );
};

export default SearchBar;
