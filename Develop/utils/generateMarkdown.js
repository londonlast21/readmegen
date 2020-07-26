// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecTtitle}

  ${data.username}
  ##username:

  ${data.description}
  ##description:

  ${data.tableOfContents}
  ##table of contents:

  ${data.installation}
  ##installation:

  ${data.usage}
  ##usage:

  ${data.licenses}
  ##licenses:

  ${data.contribution}
  ##contribution:

  ${data.test}
  ##test:

  ${data.questions}
  ##questions:

  
`;
}

module.exports = generateMarkdown;
