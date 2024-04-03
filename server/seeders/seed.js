const db = require('../config/connection');
const { Bundle, Item } = require('../models');
const bundleSeed = require('./bundleSeed.json');
const itemSeeds = require("./itemSeeds.json");
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Bundle', 'bundles');

  await Bundle.create(bundleSeed);


  console.log('all done!');
  process.exit(0);
});
