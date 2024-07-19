import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchFunction } from "../../clientconfig";
import React, { useRef, useState } from "react";
import SearchResults from "./SearchResults";
import { Movie } from "../../components/MoviesList";
import "./index.scss";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, fetchNextPage, isError, isLoading } = useInfiniteQuery({
    enabled: !!searchTerm,
    queryKey: ["MoviesSearch", searchTerm],
    initialPageParam: 1,
    queryFn: (queryKey) =>
      fetchFunction(queryKey.pageParam, `&s=${searchTerm}`),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.Response === "False") {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(inputRef.current?.value ?? null);
  };

  const formattedMoviesList = data?.pages
    .reduce((acc, currentPage) => {
      if (currentPage.Response === "True") {
        acc.push(currentPage.Search);
      }
      return acc;
    }, [])
    .flat(1);

  console.log(formattedMoviesList);
  const formattedData = {
    searchResults: formattedMoviesList as Movie[],
    totalResults: data?.pages[0]?.totalResults as number,
  };

  // const isLastpa

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
          loadMore={fetchNextPage}
          isLoading={isLoading}
          isError={isError}
          searchTerm={searchTerm}
          totalResults={formattedData.totalResults}
          searchResults={formattedData.searchResults}
        />
      </div>
    </div>
  );
};

export default Search;
