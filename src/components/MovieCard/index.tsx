import { Movie } from "../MoviesList";
import "./index.scss";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="MovieCard" key={movie?.imdbID}>
      <img src={movie?.Poster} />
      <h3>
        {movie?.Title} - {movie.Year}
      </h3>
    </div>
  );
};

export default MovieCard;
