const mongoose = require('mongoose');
const connect = require('./db');
const IceCream = require('./models/IceCream_Schema');
const Store = require('./models/Store_Schema');

// Connect to the database
connect();


const icecreams = [
  new IceCream({_id: "Bohemian Raspberry", flavors:["Vanilla"], fillings:["Fudge Brownies", "Raspberry"], description:"Is this the real life? Is this just fantasy?", image: "https://jewel925.com/wp-content/uploads/66037355_10156008306331621_553074801405591552_n.jpg"}),
  new IceCream({_id: "Dont Let Me Frown", flavors:["Vanilla"], fillings:["Cookie Dough", "Chocolate Fudge", "Chocolate Chips", "Caramel"], description:"The best thing you have tasted, you will not frown.", image:"https://d1wv4dwa0ti2j0.cloudfront.net/live/img/production/detail/ice-cream/cartons_sundae-extreme_sundaextreme-chocolate-chip-cookie-dough.jpg"}),
  new IceCream({_id: "Skunks Treat",flavors:["Vanilla"], fillings:["Oreo Cookie Bits"], description:"Creamy Vanilla Ice Cream with Home Made Oreo Cookie Bits", image: "https://lovingitvegan.com/wp-content/uploads/2018/06/Vegan-Cookies-and-Cream-Ice-Cream-17.jpg"}),
  new IceCream({_id: "Mocha-licious",flavors:["Coffee"], fillings:[], description:"No morning coffe? Mocha-licious will wake you up!", image: "https://www.thelittleepicurean.com/wp-content/uploads/2012/01/IMG_8537-1.jpg"}),
  new IceCream({_id: "Choc It Out", flavors:["Chocolate"], fillings:["Cookie Dough", "Chocolate chips"], description:"Choc It Out with some friends over our delicious dough!", image: "https://www.browneyedbaker.com/wp-content/uploads/2012/08/chocolate-chocolate-chip-cookie-dough-ice-cream-3-550.jpg"}),
  new IceCream({_id: "Vanilla Ice", flavors:["Vanilla"], fillings:[], description:"The Best Vanilla Ice-cream you'll ever taste!", image: "https://thebusybaker.ca/wp-content/uploads/2019/05/best-ever-no-churn-vanilla-ice-cream-fb-ig-2.jpg"}),
  new IceCream({_id: "Burst Your Bubble",flavors:["Bubble Gum"], fillings:[], description:"Try Not to Burst Your Bubble!", image: "https://i0.wp.com/sugarandwine.com/wp-content/uploads/2016/07/Bubblegum-Ice-cream-Main.jpg?w=610"}),
  new IceCream({_id: "Fairy Floss", flavors:["Cotton Candy"], fillings:["Sprinkles"], description:"Your favorite county fair treat now available 24/7", image: "https://easyfamilyrecipeideas.com/wp-content/uploads/2019/07/Cotton-Candy-Ice-Cream-10-683x1024.jpg"}),
  new IceCream({_id: "sPEACHless", flavors:["Peach"], fillings:[], description:"Your favorite fruit now in frozen form will leave you sPEACHless", image: "https://shewearsmanyhats.com/wp-content/uploads/2014/07/peach-ice-cream-3-480x480.jpg"}),
  new IceCream({_id: "When It Rains It Smores",flavors:["Vanilla"], fillings:["Graham crackers", "Marshmallow fluff", "Chocolate fudge"], description:"Delicious campfire smore's brought to you without the fire", image: "https://howtofeedaloon.com/wp-content/uploads/2015/06/Ice-Cream-9.jpg"}),
  new IceCream({_id: "Wont Fudge", flavors:["Chocolate"], fillings:["Chocolate Fudge"], description:"This chocolate overload won't fudge your chocolate cravings", image: "https://www.cravingsofalunatic.com/wp-content/uploads/2012/10/Chocolate-Fudge-Brownie-Ice-Cream-for-Sunday-Supper-4.jpg"}),
  new IceCream({_id: "Sundae Fundae", flavors:["Vanilla", "Chocolate"], fillings:["Caramel", "Chocolate Fudge", "Cookie Bits", "Cherries"], description:"Name after the our store Sundea Fundea is what all other icecreams strive for", image: "https://4.bp.blogspot.com/-o52BONHOA08/UfF-Mrw8sMI/AAAAAAAAFPI/tzvZm1A9X18/s1600/Hot-Fudge-Sundae.jpg"})

];


const stores = [
  new Store({_id: "Sundae Fundae Original", city: "Chocolate Chip", state: "NY", street: "Vanilla Ave", building_number: 7, icecream:["Skunks Treat", "Sundae Fundae", "Wont Fudge"]}),
  new Store({_id: "Fundae on Sundae", city: "Sweet", state: "MA", street: "Sundea Ave", building_number: 80, icecream:["Bohemian Raspberry", "Mocha-licious", "Sundae Fundae", "Wont Fudge"]}),
  new Store({_id: "Fundae Creamery", city: "Milkshake", state: "IL", street: "Rocky Road", building_number: 216, icecream:["Dont Let Me Frown", "Fairy Floss", "Sundae Fundae", "When It Rains It Smores"]}),
  new Store({_id: "Sundae Fundae Jr", city: "Cherry", state: "NH", street: "Dairy Ave", building_number: 305, icecream:["Skunks Treat", "sPEACHless", "Sundae Fundae"] }),
  new Store({_id: "How About a Sundae", city: "Cherry", state: "NH", street: "Icy Ave", building_number: 3, icecream:["Choc It Out","Sundae Fundae","Vanilla Ice"] }),
  new Store({_id: "Sundae Everydae", city: "Sprinkles", state: "PA", street: "Strawberry Lane", building_number: 5, icecream:["Burst Your Bubble", "Choc It Out", "Sundae Fundae"] })
];


// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(icecreams.map(icecream => icecream.save())))
  .then(() => Promise.all(stores.map(store => store.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
