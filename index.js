const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const gmd = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: "input",
    message: "What is your README title?",
    name: "title"
    },
    {
        type: "input",
        message: "What is your Github Username?",
        name: "Github"
    },
    {
        type: "input",
        message: "What is your project description?",
        name: "description" 
    },
    {
        type: "input",
        message: "What command should we run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage" 
    },
    {
        type: "input",
        message: "Who were the contributors to this project?",
        name: "contributors" 
    },
    {   type: "input",
        message: "Do you have any questions?",
        name: "questions" 
    },
    {   type: "input",
        message: "What licence is used?",
        name: "licence",
        default: "MIT"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("generateReadme");
        console.log("response", response);
        writeToFile("README.md", generateMarkdown({
             ...response }));
    });
}

// function call to initialize program
init();
