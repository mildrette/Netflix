import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Profiles from './pages/Profiles';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';


const App = () => {
  return (
 

<Router>
      <Navbar />
      <Routes>
<Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/profiles" element={<Profiles />} />
          <Route path="/home" element={<Home />} />
        <Route path='/landing' element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


