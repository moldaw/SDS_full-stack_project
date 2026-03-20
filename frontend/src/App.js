import { useEffect, useState } from 'react';
import { getMovies, addMovie, toggleMovie, deleteMovie } from './api';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const data = await getMovies();
    setMovies(data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const handleAdd = async (title) => {
    if (!title.trim()) return;
    await addMovie(title);
    loadMovies();
  };

  const handleToggle = async (id) => {
    await toggleMovie(id);
    loadMovies();
  };

  const handleDelete = async (id) => {
    await deleteMovie(id);
    loadMovies();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎬 Movie Watchlist</h1>
        <AddMovie onAdd={handleAdd} />
        <MovieList
          movies={movies}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
  },
  card: {
    background: '#fff',
    padding: '30px',
    borderRadius: '16px',
    width: '400px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default App;