import React, { useState } from "react";
import "./Search.css";

function Search({onSearch, loading}) {
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
        placeholder="Search for a user"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Loading" : "Search"}
      </button>
    </form>
  );
}

Search.defaultProps = {
  loading: false,
}

export default Search;