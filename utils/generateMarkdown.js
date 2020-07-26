generateBadges = function generateBadges(data) {
  switch (data) {
      case "Apache":
          return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      case "GNU":
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "MIT":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      default:
          return;
  }
}
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Badges: ${generateBadges(data.licenses)}

  ## Username: ${data.username}
  

  ## Description: ${data.description}
  
  

  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage) 
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Licenses](#licenses)
  * [Contact Me](#questions)

 
   
  
  

  ## Installation: ${data.installation}
  

  ## Usage: ${data.usage}
  

  ## Licenses: ${data.licenses}

  

  ## Contribution: ${data.contribution}
  

  ## Test: ${data.test}
  
  
  ## Questions:

  ### [Link to email me]<${data.questions}>  
  ### [My GitHub]: (https://github.com/${data.name})
  

  
`;
}

module.exports = generateMarkdown;
