const express = require("express");
const moviesController = require("./movies.controllers");
const moviesRouter = express.Router();

moviesRouter
  .route("/")
  .get(moviesController.list)
  .post(moviesController.create);

moviesRouter
  .route("/:id")
  .get(moviesController.read)
  .patch(moviesController.update)
  .delete(moviesController.delete);

module.exports = moviesRouter;