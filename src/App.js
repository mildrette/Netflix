import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeNavbar from './components/Navbar';
import OtherNavbar from './components/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Profiles from './pages/Profiles';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

const NavbarSwitcher = () => {
  const location = useLocation();

  if (location.pathname === '/home') {
    return <HomeNavbar />;
  }
    return <OtherNavbar />;
};

const App = () => {
  return (
    <Router>
      <NavbarSwitcher />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>

    </Router>
  );
};

export default App;
