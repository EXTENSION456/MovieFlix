import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./Requests";
import "./Banner.css"

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      // console.log(
      //   request.data.data.results[
      //     Math.floor(Math.random() * request.data.data.results.length)
      //   ]
      // );
      setMovie(
        request.data.data.results[
          Math.floor(Math.random() * request.data.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str,n){
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner_buttons">
        <div className="banner_button">Play</div>
        <div className="banner_button">My list</div>

        <h1 className="banner_description">
            {truncate(movie.overview,150)}
        </h1>
        </div>

        <div className="banner--fadeBottom">
          
        </div>
      </div>
    </header>
  );
}
