const { default: inquirer } = require("inquirer");
const Employee = require("./lib/employee");

function getManagerInfo() {
    console.log("Welcome to team member generator!\n Let's start building your team!\n")
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                question: "What is the team manager's name?"
            },
            {
                type: "input",
                name: "id",
                question: "What is the team manager's employee id?"
            },
            {
                type: "input",
                name: "email",
                question: "What is the team member's email address?"
            },
            {
                type: "number",
                name: "officeNumber",
                question: "What is the team manager's office number?"
            }
        ])
    promptMenu();
}

function getInternInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                question: "What is the employee's school?"
            },
        ])
    promptMenu();
}

function getEmployeeInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                question: "What is the employee's name?"
            },
            {
                type: "input",
                name: "id",
                question: "What is the employee's employee id?"

            },
            {
                type: "input",
                name: "email",
                question: "What is the employee's email address?"
            }
        ])
}

function getEngineerInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "github",
                question: "What is the employee's Github username?"
            }
        ])
    promptMenu();
}

function promptMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "menu",
                question: "What type of team member would you like to add?",
                choices: [
                    {value: "Engineer"},
                    {value: "Intern"},
                    {value: "I don't want to add anymore team members."}
                ],
            }
        ])
        .then((answer) => {
            if (answer === "Engineer") {
                getEngineerInfo();
            } else if (answer === "Intern") {
                getInternInfo();
            } else (
                generateHTML()
            );
        })
}

function generateHTML() {}



