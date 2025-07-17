import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch some initial movies on load
    const fetchMovies = async () => {
      try {
        const res = await axios.get('https://imdbapi.dev/api/movies?limit=20'); 
        // NOTE: Replace with actual API endpoint & params from imdbapi.dev docs
        setMovies(res.data.results || res.data); 
        setFiltered(res.data.results || res.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFiltered(movies);
    } else {
      const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(filteredMovies);
    }
  }, [searchTerm, movies]);

  const goToDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: 'white', marginBottom: 20 }}>Welcome to Netflix Clone</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      <div style={styles.grid}>
        {filtered.length > 0 ? (
          filtered.map(movie => (
            <div
              key={movie.id || movie.imdb_id || movie._id}
              style={styles.card}
              onClick={() => goToDetails(movie.id || movie.imdb_id || movie._id)}
            >
              <img
                src={movie.poster || movie.image || movie.posterurl} // adapt based on API
                alt={movie.title}
                style={styles.poster}
              />
              <div style={styles.title}>{movie.title}</div>
            </div>
          ))
        ) : (
          <p style={{ color: 'white' }}>No movies found.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#141414',
    minHeight: '100vh',
    padding: 20,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    border: 'none',
    marginBottom: 30,
    outline: 'none',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: 20,
  },
  card: {
    cursor: 'pointer',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#222',
    transition: 'transform 0.2s ease',
  },
  poster: {
    width: '100%',
    display: 'block',
  },
  title: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
};

export default Home;
