const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refL: "User"
  }
});

module.exports = mongoose.model("Spot", SpotSchema);
