import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchFunction } from "../../clientconfig";

interface MoviePage {
  Title: string;
  Poster: string;
  Plot: string;
}

interface MovieDetails {
  title: string;
  info: string;
}

const ENTRIES_TO_REMOVE = [
  "Ratings",
  "Poster",
  "imdbID",
  "Website",
  "Plot",
  "Title",
  "Response",
];

const MoviePage = () => {
  const { imdbID } = useParams();

  const { data, isError, isLoading } = useQuery({
    enabled: !!imdbID,
    queryKey: ["MoviePage"],
    queryFn: () => fetchFunction(1, `&i=${imdbID}`),
  });

  const { Title, Poster, Plot } = (data as MoviePage) ?? {};

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Oops! something went wrong</p>;

  const detailsList = Object.entries(data);
  const formattedDetailsList = detailsList
    .map((details) => ({
      title: details[0],
      info: details[1],
    }))
    .filter(
      (details) => !ENTRIES_TO_REMOVE.includes(details.title)
    ) as MovieDetails[];

  return (
    <div className="Centered">
      <div className="MoviePage">
        <h1>{Title}</h1>
        <div>
          <img src={Poster} />
          <details>
            <summary>Details</summary>
            <ul>
              {formattedDetailsList.map((details) => (
                // figure what key to use
                <li key={details.title}>
                  <b>{details.title}:</b> {details.info}
                </li>
              ))}
            </ul>
          </details>
        </div>
        <p>
          <b>Plot:</b> {Plot}
        </p>
      </div>
    </div>
  );
};

export default MoviePage;
