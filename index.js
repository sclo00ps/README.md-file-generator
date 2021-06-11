// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

inquirer 
.prompt ([
    {
        type: 'input',
        message: 'What is your project title?',
        name:  'title',
    },

    {
        type: 'input',
        message: 'What is the project description?',
        
        name:  'description',
    },
    {    
        type: 'input',
        message: 'What is the usage information you want to include?',
        name:  'usage',
    },  
    {    
        type: 'input',
        message: 'What are the conribution guidelines?',
        name:  'contributions',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name:  'tests',
    },
    {
        type: 'list',
        message: 'What is your license type?',
        name:  'license',
        choices: ["MIT", "Apache", "GPL"]
    },

    {
        type: 'input',
        message: 'What is your Github username?',
        name:  'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name:  'email',
    },

    ])
    .then((answers) => {
     //  const  - revisit this on pg 74 of notes
        console.log(answers);
        const inputResponses = generateMarkdown(answers);

   fs.writeFile("README.MD", inputResponses,  (err) =>
    err ? console.log(err) : console.log ("README file created successfully!") 

)    
})




   
       
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
