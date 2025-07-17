import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import MovieRecommendation from "../components/MovieRecommendation";
import TrailerModal from '../components/TrailerModal';
import Footer from '../components/Footer';
import "../styles/Home.css";

const categories = [
  { title: "Trending", query: "trending" },
  { title: "Marvel", query: "marvel" },
  { title: "Harry Potter", query: "harry potter" },
  { title: "Star Wars", query: "star wars" },
  { title: "Top Rated", query: "top rated" },
];

const Home = () => {
  const [movieData, setMovieData] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [currentRecIndex, setCurrentRecIndex] = useState(0);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const rowRefs = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      const newData = {};
      try {
        const trendingRes = await axios.get(
          "https://search.imdbot.workers.dev/?q=trending"
        );
        setRecommendations(trendingRes.data.description.slice(0, 5)); // top 5 recs
      } catch (err) {
        console.error("Error fetching trending recommendations", err);
      }

      for (const category of categories) {
        try {
          const res = await axios.get(
            `https://search.imdbot.workers.dev/?q=${category.query}`
          );
          newData[category.title] = res.data.description || [];
        } catch (err) {
          console.error(`Error fetching ${category.title}`, err);
          newData[category.title] = [];
        }
      }
      setMovieData(newData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (recommendations.length === 0) return;

    const interval = setInterval(() => {
      setCurrentRecIndex((prev) => (prev + 1) % recommendations.length);
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, [recommendations]);

  const openTrailer = (url) => {
    setTrailerUrl(url);
    setIsTrailerOpen(true);
  };

  const closeTrailer = () => {
    setTrailerUrl("");
    setIsTrailerOpen(false);
  };

  const scrollLeft = (category) => {
    const container = rowRefs.current[category];
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (category) => {
    const container = rowRefs.current[category];
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <MovieRecommendation
        recommendations={recommendations}
        currentIndex={currentRecIndex}
        openTrailer={openTrailer}
      />

      {Object.keys(movieData).map((category) => (
        <div key={category} className="category-row">
          <h2 className="category-title">{category}</h2>
          <div className="carousel-container">
            <button className="carousel-btn left" onClick={() => scrollLeft(category)}>
              &#10094;
            </button>

            <div
              className="movie-row"
              ref={(el) => (rowRefs.current[category] = el)}
            >
              {movieData[category].map((movie, index) => (
                <div key={index} className="movie-card">
                  <img
                    src={movie["#IMG_POSTER"] || "https://via.placeholder.com/160x240"}
                    alt={movie["#TITLE"]}
                    className="movie-image"
                  />
                  <div className="movie-info">
                    <p className="movie-title">{movie["#TITLE"]}</p>
                    <p className="movie-year">{movie["#YEAR"]}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-btn right" onClick={() => scrollRight(category)}>
              &#10095;
            </button>
          </div>
        </div>
      ))}

      {isTrailerOpen && <TrailerModal url={trailerUrl} onClose={closeTrailer} />}
            <Footer />
    </div>
  );
};

export default Home;
