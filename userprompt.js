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
    choices: ['Bernie Sanders', 'Donald Trump', 'Gary Johnson', 'Vermin Supreme'],
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

  console.log(JSON.stringify(answers, null, 2));

});