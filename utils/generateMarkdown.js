const toc = require('markdown-toc');

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Username: ${data.username}
  

  ## Description: ${data.description}
  

  ## Table of Contents: 
  this needs to loop for the entire list
  var i;
  for (i = 0; i < )
  [TOC]${data.tableOfContents}
 
  
  

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
