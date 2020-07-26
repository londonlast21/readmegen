const toc = require('markdown-toc');

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Username: ${data.username}
  

  ## Description: ${data.description}
  
  

  ## Table of Contents: 
 
  toc(${data.collectInputs}) 
  
  

  ## Installation: ${data.installation}
  

  ## Usage: ${data.usage}
  

  ## Licenses: ${data.licenses}
  

  ## Contribution: ${data.contribution}
  

  ## Test: ${data.test}
  

  ## Questions: 
  
  ### [Link to email me]<${data.questions}>  
  ### [My GitHub]: (https://github.com/${data.username})
  

  
`;
}

module.exports = generateMarkdown;
