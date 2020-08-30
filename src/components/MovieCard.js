import React, { useEffect, useState } from "react";
import "./MovieCard.css";

function MovieCard() {
  const [images, setImages] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=fff872c9121905fd933cd3592aece9dd&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.results[0].poster_path);
        const titles = data.results.map((title) => title.title);
        const images = data.results.map((image) => image.backdrop_path);

        setImages(images);
        setTitles(titles);
        console.log(titles);
      });
  }, []);

  return (
    <>
      {images.map((img) => (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${img})`,
          }}
          className="movieCard"
        ></div>
      ))}
    </>
  );
}

export default MovieCard;
