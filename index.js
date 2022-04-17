const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const questions = [
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
    },
    {
        type: 'list',
        name: 'role',
        message: 'Would you like to an add enginner, an intern, or finish building your team?',
        choices: ['Engineer', 'Intern', 'Finish building team']
    }
]