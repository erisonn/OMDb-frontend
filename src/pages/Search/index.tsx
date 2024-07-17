import { useQuery } from "@tanstack/react-query";
import { fetchFunction } from "../../clientconfig";

const Search = () => {
  const query = useQuery({ queryKey: ["movies"], queryFn: fetchFunction });
  const { Search: searchResults, totalResults } = query.data ?? {};

  console.log(searchResults, totalResults);
  return <h1>Search for movies here!</h1>;
};

export default Search;
