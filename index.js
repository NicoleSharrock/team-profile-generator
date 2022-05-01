const { prompt } = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateTeam = require('./src/template');
const teamArr = [];

init();

function init() {
    prompt([
        {
            type: 'confirm',
            name: 'isRole',
            message: 'Would you like to fill a position?',
        }
    ])
        .then(({ isRole }) => {
            isRole
                ? fillRole()
                : createHTML()
        });
};

function fillRole() {
    prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which position would you like to fill?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
        .then(({ role }) => {
            prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the employees name?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter the employees name.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the employees id?',
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter the employees id.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the employees email?',
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter the employees email.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the managers office number?',
                    validate: officeInput => {
                        if (officeInput) {
                            return true;
                        } else {
                            console.log('Please enter the managers office number.');
                            return false;
                        }
                    },
                    when: role == 'Manager'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the engineers github profile?',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter the engineers github username.');
                            return false;
                        }
                    },
                    when: role == 'Engineer'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the interns school name?',
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter the interns school name.');
                            return false;
                        }
                    },
                    when: role == 'Intern'
                }
            ])
                .then(ans => {
                    if (role == "Manager") {
                        const manager = new Manager(ans.name, ans.id, ans.email, ans.officeNumber)
                        teamArr.push(manager);
                    } else if (role == "Engineer") {
                        const engineer = new Engineer(ans.name, ans.id, ans.email, ans.github)
                        teamArr.push(engineer);
                    } else {
                        const intern = new Intern(ans.name, ans.id, ans.email, ans.school)
                        teamArr.push(intern);
                    }
                })
                .then(init)
        })

};

function createHTML() {
    fs.writeFile('./dist/index.html', generateTeam(teamArr), (error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Success! The HTML file for your team has been created!');
        }
    });
}