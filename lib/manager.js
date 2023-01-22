const { default: inquirer } = require('inquirer');
const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');

class Manager extends Employee {

    constructor(name, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        inquirer
            .prompt([
                {
                    type: "number",
                    message: "What is the team manager's office number",
                    name: "officeName",
                }
            ])
            .then((answer) => {
                if (answer !== "number") {
                    console.log(chalk.red("\nPlease enter a positive number\n"));
                }
                return this.getRole();
            })
    }

    getRole() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which type of team member would you like to add?",
                    choices: [
                        {value: "Engineer", name: "engineer"},
                        {value: "Intern", name: "intern"},
                        {value: "I don't want to add anymore team members", name: "stopAdding"}
                    ]
                }
            ])
            .then((choice) => {
                if (choice === "engineer") {
                    Engineer.getGithub();
                } else if (choice === "intern") {
                    Intern.getSchool();
                } else {
                    return;
                }
            })
    }
}

module.exports = Manager;