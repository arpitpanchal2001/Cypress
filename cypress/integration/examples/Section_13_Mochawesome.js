//https://www.npmjs.com/package/cypress-mochawesome-reporter visit this site and download required package to get mochawesome reporter
// step 1 - npm i --save-dev cypress-mochawesome-reporter
// step 2 - we need to define this reporter: 'cypress-mochawesome-reporter', in config.js 
// setp 3 - we need to add event listner for repoter 
// setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     }, in config.js
// step 4 - import 'cypress-mochawesome-reporter/register'; add this in  support e2e.js we ndoing this to register the event