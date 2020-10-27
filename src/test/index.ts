const { Logger } = require("../Logger");

const main = () => {
    const logger = new Logger();
    logger.log(0, "Hello");
};

main();
