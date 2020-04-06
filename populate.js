const mongoose = require('mongoose');
const connect = require('./setup');
const IceCream = require('./DB/IceCream_Sechma');
const Store = require('./DB/Store_Schema');

// Connect to the database
connect();


const icecreams = [

];


const stores = [

];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(icecreams.map(icecream => icecream.save())))
  .then(() => Promise.all(stores.map(store => store.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
