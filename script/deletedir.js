const fs = require("fs");
const path = require("path");

const deleteDir = (dirname) => {
    const files = fs.readdirSync(path.resolve(__dirname, dirname));

    files.forEach((file) => {
        const absPath = path.resolve(__dirname, path.join(dirname, file));
        if (fs.statSync(absPath).isDirectory()) {
            deleteDir(absPath);
            fs.rmdirSync(absPath);
        } else {
            fs.unlinkSync(absPath);
        }
    });
}

const main = (argv) => {
    deleteDir(argv[2]);
}

main(process.argv);