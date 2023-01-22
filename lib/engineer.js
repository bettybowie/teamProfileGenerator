const Employee = require('./employee');

class Engineer extends Employee {

    constructor(name, id, email, Github) {
        super(name, id, email);
        this.Github = Github;
    }

    getGithub() {
       
        this.getRole();
    }

    getRole() {
        
    }
}

module.exports = Engineer;