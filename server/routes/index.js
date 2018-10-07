const router = require("express").Router();
const destinationRoutes = require("./destination");

// Book routes
router.use("/mydestinations/:id", destinationRoutes);

module.exports = router;
