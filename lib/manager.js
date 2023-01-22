const { default: inquirer } = require('inquirer');
const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;