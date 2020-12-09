import React from "react";
import "./styles.css";
import { useState } from "react";
import movieData from "/src/MovieData.js";

export default function App() {
  const [selectedGenre, setGenre] = useState("Horror");

  function handleClickGenre(genre) {
    setGenre(genre);
    console.log({ genre });
  }

  return (
    <div className="App">
      <div className="Title">
        <h1>Movie Recommendations!</h1>
      </div>

      <div className="GenreButtons">
        {Object.keys(movieData).map((genre) => (
          <button onClick={() => handleClickGenre(genre)}>{genre}</button>
        ))}
      </div>

      <div className="MoviesList">
        <ul className="MoviesListItems">
          {movieData[selectedGenre].map((movie) => (
            <li className="MovieListItem" key={movie.name}>
              <div className="MovieCover">
                <img
                  className="MovieCoverImg"
                  src={movie.cover}
                  alt="Movie Images"
                ></img>
              </div>
              <div className="MovieTitle">{movie.name}</div>
              <div className="MovieRating">IMDB: {movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
