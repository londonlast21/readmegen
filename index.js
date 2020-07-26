const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require("./utils/generateMarkdown");




// array of questions for user
const promptUser = () => {
return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter your project title (Required)',
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
                type:'input',
                name: 'description',
                message: 'Enter project description (Required)',
                validate: description => {
                    if (description) {
                        if (description) {
                            return true;
                        } else {
                            console.log('Please enter a description');
                            return false;
                        }
                    }
                }
            },
            // {// ask if they want to create one
            //     type: 'input',
            //     name: 'tableOfContents',
            //     message: 'Enter title of section for table of contents',
            //     default: true
            
            // },
            // { 
            //     type: 'confirm',
            //     name: 'anotherHeading',
            //     message: 'Would you like to add another heading?',
            //     default: true
            // },
            // { 
            //     // type: 'input',
            //     // name: 'chapterTitle',
            //     // message: 'Enter another title',
            //     // when: ({anotherHeading}) => anotherHeading
            // },
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
            {
            type: 'checkbox',
            name: 'license',
            message: 'Enter licensing information (Required)',
            choices: []
            },            
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
                name: 'test',
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
                message: 'Enter your email (Required)',
                validate: questions => {
                    if (questions) {
                        return true;
                    } else {
                        console.log('Please enter information');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your GitHub username? (Required)',
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter your name');
                        return false;
                    }
                }
            },
        
        ])
        .then(function(data) {
            //let generateREADME = markdown(response);
            fs.writeFile('newREADME.md', markdown(data), function (err)
            {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
                // test to see what values captured
                console.log(data);
            });
        })

    .catch(error => {
       if(error) {console.log(error);
       } else {
            console.log("other error");
       }
    });
}

// calling the prompt
promptUser();


// // // function to write README file
function writeToFile(fileName, data) {
 }

// // // function to initialize program
function init() {

 }

// // // function call to initialize program
init();
