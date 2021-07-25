const express = require("express");
const actorsController = require("./actors.controllers");
const actorsRouter = express.Router();

actorsRouter
  .route("/")
  .get(actorsController.list)
  .post(actorsController.create);

actorsRouter
  .route("/:id")
  .get(actorsController.read)
  .patch(actorsController.update)
  .delete(actorsController.delete);

module.exports = actorsRouter;