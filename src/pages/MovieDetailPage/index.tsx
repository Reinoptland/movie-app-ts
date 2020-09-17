import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { TMovieDetails } from "../../entities/movies";
import { getMovieById } from "../../services/omdb";

type TParams = {
  imdbID: string;
};

export default () => {
  const [details, setDetails] = useState<TMovieDetails>();
  const params = useParams<TParams>();
  // console.log("Wat wordt dit?", params); // imdbID -> string, object { imdb: string }

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await getMovieById(params.imdbID);
      if (response.Response === "True") {
        setDetails(response);
      }
    };

    fetchMovieDetails();
  }, [params.imdbID]);

  if (details === undefined) return <Spinner />;

  return (
    <div>
      <h1>{details.Title}</h1>
      <p>{details.Plot}</p>
    </div>
  );
};
