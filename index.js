// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
//const generateReadMe = (answers) =>

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
        type: 'list',
        message: 'What are the test instructions?',
        name:  'tests',
    },
    {
        type: 'list',
        name:  'license',
        message: 'What is your license type?',
        choices: ["MIT", "Apache", "GPL"]
    },
    {
        type: 'input',
        name:  'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name:  'email',
        message: 'What is your email address?',
    },

    ])
    .then((answers) => {
     //  const  - revisit this on pg 74 of notes
        console.log(answers);
        const readmePageContent = generateReadMe(answers);

   fs.writeFile('README.md', readmePageContent,  (err) =>
    err ? console.log(err) : console.log ('README.md file created successfully!') 

)    
})
   
       
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
