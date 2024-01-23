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


// function to write README file
function writeToFile(fileName, data) {
    
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log("File is written!"));
}

console.log("Please build your team!");


// empty team array

let team = [];

//recursive questions in function


function promptTeamMember() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Finish'],
      },
    ])
    .then((answers) => {
      // if finish is selected, then the file will be written
      if (answers.type === 'Finish') {
        // Generate the HTML and write it to a file
        const teamContent = render(team);

      writeToFile(outputPath, teamContent);
        console.log('Team profile generated successfully!');
      } else {
        // Prompt for team member details
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'name',
              message: `What is the ${answers.type}'s name?`,
            },
            {
              type: 'input',
              name: 'id',
              message: `What is the ${answers.type}'s id?`,
            },
            {
              type: 'input',
              name: 'email',
              message: `What is the ${answers.type}'s email?`,
            },

            // specific questions asked based on the employee 'type'
            {
              type: 'input',
              name: 'github',
              message: `What is the ${answers.type}'s GitHub username?`,
              when: answers.type === 'Engineer',
            },
            {
              type: 'input',
              name: 'school',
              message: `What is the ${answers.type}'s school?`,
              when: answers.type === 'Intern',
            },
          ])
          .then((memberAnswers) => {
            // new classes based on the answers
            if (answers.type === 'Engineer') {
              const engineer = new Engineer(
                memberAnswers.name,
                memberAnswers.id,
                memberAnswers.email,
                memberAnswers.github
              );

              // then pushed to the team array 
              team.push(engineer);

            } else if (answers.type === 'Intern') {
              const intern = new Intern(
                memberAnswers.name,
                memberAnswers.id,
                memberAnswers.email,
                memberAnswers.school
              );
              team.push(intern);
            }
            // recursive prompt
            promptTeamMember();
          });
      }
    });
}

// Prompt for the manager details - these will be asked first
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's id?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
    },
  ])
  .then((answers) => {
    // Create the manager object
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.push(manager);

    // Prompt for the first team member
    promptTeamMember();
  });

















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