import { LogLevel } from "nuke-model"

const isValidNum = (num: number) => {
    switch (num) {
        case LogLevel.trace:
        case LogLevel.debug:
        case LogLevel.info:
        case LogLevel.warn:
        case LogLevel.error:
        case LogLevel.fatal:
            return true;
        case LogLevel.all:
        case LogLevel.off:
        default:
            return false;
    }
}

const isValidStr = (str: string) => {
    switch (str.toLowerCase()) {
        case LogLevel[LogLevel.trace]:
        case LogLevel[LogLevel.debug]:
        case LogLevel[LogLevel.info]:
        case LogLevel[LogLevel.warn]:
        case LogLevel[LogLevel.error]:
        case LogLevel[LogLevel.fatal]:
            return true;
        case LogLevel[LogLevel.off]:
        case LogLevel[LogLevel.all]:
        default:
            return false;
    }
}

const convertInputToLogLevelEnum = (input: any): string => {
    if (typeof input === "string" && isValidStr(input)) {
        return input;
    }
    if (typeof input === "number" && isValidNum(input)) {
        return LogLevel[input];
    }
    return LogLevel[LogLevel.trace];
}

export {
    convertInputToLogLevelEnum
}