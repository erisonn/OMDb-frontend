import { Movie } from "../MoviesList";
import "./index.scss";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const favoriteMovie = (movie: Movie) => {
    const moviesFromLocalStorage =
      JSON.parse(localStorage.getItem("starredMovies") ?? "[]");

    const isMovieAlreadyStarred = !!moviesFromLocalStorage.find(
      (lsMovie: Movie) => lsMovie.imdbID === movie.imdbID
    );
    if (isMovieAlreadyStarred) return;

    const newMoviesFromLocalStorage = JSON.stringify([
      ...moviesFromLocalStorage,
      movie,
    ]);
    localStorage.setItem("starredMovies", newMoviesFromLocalStorage);
  };

  return (
    <div className="MovieCard" key={movie?.imdbID}>
      <button className="StarButton" onClick={() => favoriteMovie(movie)}>
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
