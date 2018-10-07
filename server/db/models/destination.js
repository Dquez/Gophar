const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name: { type: String, required: true },
  style: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
