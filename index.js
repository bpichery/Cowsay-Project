const myInfo = require('./information.js');



let cowsay = require("cowsay");
const perso = require('./information.js');

console.log(cowsay.say({
	text : "I'm " + perso.name + "from campus" + perso.campus,
	e : "oO",
	T : "U "
}));
  