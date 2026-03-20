import { useState } from 'react';

export default function AddMovie({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        style={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie..."
      />
      <button style={styles.button} type="submit">Add</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 16px',
    borderRadius: '8px',
    border: 'none',
    background: '#2a5298',
    color: 'white',
    cursor: 'pointer',
  },
};