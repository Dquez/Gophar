const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  userId: { type: String, required: true }, 
  name:  { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
