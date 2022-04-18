const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');



const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your Team Manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide your Team Manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please provide your employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please provide your office number. (Required)',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please provide your office number!');
                return false;
            }
        }
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide your engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's employee ID? (Required)",
        validate: idInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide your engineer's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please provide your engineer's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's Github username? (Required)",
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log("Please provide your engineer's Github username!");
                return false;
            }
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide your intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's employee ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please provide your intern's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please provide your intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of the school your intern currently attends? (Required)',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please provide the name of your intern's school!");
                return false;
            }
        }
    }
]

function init() {
    const team = [];

    inquirer.prompt(managerQuestions)
        .then(data=> {
            let manager = new Manager(data);
            console.log(manager);
            team.push(manager);
        })
        .catch(err => {
            console.log(err);
        });

    /*inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add an engineer, an intern, or are you finished building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finish building team']
        }
    ])
    .then(({choice}) => {
        if (choice == 'Add Engineer') {
            inquirer.prompt(engineerQuestions)
            .then(data => {
                let engineer = new Engineer(data);
                console.log(engineer);
                team.push(engineer);
            })
        } else if (choice === 'Add Intern') {
            inquirer.prompt(internQuestions)
            .then(data => {
                let intern = new Intern(data);
                console.log(intern);
                team.push(intern);
            })
        } else {
            return team;
        }
    });

console.log(team);
*/
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return; 
        } else {
            console.log("Team profile successfully created. You will find your profile in the dist folder.")
        }
    })
}; 

init();