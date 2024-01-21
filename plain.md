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
        type: "list",
        name: "choices",
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'Finish'],
        

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


      {
        type: "list",
        name: "choices",
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'Finish'],
        

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

