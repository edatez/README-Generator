const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

const questions = [
    {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
    },
    {
    type: "input",
    name: "email",
    message: "What is your email?"
    },
    {
    type: "input",
    name: "url",
    message: "What is the Url to your project?"
    },
    {
    type: "input",
    name: "title",
    message: "What is your project's title?"
    },
    {
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
    },
    {
    type: "list",
    name: "license",
    message: "Choose your license information below",
    choices: ["GNU AGPLv3", "MIT", "APACHE 2.0", "MOZILLA 2.0", "None"]
    },
    {
    type: "input",
    name: "installation",
    message: "What command do you use to install the dependencies?",
    default: "npm i"
    },
    {
    type: "input",
    name: "test",
    message: "What command do you use to run tests?",
    default: "npm test"
    },
    {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
    },
    {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing?",
    }

]
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

function init() {
    inquirer
        .prompt(questions)
        .then((inquirerResponses) => {

        // console.log(response);
        writeToFile("README.md", generateMarkdown({...inquirerResponses }));
   
    });
}

init();