const inquirer = require('inquirer');
const fs = require('fs');

//  Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
      },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
      },
      {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: [
          {value: 'MIT', name:'MIT'},
          {value: 'Apache_2.0',  name:'Apache 2.0'},
          {value: 'GPLv3', name:'GPL 3.0'},
          {value: 'EPL_1.0', name:'Eclipse Public License 1.0'},
          {value: 'none', name: 'None'}
        ]
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
      },
      {
        type: 'input',
        message: 'Please provide the contribution guidelines for your project.',
        name: 'contribution'
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test',
        name: 'test'
      },
];

// use inquirer prompt questions and write README file
inquirer
.prompt(questions)
.then((data) => {
    const readmeContent = generateMarkdown(data);

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'))
})
