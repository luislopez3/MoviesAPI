exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id");
    table.string("title");
    table.integer("genre_id");
    table.integer("year");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movies");
};
