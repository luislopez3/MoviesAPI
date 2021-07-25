const MoviesServices = {
  getMovies(db) {
    return db("movies").select("id", "title");
  },
  getMovie(db, id) {
    return db("movies").select("*").where("id", id).first();
  },
  createMovie(db, movie) {
    return db("movies").insert(movie).returning("*");
  },
  updateMovie(db, id, movie) {
    return db("movies").where("id", id).update(movie);
  },
  deleteMovie(db, id) {
    return db("movies").where("id", id).del();
  },
};

module.exports = MoviesServices;
