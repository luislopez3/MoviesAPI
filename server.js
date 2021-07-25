const app = require('./app')

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

app.set('db', knex)

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
  });