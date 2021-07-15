import meow from "meow";
import { number } from 'yargs';
import { automateRndr } from './driver';

const cli = meow(
    `
    Usage
    $ rndrup <browser> [OPTIONS]

    Options
    --browser, -b Choose which browser to use (currently Firefox | Chrome)
    --number, -n How many orbx get uploaded at a time
    
    Examples
    $ rndrup -fi -n 10
    "uploading .orbx to rndr..."
    `, {
        importMeta: import.meta,
        flags: {
            browser: {
                type: 'string',
                alias: "b",
                default: "firefox"
            },
            number: {
                type: number,
                alias: 'n',
                default: 1
            }
        }
    }
);

automateRndr(cli.input[0], cli.input[1])