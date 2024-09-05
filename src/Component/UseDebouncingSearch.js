import React, { useState } from "react";
import useDebouncedSearch from "./DebouncingApi";

const DebouncedSearchComponent = () => {
  const [query, setQuery] = useState("");
  const { results, isLoading, error } = useDebouncedSearch(query, 500, 60000); // Cache invalidation after 60s

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h2>Debounced Search with Caching</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a fruit..."
      />

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearchComponent;
