const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  name: {
    type: String
  },
  donated: {
    type: Boolean
  },
  imageName: {
    type: String
  }
});

const Item = model('Item', itemSchema);

module.exports = Item;
