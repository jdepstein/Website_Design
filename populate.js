const mongoose = require('mongoose');
const connect = require('./setup');
const IceCream = require('./DB/IceCream_Sechma');
const Store = require('./DB/Store_Schema');

// Connect to the database
connect();


const icecreams = [
  new IceCream({Name: "Cookies&Cream", falvor:["Vanilla"], fillings:["Cookie bits"], description:"Creamy Vanilla Ice Cream with Home Made Cookie Bits", Price:[("Pint", 10)], Calories: 1000, Locations:["Chocolate Chip City"]})

];


const stores = [
  new Store({_id: "ice_cream", City: "Chocolate_Chip", State: "NY", Street: "Vanilla Ave",Building_Number: 7, icecream:["Cookies & Cream"] })
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(icecreams.map(icecream => icecream.save())))
  .then(() => Promise.all(stores.map(store => store.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
