const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const fs = require('fs');

//  Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "Welcome to the team profile generator!\n Use `npm run reset` to reset the dist/ folder. \n \n Please build your team: \n What is the team manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the team manager's id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the team manager's email?",
      name: "email",
    },
    {
      type: "number",
      message: "What is the team manager's office number?",
      name: "officeNumber",
      validate: function(input) {
        if (input !== "number") {
          console.log('\nPlease enter a positive number.');

        }
      }
    },
    {
      type: "list",
      message: "Which type of team member would you like to add?",
      choices:[
        {value: "Engineer", name: "engineer"},
        {value: "Intern", name: "intern"},
        {value: "I don't want to add anymore team members", name: "no more adding"}]
    },
];



// use inquirer prompt questions and write html file
inquirer
.prompt(questions)

.then((data) => {
    const readmeContent = generateMarkdown(data);

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'))
})
