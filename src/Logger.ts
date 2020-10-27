import { ILoggerOptions } from "nuke-model";
import { LoggerBase } from "./LoggerBase";

export class Logger extends LoggerBase {
    constructor(options?: ILoggerOptions[]) {
        super(options);
    }
}