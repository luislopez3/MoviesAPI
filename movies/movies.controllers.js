const MoviesServices = require("./movies.services");

// Check for required ID in body object
function checkId(req, res, next) {
  const id = parseInt(req.params.id);
  const number = parseInt(id);
  if (isNaN(number)) {
    next("Not a number");
  }
  next();
}

// Check for required Name in body object
function checkTitle(req, res, next) {
  if (!req.body.title) {
    next("Title is required in the body");
  }
  next();
}

// Get
async function list(req, res, next) {
  const db = req.app.get("db");
  const movies = await MoviesServices.getMovies(db);
  res.json(movies);
}

// Post
async function create(req, res, next) {
  const db = req.app.get("db");
  const { title, genre_id, year } = req.body;
  const movie = {
    title,
    genre_id,
    year,
  };
  const newMovie = await MoviesServices.createMovie(db, movie);
  res.status(201).json(newMovie);
}

// Get by ID
async function read(req, res, next) {
  const id = parseInt(req.params.id);
  const db = req.app.get("db");
  const found = await MoviesServices.getMovie(db, id);
  res.json(found);
}

// Patch by ID
async function update(req, res, next) {
  const id = parseInt(req.params.id);
  const db = req.app.get("db");
  const { title, synopsis } = req.body;
  const movie = {
    title,
    synopsis,
  };
  const updatedMovie = await MoviesServices.updateMovie(db, id, movie);
  res.json(updatedMovie);
}

// Delete by ID
async function deleteMovie(req, res, next) {
  const id = parseInt(req.params.id);
  const db = req.app.get("db");
  await MoviesServices.deleteMovie(db, id);
  res.sendStatus(204);
}

module.exports = {
  list: [list],
  create: [checkTitle, create],
  read: [checkId, read],
  update: [checkId, checkTitle, update],
  delete: [checkId, deleteMovie],
};
