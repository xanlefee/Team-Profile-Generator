const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//const Employee = require("../lib/Employee");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


//import inquirer from '../lib/inquirer.js';



// function to write README file
function writeToFile(fileName, data) {
    
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log("File is written!"));
}

console.log("Please build your team!");


function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managername',
        message: "What is the team manager's name?",
      },

      {
        type: 'input',
        name: 'managerid',
        message: "What's the team managers id?",

      },

      {
        type: 'input',
        name: 'manageremail',
        message: "What's the team manager's email?",

      },

      {
        type: 'input',
        name: 'officeNumber',
        message: "What's the team manager's office number?",

      },

      {

        type: 'confirm',
        name: 'more',
        message: 'Want to enter another team member? (just hit enter for YES)?',
        default: true


      },


  {
        type: "list",
        name: "choices",
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'Finish'],
         when: (answers) => answers.more === true

      },

      {
        type: 'input',
        name: 'engineername',
        message: 'Enter the name of the Engineer:',
        when: (answers) => answers.choices === 'Engineer'

      },


      {
        type: 'input',
        name: 'engineerid',
        message: 'Enter the id of the Engineer:',
        when: (answers) => answers.choices === 'Engineer'
      },

      {
        type: 'input',
        name: 'engineeremail',
        message: 'Enter the email address of the Engineer:',
        when: (answers) => answers.choices === 'Engineer'
      },

      {
        type: 'input',
        name: 'github',
        message: 'Enter the github username of the Engineer:',
        when: (answers) => answers.choices === 'Engineer'
      },

      {
        type: 'input',
        name: 'internname',
        message: 'Enter the name of the Intern:',
        when: (answers) => answers.choices === 'Intern'
      },

      {
        type: 'input',
        name: 'internid',
        message: 'Enter the id of the Intern:',
        when: (answers) => answers.choices === 'Intern'
      },

      {
        type: 'input',
        name: 'internemail',
        message: 'Enter the email of the Intern:',
        when: (answers) => answers.choices === 'Intern'
      },

      {
        type: 'input',
        name: 'school',
        message: 'Enter the school the Intern is from:',
        when: (answers) => answers.choices === 'Intern'

      },

    ])

    .then((answers) => {

      let team = [];

      //make new classes from answers


      // manager

      const manager = new Manager(answers.managername, answers.managerid, answers.manageremail, answers.officeNumber);
      

      // engineer

      const engineer = new Engineer(answers.engineername, answers.engineerid, answers.engineeremail, answers.github);

      //intern

      const intern = new Intern(answers.internname, answers.internid, answers.internemail, answers.school);


  


team.push(manager);
team.push(engineer);
team.push(intern);
console.log(team);


      const teamContent = render(team);
      // const html = render(team);
      //console.log(html);
      

      writeToFile('team.html', teamContent);

    })
};



init();


















// Create Employee, Engineer, Intern and Manager classes so that it will pass the test DONE
// Create the inquirer prompt to ask for manager information
// (diff set of prompts for diff choice of team member)
//Create the flow so that it will ask different set of inquirer prompts based on user choice. 
// write HTML result to file
// recursive function in inquirer- the function repeats until we ask it to stop


// PASS TESTS DONE
//recode components with the tests we have been given DONE
// follow to write classes DONE
// BUILD INQUIRER PROMPTS INSIDE INDEX.JS
// WORK WITH CLASS STRUCTURE 
// GENERATE HTML FILE

// demo results from inquirer query
// team info that is input must be passed into the template (the answers)

/*
const engineer = {

name: 'engineer', id: 1, email: 'engineer@engineer.com', github: 'engineer'
};

const intern = {

  name: 'engineer', id: 1, email: 'engineer@engineer.com', github: 'engineer'
  };

  const manager = {

    name: 'engineer', id: 1, email: 'engineer@engineer.com', github: 'engineer'
    };

    

// create an engineer class from info submitted in inquirer
// insert into an array


const engineerClass = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);

console.log(engineerClass);

console.log(engineerClass.getRole());

*/

// render(engineerClass);






/*
 * Recursive prompt example
 * Allows user to choose when to exit prompt


import inquirer from '../lib/inquirer.js';
const output = [];

// inquirer object must be turned into classes (New Employee, New Engineer etc);

const questions = [
  {
    type: 'input',
    name: 'tvShow',
    message: "What's your favorite TV show?",
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true,
  },
];

function ask() {
  inquirer.prompt(questions).then((answers) => {
    output.push(answers.tvShow);
    if (answers.askAgain) {
      ask();
    } else {
      console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

ask();

MIGHT NOT NEED THIS: 

function writeToFile(fileName, data) {
    
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log("File is written!"));
}

*/ 

// const html = render(team);
//console.log(html);