declare module "model/enum/LogLevel" {
    export enum LogLevel {
        all = 0,
        trace = 1,
        debug = 2,
        info = 3,
        warn = 4,
        error = 5,
        fatal = 6,
        off = 7
    }
}
declare module "model/enum/index" {
    export * from "model/enum/LogLevel";
}
declare module "model/constant/index" {
    const Constants: {
        PACKAGE: string;
        NODE_STYLES: {
            BG_GREY: string;
            BG_RED: string;
            BG_GREEN: string;
            BG_YELLOW: string;
            BG_BLUE: string;
            BG_PURPLE: string;
            BG_LIGHT_BLUE: string;
            BG_WHITE: string;
            C_WHITE: string;
            C_BLACK: string;
            C_RED: string;
            C_GREEN: string;
            C_YELLOW: string;
            C_BLUE: string;
            C_PURPLE: string;
            C_LIGHT_BLUE: string;
            C_GREY: string;
            FONT_BOLD: string;
            INVERSE: string;
        };
        BROWSER_STYLES: {
            PURPLE: string;
            GREEN: string;
            BLUE: string;
            ORANGE: string;
            RED: string;
            WHITE: string;
            GREY: string;
            LIGHT_GREY: string;
        };
    };
    export { Constants };
}
declare module "model/type/IRuntimeStyle.type" {
    export interface IRuntimeStyle<T> {
        levelStyle?: T;
        packageStyle?: T;
        msgStyle?: T;
    }
}
declare module "model/type/IStyle.type" {
    export interface IStyle {
        backgroundColor?: string;
        border?: string;
        borderRadius?: string;
        color?: string;
        fontSize?: string;
        margin?: string;
        padding?: string;
        otherStyles?: string;
    }
}
declare module "model/type/ILevelOptions.type" {
    import { IRuntimeStyle } from "model/type/IRuntimeStyle.type";
    import { IStyle } from "model/type/IStyle.type";
    export interface ILevelOptions {
        displayValue?: string;
        nodeStyles?: IRuntimeStyle<string>;
        browserStyles?: IRuntimeStyle<IStyle>;
    }
}
declare module "model/type/ILoggerOptions.type" {
    import { LogLevel } from "model/enum/index";
    import { ILevelOptions } from "model/type/ILevelOptions.type";
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
}
declare module "model/type/index" {
    export * from "model/type/ILoggerOptions.type";
    export * from "model/type/ILevelOptions.type";
    export * from "model/type/IRuntimeStyle.type";
    export * from "model/type/IStyle.type";
}
declare module "model/index" {
    export * from "model/enum/index";
    export * from "model/constant/index";
    export * from "model/type/index";
}
declare module "util/style" {
    const getNodeStringSubstitution: (...styles: string[]) => string;
    export { getNodeStringSubstitution };
}
declare module "util/options" {
    import { ILevelOptions, ILoggerOptions } from "model/index";
    const mergeLevelOption: (a?: ILevelOptions | undefined, b?: ILevelOptions | undefined) => ILevelOptions;
    const mergeOption: (...options: Array<ILoggerOptions | undefined>) => ILoggerOptions;
    export { mergeLevelOption, mergeOption, };
}
declare module "util/convert" {
    const convertInputToLogLevelEnum: (input: any) => string;
    export { convertInputToLogLevelEnum };
}
declare module "util/index" {
    import { getNodeStringSubstitution } from "util/style";
    import { mergeLevelOption, mergeOption } from "util/options";
    import { convertInputToLogLevelEnum } from "util/convert";
    export { convertInputToLogLevelEnum, getNodeStringSubstitution, mergeOption, mergeLevelOption, };
}
declare module "LoggerBase" {
    import { ILevelOptions, ILoggerOptions, LogLevel } from "model/index";
    export class LoggerBase {
        private option;
        private isNodeRunTime;
        constructor(options?: ILoggerOptions[]);
        log(level: LogLevel | string, msg?: string, option?: ILevelOptions): void;
        private getNativeLogMethod;
    }
}
declare module "Logger" {
    import { ILoggerOptions } from "model/index";
    import { LoggerBase } from "LoggerBase";
    export class Logger extends LoggerBase {
        constructor(options?: ILoggerOptions[]);
    }
}
declare module "index" {
    export * from "Logger";
    export * from "LoggerBase";
}
declare const Logger: any;
declare const main: () => void;
