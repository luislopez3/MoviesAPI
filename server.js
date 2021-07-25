const app = require('./app')

//connect knex to the movies DB
const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const db = require('knex')(connection);

app.set('db', db)

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listening on port 5000...");
  });