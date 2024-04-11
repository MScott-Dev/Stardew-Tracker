const db = require('../config/connection');
const { Bundle, Item } = require('../models');
const bundleSeed = require('./bundleSeed.json');
const itemSeeds = require("./itemSeeds.json");
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  // await cleanDB('Bundle', 'bundles');
  await cleanDB("Item", "items");
  // await Bundle.create(bundleSeed);
  await Item.create(itemSeeds);


  console.log('all done!');
  process.exit(0);
});
