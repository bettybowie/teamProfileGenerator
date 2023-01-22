const Employee = require('./employee');

class Engineer extends Employee {

    constructor(name, Github) {
        super(name, id, email);
        this.Github = Github;
    }

    getGithub() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the engineer's name?",
                    name: "name",
                },
                {
                    type: "input",
                    message: "What is the engineer's id?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is the engineer's email?",
                    name: "email",
                },
                {
                    type: "input",
                    message: "What is the engineer's GitHub username?",
                    name: "Github",
                },
            ])
        this.getRole();
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

module.exports = Engineer;