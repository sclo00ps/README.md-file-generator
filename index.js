// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'What is the usage information?',
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
       // const filename = '${answers.name.toLowerCase().split(' ').join('')}.json';
      //  const  - revisit this on pg 74 of notes
        answers.input === answers.title,
        answers.input === answers.description,
        answers.input === answers.usage,
        answers.input === answers.contributions,
        answers.input === answers.tests,
        answers.input === answers.license,
        answers.input === answers.username,
        answers.input === answers.email
          //  console.log(answers);       

    // TODO: Create a function to write README file - figure out 
    //to write to questionns section for some of the entries githb un,
    //email to ques, with instructions on additional ques. text
    // when click on links in TOC, taken to sections of RM file - create
    //string file for writeFile
fs.writeFile("log.txt", r,  (err) =>
    err ? console.log(err) : console.log ("README file created successfully!") 

)    
})




   
       
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
