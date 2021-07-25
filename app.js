const express = require("express");
const morgan = require('morgan');
const cors = require('cors')
let moviesRouter = require("./movies/movies.routes");
let actorsRouter = require("./actors/actors.routes")
const app = express();

app.use(cors());

app.use(morgan("common"))

app.use(express.json());

app.use("/movies", moviesRouter);

app.use("/actors", actorsRouter);

module.exports = app;