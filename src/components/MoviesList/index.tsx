import "./index.scss";

export type Movie = {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
};

const MoviesList = ({ movies }: { movies: Movie[] }) => {
  if (!movies) return <p>No results</p>;

  return (
    <div className="MoviesList">
      {movies.map((movie) => (
        <div className="MoviesListItem" key={movie.imdbID}>
          <img src={movie.Poster} />
          <h3>{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
