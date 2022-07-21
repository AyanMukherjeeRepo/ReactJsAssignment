import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="What do you want to watch"
      />
      <button className="search-btn">SEARCH</button>
    </div>
  );
}

export default Search;
