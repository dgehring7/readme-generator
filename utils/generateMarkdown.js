function renderlicencesection(licence){
  if (licence !== "None") {
    return `## Licence
    
    This project is licenced under the ${licence} licence.`;
  }
  return "";
}
function renderlicencelink(licence){
  if (licence !== "None") {
    return `\n* [Licence](#licence)\n`;
  }
  return "";
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation]("#installation")

  *[Usage]("usage")
  ${renderlicencelink(data.licence)}

  ## Installation

  To install necessary dependencies run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderlicencesection(data.licence)}

  ## Contributors
  \`\`\`
  ${data.contributors}
  \`\`\`
  contributed to this project

  ## Questions

  ${data.questions}

  ## Github
  
  Here is my Github:
  \`\`\`
  ${data.Github}
  \`\`\`
  to view my other projects

`;
}

module.exports = generateMarkdown;
