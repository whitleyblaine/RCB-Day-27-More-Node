// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing. 
// The question set should include at least one:

//  	- Basic input, 
//		- Password, 
//		- List, 
//		- Checkbox, 
//		- and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');

inquirer.prompt([

  {
    type: 'input',
    message: 'What political party do you belong to?',
    name: 'party',
    default: 'Libertarian Party, Free Pony Party, etc.'
  },

  {
    type: 'password',
    message: 'Choose a password!',
    name: 'password'
  },

  {
    type: 'list',
    message: 'Who do you prefer?',
    choices: ['Bernie Sanders', 'Donald Trump', 'Gary Johnson'],
    name: 'candidates',
  },

  {
    type: 'checkbox',
    name: 'checkbox',
    message: 'Do you like paying taxes?',
    choices: ['Yes', 'No']
  },

  {
    type: 'confirm',
    name: 'confirmation',
    message: 'But you do it anyway?',
    default: true
  }

]).then(function (answers) {

  console.log(JSON.stringify(user, null, 2));

});