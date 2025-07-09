import React from 'react'
import Header from './components/Header';
import HeroBanner from "./components/HeroBanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import MovieRow from "./components/MovieRow";
import './App.css';

import {
  trendingPosters,
  actionPosters,
  romanticPosters,
} from "./data/movies";


function App() {

  return (
    <Router>
       <CssBaseline />
      <Header />    
   <Routes>   
        <Route path="/" element={
          <HeroBanner />                             
          } />           
</Routes>
        <MovieRow title="Trending Now" movies={trendingPosters} />
<MovieRow title="Action" movies={actionPosters} />
<MovieRow title="Romantic Comedy" movies={romanticPosters} />
    </Router>
  )
}

export default App

