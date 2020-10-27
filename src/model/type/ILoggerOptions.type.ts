import { LogLevel } from "../enum";
import { ILevelOptions } from "./ILevelOptions.type";

export interface ILoggerOptions {
    level?: LogLevel | string;
    package?: string;
    trace?: ILevelOptions;
    debug?: ILevelOptions;
    info?: ILevelOptions;
    warn?: ILevelOptions;
    error?: ILevelOptions;
    fatal?: ILevelOptions;
}