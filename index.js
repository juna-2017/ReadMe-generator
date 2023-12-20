// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',

    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'title',
    },
    // {
    //     type: '',
    //     message: 'Please give a short description of your project',
    //     name: 'description',
    // },
    // {
    //     type: '',
    //     message: 'What kind of license should your project have?',
    //     name: 'license',
    // },
    // {
    //     type: '', 
    //     message: 'What command should be run to install project?',
    //     name: 'install command',
    // },
    // {
    //     type: '', 
    //     message: 'What command should be run to run tests?',
    //     name: 'tests',
    // },
    // {
    //     type: '', 
    //     message: 'What does the user need to know about using the repo?',
    //     name: 'usage',
    // },
    // {
    //     type: '', 
    //     message: 'What does the user need to know about contributing to the repo?',
    //     name: 'contribution',
    // }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
