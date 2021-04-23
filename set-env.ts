const fs = require('fs')

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';

// Load node modules
const colors = require('colors');
require('dotenv').load();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
   image: '${process.env.UNSPLASH_ACCESS}',
   weather: '${process.env.WEATHERMAP_KEY}',
   LOC: '${process.env.LOC_KEY}',
   production: false
};
`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
fs.writeFile(targetPath, envConfigFile, function (err: any) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});
