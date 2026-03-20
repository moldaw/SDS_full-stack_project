export default function MovieList({ movies, onToggle, onDelete }) {
  return (
    <ul style={styles.list}>
      {movies.map((movie) => (
        <li key={movie._id} style={styles.item}>
          <span
            onClick={() => onToggle(movie._id)}
            style={{
              ...styles.title,
              textDecoration: movie.watched ? 'line-through' : 'none',
              color: movie.watched ? '#888' : '#000',
            }}
          >
            {movie.title}
          </span>
          <button style={styles.delete} onClick={() => onDelete(movie._id)}>
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '10px',
    background: '#f5f5f5',
  },
  title: {
    cursor: 'pointer',
  },
  delete: {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
