const inquirer = require('inquirer');
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    build() {
        console.log("Welcome to the team profile generator!\n Use `npm run reset` to reset the dist/ folder. \n \n Please build your team: ");
        this.getName();
    }

    getName() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the team manager's name?",
                    name: "name",
                },
            ])
        this.getId();
    }

    getId() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the team manager's id?",
                    name: "id",
                },
            ])
        this.getEmail();
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the team manager's email?",
                    name: "email",
                },
            ])
    }

    getRole() {
        Manager.getOfficeNumber();
    }
}

module.exports = Employee;