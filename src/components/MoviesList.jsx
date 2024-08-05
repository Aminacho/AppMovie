import React, { useState } from "react";
import "./card.css";
import { data } from "./data";
import MovieItem from "./MovieItem";
import Numb from "./Numb";
import AddMovie from "./AddMovie";

function MoviesList({ search }) {
  const [moviesData, setMoviesData] = useState(data);
  return (
    <div>
      <AddMovie moviesData={moviesData} setMoviesData={setMoviesData} />
      <div className="movies-container">
        {moviesData
          .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )

          .map((movie, i) => (
            <MovieItem key={i} {...movie} />
          ))}
        <Numb />
      </div>
    </div>
  );
}

export default MoviesList;
