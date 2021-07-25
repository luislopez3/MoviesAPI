const ActorsServices = {
  getActors(db) {
    return db("actors").select("id", "name");
  },
  getActor(db, id) {
    return db("actors").select("*").where("id", id).first();
  },
  createActor(db, actor) {
    return db("actors").insert(actor).returning("*");
  },
  updateActor(db, id, actor) {
    return db("actors").where("id", id).update(actor);
  },
  deleteActor(db, id) {
    return db("actors").where("id", id).del();
  },
};

module.exports = ActorsServices;
