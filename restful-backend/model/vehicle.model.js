const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  chasisNumber: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  manufactureYear: {
    type: Number,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  OwnerId:{
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Product", schema); 