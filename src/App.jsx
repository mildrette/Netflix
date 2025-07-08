import React from "react";
import Header from "./components/Header";
import MovieRow from "./components/MovieRows";
import HeroBanner from "./components/HeroBanner";

const trendingPosters = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "11.jpeg",
  "12.jpeg",
];

const actionPosters = [
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
];

const comedyPosters = [
  "11.jpeg",
  "12.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "3.jpeg",
  "4.jpeg",
];

const App = () => {
  return (
    <>
      <Header />
      <HeroBanner /> 
      <MovieRow title="Trending Now" posters={trendingPosters} />
      <MovieRow title="Action" posters={actionPosters} />
      <MovieRow title="Romantic Comedy" posters={comedyPosters} />
    </>
  );
};

export default App;
