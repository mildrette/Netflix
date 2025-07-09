import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) return <div style={{ color: "#fff", padding: "2rem" }}>Movie not found</div>;

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} style={{ width: "300px" }} />
      <p>{movie.description}</p>
      <p>Duration: {movie.duration}</p>
      <p>Seasons: {movie.seasons}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieDetail;
