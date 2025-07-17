import React, { useEffect, useState } from "react";
import "../styles/MovieRecommendation.css";

const MovieRecommendation = ({ recommendations = [], currentIndex = 0 }) => {
  const [fade, setFade] = useState(true);
  const movie = recommendations[currentIndex];

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 300);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  if (!movie) return null;

  return (
    <section
      className={`recommendation-section ${fade ? "fade-in" : "fade-out"}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 30%, transparent 100%), url(${movie["#IMG_BACKDROP"] || movie["#IMG_POSTER"] || "https://via.placeholder.com/1280x720"})`,
      }}
    >
      <div className="recommendation-content">
        <h1 className="movie-title">{movie["#TITLE"]}</h1>
        <p className="movie-description">
          {movie["#DESCRIPTION"]?.length > 250
            ? movie["#DESCRIPTION"].slice(0, 247) + "..."
            : movie["#DESCRIPTION"] || "No description available."}
        </p>

        <div className="recommendation-buttons">
          <button className="btn play">▶ Play</button>
          <button className="btn info">ℹ More Info</button>
          <button className="btn favorite">＋ My List</button>
        </div>
      </div>
    </section>
  );
};

export default MovieRecommendation;
