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

  ${data.Github}


`;
}

module.exports = generateMarkdown;
