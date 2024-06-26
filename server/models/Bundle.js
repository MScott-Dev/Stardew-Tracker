const { Schema, model } = require("mongoose");
const itemSchema = require('./Item').schema;

const bundleSchema = new Schema({
  name: {
    type: String,
  },
  required: {
    type: Number,
  },
  items: [itemSchema],
});

const Bundle = model("Bundle", bundleSchema);

module.exports = Bundle;
