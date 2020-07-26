const generateBadges = require('./generateBadges')
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
