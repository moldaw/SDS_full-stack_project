const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET all movies
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// POST new movie
router.post('/', async (req, res) => {
  const movie = new Movie({ title: req.body.title });
  await movie.save();
  res.json(movie);
});

// PUT toggle watched
router.put('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  movie.watched = !movie.watched;
  await movie.save();
  res.json(movie);
});

// DELETE movie
router.delete('/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
