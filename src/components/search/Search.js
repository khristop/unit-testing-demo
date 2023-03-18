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
    <form className="search-form" data-testid="search-form" onSubmit={handleSearch}>
      <div className="input-group">
          <input
            type="text"
            value={searchQuery}
            className="control"
            onChange={handleSearchChange}
            placeholder="Search for a user"
          />
      </div>
      <div className="form-actions">
        <button className="button-search" type="submit" disabled={loading}>
          {loading ? "Loading" : "Search"}
        </button>
      </div>
    </form>
  );
}

Search.defaultProps = {
  loading: false,
}

export default Search;