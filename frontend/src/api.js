const API_URL = 'http://localhost:5000/api/movies';

export const getMovies = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addMovie = async (title) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  return res.json();
};

export const toggleMovie = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: 'PUT' });
  return res.json();
};

export const deleteMovie = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};