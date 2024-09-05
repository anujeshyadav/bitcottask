import { useState, useEffect, useRef } from "react";

const mockApi = (query) => {
  const data = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredData = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredData);
    }, 500); // Simulate network latency
  });
};

// Custom hook for debounced search with caching
const useDebouncedSearch = (
  query, // searching Item
  delay = 500, // making a specific delay
  invalidateCacheAfterMs = null
) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cache object in memory
  const cacheRef = useRef({});

  // Keep track of query debounce timeout
  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    console.log(cacheRef.current);
    if (!query) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    // Check if results are already cached
    if (cacheRef.current[query]) {
      setResults(cacheRef.current[query].data);
      return;
    }

    // Clear any previous debounce timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Debounce: Delay the API call
    debounceTimeoutRef.current = setTimeout(() => {
      setIsLoading(true);
      setError(null);

      mockApi(query)
        .then((data) => {
          setResults(data);
          cacheRef.current[query] = { data, timestamp: Date.now() }; // Store in cache with timestamp
          setIsLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch data");
          setIsLoading(false);
        });
    }, delay);

    return () => {
      clearTimeout(debounceTimeoutRef.current); // Cleanup debounce timeout on unmount or when the query changes
    };
  }, [query, delay]);

  // Optional: Cache invalidation after a certain time
  useEffect(() => {
    if (invalidateCacheAfterMs) {
      const intervalId = setInterval(() => {
        const now = Date.now();
        for (const cachedQuery in cacheRef.current) {
          if (
            now - cacheRef.current[cachedQuery].timestamp >
            invalidateCacheAfterMs
          ) {
            delete cacheRef.current[cachedQuery]; // Invalidate old cache
          }
        }
      }, invalidateCacheAfterMs);

      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }
  }, [invalidateCacheAfterMs]);

  return { results, isLoading, error };
};

export default useDebouncedSearch;
