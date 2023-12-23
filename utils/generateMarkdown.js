// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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
   Here's a link to my GitHub: ${data.name}
   You can reach me at: ${data.email}

`;
}

module.exports = generateMarkdown;
