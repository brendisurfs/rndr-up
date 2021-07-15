import {readFileSync} from "fs";
import path from "path";
import { env } from 'yargs';
const envFile = ".env";
const dir = process.cwd();

export const readConfig = (directory: string, file: string) => {
    
// check if file, if true => read, else err.
    try {
    const envInfo = readFileSync(path.join(directory, file), "utf-8");
    console.log(envInfo);
    } 
    catch (error) {
        console.log("ERROR the archive are incomplete: please provide a .env file.");
    }
}
