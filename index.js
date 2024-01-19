const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// Create Employee, Engineer, Intern and Manager classes so that it will pass the test
// Create the inquirer prompt to ask for manager information
// (diff set of prompts for diff choice of team member)
//Create the flow so that it will ask different set of inquirer prompts based on user choice. 
// write HTML result to file
// recursive function in inquirer- the function repeats until we ask it to stop


// PASS TESTS
//recode components with the tests we have been given 
// follow to write classes
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

*/ 

// const html = render(team);
//console.log(html);