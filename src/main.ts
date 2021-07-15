import yargs, { parse } from "yargs";
import { automateRndr } from './driver';

interface Arguments {
    [x: string]: unknown;
    browser: string;
    env: string;
    instructions: string;
}

// cli args
const parser = yargs(process.argv.slice(1))
    .options({
        browser: {type: "string", demandOption: true, alias: "b"},
        env: {type: 'string', demandOption: false, alias: 'e'},
        instructions: {type: 'string', demandOtions: false, alias: 'i'}
});

// run the rndr automation
(async ()=> {
    const argv = await parser.argv;
    console.log(` browser selected: ${argv.browser}`); 
    automateRndr(argv.browser).catch(error => console.log(error));
})();