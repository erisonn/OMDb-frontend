import { useQuery } from "@tanstack/react-query";
import { fetchFunction } from "../../clientconfig";
import React, { useRef, useState } from "react";
import "./index.scss";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const query = useQuery({
    queryKey: ["searchMovies", searchTerm],
    queryFn: () => fetchFunction(`&s=${searchTerm}&page=1`),
    enabled: !!searchTerm,
  });
  const { isLoading, isError } = query;
  const { Search: searchResults, totalResults } = query.data ?? {};
  console.log(searchResults, totalResults);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(inputRef.current?.value ?? null);
  };

  return (
    <div className="Centered">
      <div className="Search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            ref={inputRef}
            type="search"
            placeholder='Search for a term, e.g "crash"'
          />
        </form>
        <SearchResults
          isLoading={isLoading}
          isError={isError}
          searchTerm={searchTerm}
          totalResults={totalResults}
          searchResults={searchResults}
        />
      </div>
    </div>
  );
};

export default Search;
