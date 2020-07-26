const toc = require('markdown-toc');

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Username: ${data.username}
  

  ## Description: ${data.description}
  
  

  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage) 
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Licenses](#licenses)
  * [Questions](#questions)
  * [Contact Me](#contact)
  * 
 
  ${data.tableOfContents} 
  
  

  ## Installation: ${data.installation}
  

  ## Usage: ${data.usage}
  

  ## Licenses: ${data.licenses}
  

  ## Contribution: ${data.contribution}
  

  ## Test: ${data.test}
  

  ## Questions: 
  
  ## Contact:

  ### [Link to email me]<${data.questions}>  
  ### [My GitHub]: (https://github.com/${data.username})
  

  
`;
}

module.exports = generateMarkdown;
