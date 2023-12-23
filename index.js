// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'name'
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
    {
        type: 'input',
        message: 'Please give a short description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'No License', 'ISC']
    },
    {
        type: 'input',
        message: 'What command should be run to install project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',
    }
];

// TODO: Create a function to write README file
function writeToFile(data, filePath = './utils/testerReadMe/test1.md') {
    fs.writeFile(filePath, generateMarkdown(data), (err) => {
        if (err) {
            console.error('Error writing ReadMe file: ${err.message}')
        } else {
            console.log('ReadMe file successfully created')
        };
    })
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            writeToFile(responses);
        })
        .catch((error) => {
            console.error('Error during inquirer prompt: ${error.message}')
        });
}

// Function call to initialize app
init();
