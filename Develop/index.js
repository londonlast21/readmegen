const fs = require('fs');
const inquirer = require('inquirer');
//const markdown = require("./utils/generateMarkdown");




// array of questions for user
const questions = [
    promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your project name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name');
                        return false;
                    }
                }
            },
            {
                type:'input',
                name: 'description',
                message: 'Enter project description (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a description');
                            return false;
                        }
                    }
                }
            },
            {
                type: 'input',
                name: 'tableOfContents',
                message: 'Enter table of contents',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter information');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name:'installation',
                message: 'Enter installation instructions (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter information!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter usage for your project (Required)',
                validate: nameInput =>{
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter information!');
                        return false;
                    }
                }
            },
            // // this needs to be a dropdown bar{
            //     type: 'list',
            //     name: 'license',
            //     message: 'Enter licensing information (Required)',
            //     validate: nameInput => {
            //         if (nameInput) {
            //             return true;
            //         } else {
            //             console.log('Please enter information!');
            //             return false;
            //         }
            //     }
            // //},
            {
                type: 'input',
                name: 'contribution',
                message: 'Enter contributor information (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter information');
                        return false;
                    }
                }
        
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Enter testing information (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter information');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Enter questions (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter information');
                        return false;
                    }
                }
            }
        
        
        
            ]);
        }
];

inquirer.prompt(questions)
    .then((inquirerResponse, data) => {
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerRespoonse, data);
    })
    .catch((err) => {
        console.log(err);
    })



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
