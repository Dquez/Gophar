const router = require("express").Router();
const destinationsController = require("../controllers/destinationsController");

// Matches with "/mydestinations"
router.route("/mydestinations")
  .get(destinationsController.findAll)
  .post(destinationsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(destinationsController.findById)
  // .put(destinationsController.update)
  // .delete(destinationsController.remove);

module.exports = router;
