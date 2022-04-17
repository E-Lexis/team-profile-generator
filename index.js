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
            if (nameInput) {
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
        message: "What is your name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide your name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID? (Required)',
        validate: idInput => {
            if (nameInput) {
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
        name: 'github',
        message: 'What is your Github username? (Required)',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please provide your Github username!');
                return false;
            }
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide your name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID? (Required)',
        validate: idInput => {
            if (nameInput) {
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
        name: 'school',
        message: 'What is the name of the school your currently attend? (Required)',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please provide the name of your current school!');
                return false;
            }
        }
    }
]

function init() {
    this.team = [];

    inquirer.prompt(managerQuestions)
        .then(data=> {
            manager = new Manager(data);
            this.team.push(manager);
        });

    inquirer.prompt([
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
                engineer = new Engineer(data);
                this.team.push(engineer);
            })
        } else if (choice === 'Add Intern') {
            inquirer.prompt(internQuestions)
            .then(data => {
                intern = new Intern(data);
                this.team.push(intern);
            })
        } else {
            //Finish team profile
        }
    })


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