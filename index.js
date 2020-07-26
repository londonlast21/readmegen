const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require("./utils/generateMarkdown");




// array of questions for user

inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter your project title',
                validate: projectTitle => {
                    if (projectTitle) {
                        return true;
                    } else {
                        console.log('Please enter a title');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your username? (Required)',
                validate: username => {
                    if (username) {
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
                validate: username => {
                    if (username) {
                        if (username) {
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
                validate: description => {
                    if (description) {
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
                validate: installation => {
                    if (installation) {
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
                validate: usage =>{
                    if (usage) {
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
                validate: contribution => {
                    if (contribution) {
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
                validate: test => {
                    if (test) {
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
                validate: questions => {
                    if (questions) {
                        return true;
                    } else {
                        console.log('Please enter information');
                        return false;
                    }
                }
            }
        
        ]);     

        .then(function(response) {
            let generateREADME = markdown(response);
            fs.writeFile('newREADME.md', generateREADME, function (err)
            {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            });
        })

    .catch(error => {
       if(error) {console.log(err);
       } else {
            console.log("other error");
       }
    });



// // // function to write README file
// // function writeToFile(fileName, data) {
// // }

// // // function to initialize program
// // function init() {

// // }

// // // function call to initialize program
// // init();
