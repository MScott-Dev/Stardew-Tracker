const db = require('../config/connection');
const { Item  } = require('../models');
const ItemSeeds = require('./itemSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Item', 'items');

  await Item.create(ItemSeeds);

  console.log('all done!');
  process.exit(0);
});
