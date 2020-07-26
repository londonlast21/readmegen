// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Username: ${data.username}
  

  ## Description: ${data.description}
  

  ## Table of Contents: ${data.tableOfContents}
  

  ## Installation: ${data.installation}
  

  ## Usage: ${data.usage}
  

  ## Licenses: ${data.licenses}
  

  ## Contribution: ${data.contribution}
  

  ## Test: ${data.test}
  

  ## Questions: "https${data.questions}
  

  
`;
}

module.exports = generateMarkdown;
