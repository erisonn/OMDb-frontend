import classNames from "classnames";
import { Movie } from "../MoviesList";
import { useLocalStorage } from "usehooks-ts";
import { toast } from "react-toastify";
import "./index.scss";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [moviesFromLs, setMoviesFromLs] = useLocalStorage<Movie[]>(
    "starredMovies",
    []
  );
  const isMovieAlreadyStarred = !!moviesFromLs.find(
    (lsMovie: Movie) => lsMovie.imdbID === movie.imdbID
  );

  const favoriteMovie = (movie: Movie) => {
    if (isMovieAlreadyStarred) {
      const newMoviesFromLocalStorage = moviesFromLs.filter(
        (movieFromls) => movieFromls.imdbID !== movie.imdbID
      );
      setMoviesFromLs(newMoviesFromLocalStorage);
      toast.info("Removed from starred");
      return;
    }
    setMoviesFromLs([...moviesFromLs, movie]);
    toast.info("Added to starred");
  };

  return (
    <div className="MovieCard" key={movie?.imdbID}>
      <button
        className={classNames("StarButton", { Starred: isMovieAlreadyStarred })}
        onClick={() => favoriteMovie(movie)}
      >
        ☆
      </button>
      <img src={movie?.Poster} />
      <h3>
        {movie?.Title} - {movie.Year}
      </h3>
    </div>
  );
};

export default MovieCard;
