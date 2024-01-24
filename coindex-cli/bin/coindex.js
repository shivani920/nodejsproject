// coindex.js

const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('key')  // Specify the command without a description
  .description('Manage API Key -- https://nomics.com')
  .action(() => {
    console.log('Manage API Key -- https://nomics.com');
    // Add your key management logic here
  });

program
  .command('check')
  .description('Check Coin Price Info')
  .action(() => {
    console.log('Check Coin Price Info');
    // Add your coin price checking logic here
  });

program.parse(process.argv);
