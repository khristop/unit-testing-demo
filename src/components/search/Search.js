import React, { useState } from "react";
import "./Search.css";

function Search({onSearch}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a user profile"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;