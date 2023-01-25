const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const fs = require("fs");
const team = [];

function getManagerInfo() {
    console.log("Welcome to team profile generator!\n Let's start building your team!\n")
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's employee id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the team member's email address?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?"
            }
        ])
        .then(function(response) {
            const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
            team.push(newManager);
            promptMenu();
        })
}

function getInternInfo(info) {
    const internId = info.id;
    const internName = info.name;
    const internEmail = info.email;
    inquirer
        .prompt([
            {
                type: "input",
                name: "school",
                message: "What is the employee's school?"
            },
        ])
        .then(function(response) {
            const newIntern = new Intern(internName, internId, internEmail, response.school);
            team.push(newIntern);
            promptMenu();
        })
}

function getEmployeeInfo(position) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's employee id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email address?"
            }
        ])
        .then(function(response) {
            if (position === "Intern") {
                getInternInfo(response);
            } else if (position === "Engineer") {
                getEngineerInfo(response);
            }
        })
}

function getEngineerInfo(info) {
    const engineerId = info.id;
    const engineerName = info.name;
    const engineerEmail = info.email;
    inquirer
        .prompt([
            {
                type: "input",
                name: "github",
                message: "What is the employee's Github username?"
            }
        ])
        .then(function(response) {
            const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, response.github);
            team.push(newEngineer);
            promptMenu();
        })
}

function promptMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What type of team member would you like to add?",
                choices: [
                    {value: "Engineer"},
                    {value: "Intern"},
                    {value: "I don't want to add anymore team members."}
                ],
            }
        ])
        .then((answer) => {
            if (answer.role === "Engineer") {
                getEmployeeInfo("Engineer");
            } else if (answer.role === "Intern") {
                getEmployeeInfo("Intern");
            }  else {
                generateHTML(team);
            }
        })
}

function generateHTML(array) {
    const teamMembers =  array.map(employee => {
            return `
            <div class="card col-3 rounded-3">
                <div class="card-title">
                    <h4 class="name">${employee.getName()}</h4>
                    <h5 class="job-title">${employee.getRole()}</h5>
                </div>
                <div class="card-text">
                    <p>Employee ID: ${employee.getId()} </p>
                    <p>Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></p>
                    <p>${employee.getRole()==="Intern" ? "School: " + employee.getSchool(): employee.getRole()==="Manager" ? "Office Number: " + employee.getOfficeNumber(): "GitHub: " + "<a href='https://github.com/" + employee.getGithub() + "' target='_blank'>" + employee.getGithub() + "</a>"} </p>
                </div>
            </div>`
    });

    const finalHtml = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet">
        <title>Team Profile</title>
    </head>

    <body>
        <div class="container-fluid">
            <h1 class="text-center">My Team</h1>
        </div>
        <div class="container row text-center">
            ${teamMembers.join('')}
        </div>
    </body>

    </html>`

fs.writeFile('dist/index.html', finalHtml, 'utf-8', (err) =>
err ? console.log(err) : console.log('Successfully created index.html!'))
}

getManagerInfo();
