const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML.js');

const teamArray = [];

const addManagerQuestions = () => {
    return inquirer.prompt([
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
    ]).then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager); 
        inquirer.prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: "Would you like to add another employee?",
                choices: ['Add Engineer', 'Add Intern', 'Done']
            }
        ]).then(({ addEmployee }) => {
            if (addEmployee === 'Add Engineer') {
                addEngineerQuestions();
            }
            if (addEmployee === 'Add Intern') {
                addInternQuestions();
            }
            if (addEmployee === 'Done') {
                console.log(teamArray);
                generateHTML(teamArray);
            }
        })    
    })
};

const addEngineerQuestions = () => {
    return inquirer.prompt([
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
                if (idInput) {
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
    ]).then(engineerInput => {
        const  { name, id, email, github } = engineerInput; 
        const engineer = new Engineer (name, id, email, github);

        teamArray.push(engineer); 
        console.log(engineer);
        inquirer.prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: "Would you like to add another employee?",
                choices: ['Add Engineer', 'Add Intern', 'Done']
            }
        ]).then(({ addEmployee }) => {
            if (addEmployee === 'Add Engineer') {
                addEngineerQuestions();
            }
            if (addEmployee === 'Add Intern') {
                addInternQuestions();
            }
            if (addEmployee === 'Done') {
                console.log(teamArray);
                generateHTML(teamArray);
            }
        }) 
    })
};

const addInternQuestions = () => {
    return inquirer.prompt([
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
    ]).then(internInput => {
        const  { name, id, email, school } = internInput; 
        const intern = new Intern (name, id, email, school);

        teamArray.push(intern); 
        console.log(intern);
        inquirer.prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: "Would you like to add another employee?",
                choices: ['Add Engineer', 'Add Intern', 'Done']
            }
        ]).then(({ addEmployee }) => {
            if (addEmployee === 'Add Engineer') {
                addEngineerQuestions();
            }
            if (addEmployee === 'Add Intern') {
                addInternQuestions();
            }
            if (addEmployee === 'Done') {
                console.log(teamArray);
                return generateHTML(teamArray);
            }
        }) 
    })
};

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

addManagerQuestions();
