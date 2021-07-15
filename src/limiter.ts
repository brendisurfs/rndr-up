const fs = require("fs");

interface OrbxLimitStruct {
    files: string[];
    fileCount: number;
}

export const orbxLimiter = async (directory: string) => {

    try {
        // find all files in dir
        const orbxFilesFound = [ ... fs.readdirSync(directory)];
    // filter files for only orbx
        const orbxFiles = orbxFilesFound.filter(file => (file.split(".").pop()) === "orbx");

        let count = orbxFiles.length;

        const returnFiles: OrbxLimitStruct = {
            files: orbxFiles,
            fileCount: count,
        }; 
        return returnFiles;       
    } catch (error) {
        console.log(error);
    }

}
