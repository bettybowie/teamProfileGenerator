const Employee = require('./employee');

class Intern extends Employee {

    constructor(name, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the intern's name?",
                    name: "name",
                },
                {
                    type: "input",
                    message: "What is the intern's id?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is the intern's email?",
                    name: "email",
                },
                {
                    type: "input",
                    message: "What is the intern's school?",
                    name: "school",
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

module.exports = Intern;