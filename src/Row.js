import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchUrl, fetchDesc }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.data.results);
      setMovies(request.data.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters" >
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>



    </div>
  );
}
