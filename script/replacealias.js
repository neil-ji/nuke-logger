const fs = require("fs");
const path = require("path");

const getAliasMap = (dirname) => {
    const tsconfig = require("../tsconfig.json");
    const aliasMap = tsconfig.compilerOptions.paths;
    const rootPath = path.resolve(__dirname, dirname);
    const result = new Map();
    for (const alias in aliasMap) {
        const absPath = path.join(rootPath, aliasMap[alias][0]);
        result.set(alias, absPath);
    }
    return result;
}

const replaceAlias = (dirname, aliasMap) => {
    const files = fs.readdirSync(path.resolve(__dirname, dirname));
    files.forEach((file) => {
        const absPath = path.resolve(__dirname, path.join(dirname, file));
        if (fs.statSync(absPath).isDirectory()) {
            replaceAlias(absPath, aliasMap);
        } else {
            let content = fs.readFileSync(absPath).toString();
            aliasMap.forEach((value, alias) => {
                const relativePath = path.relative(path.dirname(absPath), value).replace(/\\/g, "/").replace(/^(?!\/)/g, "./");
                content = content.replace(new RegExp(alias, "g"), relativePath);
            });
            fs.writeFileSync(absPath, content);
        }
    });
}

const main = (argv) => {
    const aliasMap = getAliasMap(argv[2]);
    replaceAlias(argv[2], aliasMap);
}

main(process.argv);