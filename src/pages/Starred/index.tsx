import MoviesList, { Movie } from "../../components/MoviesList";
import './index.scss'

const Starred = () => {
  const movies: Movie[] = JSON.parse(
    localStorage.getItem("starredMovies") ?? "[]"
  );

  return (
    <div className="Centered">
      <div className="Starred">
        <h1>Your starred movies</h1>
        <MoviesList movies={movies} loadMore={() => {}} />
      </div>
    </div>
  );
};

export default Starred;
