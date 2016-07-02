// Instructions: 
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it. 
// HINT: You should not need to change *that much* code. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require('geocoder');
var inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    message: 'What city would you like to geocode?',
    name: 'cityInput',
    default: 'Ex: New York, New York'
  }
]).then (function(answer) {
  var address = answer.cityInput;
  geocoder.geocode(address, function(err, data){
    console.log(JSON.stringify(data, null, 2));
  });
});

