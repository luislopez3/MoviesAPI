const actorsServices = require('./actors.services')
  
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
  function checkName(req, res, next) {
    if (!req.body.name) {
      next("Name is required in the body");
    }
    next();
  }
  
  // Get
  async function list(req, res, next) {
    const db = req.app.get('db');
    const actors = await actorsServices.getActors(db);
    res.json(actors);

  }
  
  // Post
  async function create(req, res, next) {
    const db = req.app.get('db')
    const { id, name } = req.body;
    const actor = {
      id,
      name
    }
    const newActor = await actorsServices.createActor(db, actor)
    res.status(201)
    .json(newActor)
  }
  
  // Get by ID
  async function read(req, res, next) {
    const id = parseInt(req.params.id);
    const db = req.app.get('db');
    const found = await actorsServices.getActor(db, id)
    if(!found) {
      return res.sendStatus(404)      
    }
    res.json(found);
  }
  
  // Patch by ID
  async function update(req, res, next) {
    const id = parseInt(req.params.id);
    const db = req.app.get('db');
    const { name } = req.body;
    const actor = {
        name
      };
    const updatedActor = await actorsServices.updateActor(db, id, actor)
    res.json(updatedActor);
  }
  
  // Delete by ID
  async function deleteActor(req, res, next) {
    const id = parseInt(req.params.id);
    const db = req.app.get('db')
    await actorsServices.deleteActor(db, id);
    res.sendStatus(204);
  }

  
  module.exports = {
    list: [list],
    create: [checkName, create],
    read: [checkId, read],
    update: [checkId, checkName, update],
    delete: [checkId, deleteActor],
  };
  