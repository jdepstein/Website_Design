const mongoose = require('mongoose');
const connect = require('./setup');
const IceCream = require('./DB/IceCream_Sechma');
const Store = require('./DB/Store_Schema');

// Connect to the database
connect();


const icecreams = [
  new IceCream({Name: "Bohemian Raspberry", flavor:["Vanilla"], fillings:["Fudge Brownies", "Raspberry"], description:"Is this the real life? Is this just fantasy?", Price:[("Pint", 10)], Calories: 750, Locations:[""]}),
  new IceCream({Name: "Don't Let Me Frown", flavor:["Vanilla"], fillings:["Cookie Dough", "Chocolate fudge, Chocolate chips, caramel"], description:"The best thing you have tasted, won't dissapoint.", Price:[("Pint", 10)], Calories: 1000, Locations:[""]}),
  new IceCream({Name: "Skunks Treat", flavor:["Vanilla"], fillings:["Oreo Cookie bits"], description:"Creamy Vanilla Ice Cream with Home Made Oreo Cookie Bits", Price:[("Pint", 10)], Calories: 1000, Locations:["Chocolate Chip City"]}),
  new IceCream({Name: "Mocha-licious", flavor:["Coffee"], fillings:[""], description:"No morning coffe? Mocha-licious will wake you up!", Price:[("Pint", 10)], Calories: 9000, Locations:[""]}),
  new IceCream({Name: "Choc It Out", flavor:["Chocolate"], fillings:["Cookie dough", "Chocolate chips"], description:"Choc It Out with some friends over our delicious dough!", Price:[("Pint", 10)], Calories: 1100, Locations:[""]}),
  new IceCream({Name: "Vanilla Ice", flavor:["Vanilla"], fillings:[""], description:"The best Vanilla Ice-cream you'll ever taste!", Price:[("Pint", 10)], Calories: 700, Locations:[""]}),
  new IceCream({Name: "Burst Your Bubble", flavor:["Bubble Gum"], fillings:[""], description:"Try not Burst Your Bubble!", Price:[("Pint", 10)], Calories: 1000, Locations:[""]}),
  new IceCream({Name: "Fairy Floss", flavor:["Cotton Candy"], fillings:["Sprinkles"], description:"Your favorite county fair treat now available 24/7", Price:[("Pint", 10)], Calories: 1000, Locations:[""]}),
  new IceCream({Name: "sPEACHless", flavor:["Peach"], fillings:[""], description:"Your favorite fruit now in frozen form will leave you sPEACHless", Price:[("Pint", 10)], Calories: 800, Locations:[""]}),
  new IceCream({Name: "When It Rains It S'mores", flavor:["Vanilla"], fillings:["Graham crackers", "Marshmallow fluff", "Chocolate fudge"], description:"Delicious campfire smore's brought to you without the fire", Price:[("Pint", 10)], Calories: 1500, Locations:[""]}),
  new IceCream({Name: "Won't Fudge", flavor:["Chocolate"], fillings:["Chocolate fudge"], description:"This chocolate overload Won't Fudge your chocolate cravings", Price:[("Pint", 10)], Calories: 1100, Locations:[""]}),
  new IceCream({Name: "Sundea_Funea", flavor:["Vanilla", "Choclate"], fillings:["Carmel", "fudge", "Cookie Bits", "Cherries"], description:"Name after the our store Sundea Fundea is what all other icecreams strive for", Price:[("Pint", 10)], Calories: 2500, Locations:[""]})


];


const stores = [
  new Store({_id: "Sundea Fundea Orginal", City: "Chocolate_Chip", State: "NY", Street: "Vanilla Ave", Building_Number: 7, icecream:["Cookies & Cream", "Won't Fudge"] }),
  new Store({_id: "Fundea on Sundea", City: "Sweet", State: "MA", Street: "Sundea Ave", Building_Number: 80, icecream:["Bohemian Raspberry","Sundea_Funea"] }),
  new Store({_id: "Fundea Creamery", City: "Milkshake", State: "IL", Street: "Rocky Road", Building_Number: 216, icecream:["Fairy Floss","Sundea_Funea"] }),
  new Store({_id: "Sundea Fundea Jr", City: "Cherry", State: "NH", Street: "Dairy Ave", Building_Number: 305, icecream:["Skunks Treat","Sundea_Funea"] }),
  new Store({_id: "How about a Sundea", City: "Cher", State: "NH", Street: "Da", Building_Number: 3, icecream:["Vanilla Ice","Sundea_Funea"] }),
  new Store({_id: "Sundea Everydea", City: "Sprinkles", State: "PA", Street: "Strawberry Lane", Building_Number: 5, icecream:["Choc It Out","Sundea_Funea"] })
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(icecreams.map(icecream => icecream.save())))
  .then(() => Promise.all(stores.map(store => store.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
