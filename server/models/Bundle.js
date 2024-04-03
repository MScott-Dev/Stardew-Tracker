const { Schema, model } = require("mongoose");
const Item = require("./Item");

const bundleSchema = new Schema({
  name: {
    type: String,
  },
  items: [
    {
      type: Object,
    },
  ],
});

const Bundle = model("Bundle", bundleSchema);

module.exports = Bundle;
