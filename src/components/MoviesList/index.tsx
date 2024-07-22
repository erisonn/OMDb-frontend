import { useIntersectionObserver } from "usehooks-ts";
import { useEffect } from "react";
import "./index.scss";

export type Movie = {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
};

const MoviesList = ({
  movies,
  loadMore,
}: {
  movies: Movie[];
  loadMore: () => void;
}) => {
  const { isIntersecting, ref: infiniteScrollRef } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      loadMore();
    }
  }, [isIntersecting]);

  const lastItem = movies.slice(-1)[0];

  if (!movies.length) return <p>No movies found</p>;

  return (
    <div className="MoviesList">
      {movies.map((movie) => (
        <div
          className="MoviesListItem"
          key={movie?.imdbID}
          ref={movie?.imdbID === lastItem?.imdbID ? infiniteScrollRef : null}
        >
          <img src={movie?.Poster} />
          <h3>
            {movie?.Title} - {movie.Year}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
