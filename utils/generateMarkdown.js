// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![](https://img.shields.io/badge/license-${data.license}-blue.svg)


  ## Description
  ${data.description}


  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)


  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## License
   This repo is licensed by ${data.license}.


  ## Contribution 
  ${data.contribution}
  

  ## Tests
  ${data.tests}


  ## Questions
   Here's a link to my GitHub: [${data.name}](https://github.com/${data.name})

   You can reach me at: ${data.email}

`;
}

module.exports = generateMarkdown;
