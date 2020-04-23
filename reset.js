const mongoose = require('mongoose');
const connect = require('./db');
const IceCream = require('./models/IceCream_Sechma');
const Store = require('./models/Store_Schema');
const About = require('./models/About_Schema');

// Connect to the database
connect();


const icecreams = [
  new IceCream({_id: "Bohemian Raspberry", flavor:["Vanilla"], fillings:["Fudge Brownies", "Raspberry"], description:"Is this the real life? Is this just fantasy?", image: ""}),
  new IceCream({_id: "Don't Let Me Frown", flavor:["Vanilla"], fillings:["Cookie Dough", "Chocolate Fudge", "Chocolate Chips", "Caramel"], description:"The best thing you have tasted, you will not frown.", image: ""}),
  new IceCream({_id: "Skunks Treat", flavor:["Vanilla"], fillings:["Oreo Cookie Bits"], description:"Creamy Vanilla Ice Cream with Home Made Oreo Cookie Bits", image: ""}),
  new IceCream({_id: "Mocha-licious", flavor:["Coffee"], fillings:[], description:"No morning coffe? Mocha-licious will wake you up!", image: ""}),
  new IceCream({_id: "Choc It Out", flavor:["Chocolate"], fillings:["Cookie Dough", "Chocolate chips"], description:"Choc It Out with some friends over our delicious dough!", image: ""}),
  new IceCream({_id: "Vanilla Ice", flavor:["Vanilla"], fillings:[], description:"The Best Vanilla Ice-cream you'll ever taste!", image: ""}),
  new IceCream({_id: "Burst Your Bubble", flavor:["Bubble Gum"], fillings:[], description:"Try Not to Burst Your Bubble!", image: ""}),
  new IceCream({_id: "Fairy Floss", flavor:["Cotton Candy"], fillings:["Sprinkles"], description:"Your favorite county fair treat now available 24/7", image: ""}),
  new IceCream({_id: "sPEACHless", flavor:["Peach"], fillings:[], description:"Your favorite fruit now in frozen form will leave you sPEACHless", image: ""}),
  new IceCream({_id: "When It Rains It S'mores", flavor:["Vanilla"], fillings:["Graham crackers", "Marshmallow fluff", "Chocolate fudge"], description:"Delicious campfire smore's brought to you without the fire", image: ""}),
  new IceCream({_id: "Won't Fudge", flavor:["Chocolate"], fillings:["Chocolate Fudge"], description:"This chocolate overload won't fudge your chocolate cravings", image: ""}),
  new IceCream({_id: "Sundae Funae", flavor:["Vanilla", "Chocolate"], fillings:["Caramel", "Chocolate Fudge", "Cookie Bits", "Cherries"], description:"Name after the our store Sundea Fundea is what all other icecreams strive for", image: ""})

];


const stores = [
  new Store({_id: "Sundae Fundae Original", City: "Chocolate Chip", State: "NY", Street: "Vanilla Ave", Building_Number: 7, icecream:["Cookies & Cream", "Won't Fudge", "Sundae Funae"]}),
  new Store({_id: "Fundae on Sundae", City: "Sweet", State: "MA", Street: "Sundea Ave", Building_Number: 80, icecream:["Bohemian Raspberry","Sundae Funae"] }),
  new Store({_id: "Fundae Creamery", City: "Milkshake", State: "IL", Street: "Rocky Road", Building_Number: 216, icecream:["Fairy Floss","Sundae Funae"] }),
  new Store({_id: "Sundae Fundae Jr", City: "Cherry", State: "NH", Street: "Dairy Ave", Building_Number: 305, icecream:["Skunks Treat","Sundae Funae"] }),
  new Store({_id: "How About a Sundae", City: "Cherry", State: "NH", Street: "Icy Ave", Building_Number: 3, icecream:["Vanilla Ice","Sundae Funae"] }),
  new Store({_id: "Sundae Everydae", City: "Sprinkles", State: "PA", Street: "Strawberry Lane", Building_Number: 5, icecream:["Choc It Out","Sundae Funae"] })
];

const aboutus = [
  new About({description: "welcome to our ice cream shop!!"})
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(icecreams.map(icecream => icecream.save())))
  .then(() => Promise.all(stores.map(store => store.save())))
  .then(() => Promise.all(aboutus.map(about => about.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
