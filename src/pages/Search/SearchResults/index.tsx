import MoviesList, { Movie } from "../../../components/MoviesList";

interface SearchResultsProps {
  searchTerm: string | null;
  totalResults: number;
  isLoading: boolean;
  isError: boolean;
  searchResults: Movie[];
  loadMore: () => void;
}

const SearchResults = (props: SearchResultsProps) => {
  const {
    searchTerm,
    totalResults,
    searchResults,
    isLoading,
    isError,
    loadMore,
  } = props;

  console.log(isLoading);
  if (!searchTerm) return <p>Search for movies here</p>;

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Oops! something went wrong</p>;

  return (
    <div>
      <h1>
        {totalResults} results for "{searchTerm}"
      </h1>
      <MoviesList movies={searchResults} loadMore={loadMore} />
    </div>
  );
};

export default SearchResults;
