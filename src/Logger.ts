import { ILevelOptions, ILoggerOptions, LogLevel } from "nuke-model";
import { LoggerBase } from "./LoggerBase";

export class Logger extends LoggerBase {
    constructor(options?: ILoggerOptions[]) {
        super(options);
    }

    public trace(msg?: string, options?: ILevelOptions) {
        this.log(LogLevel.trace, msg, options);
    }
}