import { TMovieDetails, TMovieSummary } from "../entities/movies";

const baseUrl: string = "http://www.omdbapi.com/";
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

const formatQuery = (queryKey: string, queryValue: string): string => {
  // encoding the URI as queries might contain spaces
  const encodedValue = encodeURI(queryValue);

  return `${baseUrl}/?${queryKey}=${encodedValue}&apikey=${apiKey}`;
};

const getMovieFactory = <T>(queryKey: string) => {
  return (queryValue: string): Promise<T> =>
    fetch(formatQuery(queryKey, queryValue)).then((res) => res.json());
};

export const getMovieById = getMovieFactory<TDetailsResponse>("i");
export const getMovieByTitle = getMovieFactory<TDetailsResponse>("t");
export const searchMoviesByTitle = getMovieFactory<TSearchResponse>("s");

type TErrorResponse = {
  Response: "False";
  Error: string;
};

interface TDetailsSuccessResponse extends TMovieDetails {
  Response: "True";
}

type TSearchSuccessResponse = {
  Response: "True";
  Search: TMovieSummary[];
  totalResults: string;
};

type TDetailsResponse = TDetailsSuccessResponse | TErrorResponse;
type TSearchResponse = TSearchSuccessResponse | TErrorResponse;
