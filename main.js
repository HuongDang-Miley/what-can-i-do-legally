const whatCanIDoLegally = require('./back-end.js')
function getInput(i) {
  return process.argv[i + 2];
}
// get the user's input
const age = getInput(0);

// get message from the back end
const message = whatCanIDoLegally(age);

// print message to user
console.log(message);


