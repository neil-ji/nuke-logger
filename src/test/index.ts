import { Logger } from "../Logger";

const main = () => {
    const logger = new Logger([{ timings: false }]);
    [1, 2, 3, 4, 5, 6].forEach(v => {
        logger.log(v, `hello nuke-logger, this is a test message, log level is ${v}\n`);
    })
};

main();
