import { TMovieSummary } from "../entities/movies";

const baseUrl: string = "http://www.omdbapi.com/";
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

const formatQuery = (queryKey: string, queryValue: string): string => {
  // encoding the URI as queries might contain spaces
  const encodedValue = encodeURI(queryValue);

  return `${baseUrl}/?${queryKey}=${encodedValue}&apikey=${apiKey}`;
};

const getMovieFactory = (queryKey: string) => {
  return (queryValue: string): Promise<TApiResultSearch> =>
    fetch(formatQuery(queryKey, queryValue)).then((res) => res.json());
};

// export const getMovieById = getMovieFactory("i");
// export const getMovieByTitle = getMovieFactory("t");
export const searchMoviesByTitle = getMovieFactory("s");

type TApiResultSearch =
  | {
      Response: "True";
      Search: TMovieSummary[];
      totalResults: string;
    }
  | {
      Response: "False";
      Error: string;
    };
