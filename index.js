//connect knex to the movies DB
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "luislopez",
    password: "",
    database: "movies",
  },
});

// creates a movie ('c' in crud)
async function createMovie() {
  const data = await knex("movies").insert({
    title: "test movie",
    year: "2021",
    rating: 94,
    genre_id: 5,
  });
  console.log(data);
}


// reads a movie based on its title ('r' in crud)
async function readMovie() {
  const data = await knex("movies").where("title", "=", "test movie");
  console.log(data);
}
readMovie();

// update the movie created ('u' in crud)
async function updateMovie() {
  const data = await knex("movies").where("id", 3552).update({
    synopsis: "This is a test movie that does not star anyone you would recognize",
  });
  console.log(data);
}

// delete the movie previously created ('d' in crud)
async function deleteMovie() {
  const data = await knex("movies").where("id", 3552).del();
  console.log(data);
}

deleteMovie()