const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  name: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  donated: {
    type: Boolean,
  },
});

const Item = model('Item', itemSchema);

module.exports = Item;
