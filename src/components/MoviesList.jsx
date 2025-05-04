import React from "react";
import Movies from "./Movies";

const MoviesList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movies movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MoviesList;
