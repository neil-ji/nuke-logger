import { ILevelOptions, ILoggerOptions, LogLevel } from "nuke-model";
import { convertInputToLogLevelEnum, mergeLevelOption, mergeOption } from "nuke-util";

export class LoggerBase {
    private option: ILoggerOptions;

    private isNodeRunTime: boolean = true;

    constructor(options?: ILoggerOptions[]) {
        this.option = mergeOption(...options || []);
        try {
            this.isNodeRunTime = window === void 0;
        } catch (error) {
            this.isNodeRunTime = true;
        }
    }

    public log(level: LogLevel | string, msg?: string, option?: ILevelOptions) {
        const validLevel: string = convertInputToLogLevelEnum(level);
        const newOption = mergeLevelOption(Object.getOwnPropertyDescriptor(this.option, validLevel)?.value, option);
        const nativeMethod = this.getNativeLogMethod(validLevel);
        if (this.isNodeRunTime) {
            const style: string = `${newOption.nodeStyles?.levelStyle} ${newOption.nodeStyles?.packageStyle}${newOption.nodeStyles?.msgStyle}:`;
            nativeMethod(style, newOption.displayValue, this.option.package, msg || "");
        } else {
            nativeMethod(newOption.browserStyles?.levelStyle, newOption.displayValue, newOption.browserStyles?.packageStyle, this.option.package, msg || "");
        }
    }

    private getNativeLogMethod(level: string) {
        switch (level) {
            case LogLevel[LogLevel.trace]:
            case LogLevel[LogLevel.debug]:
                return console.debug;
            case LogLevel[LogLevel.info]:
                return console.info;
            case LogLevel[LogLevel.warn]:
                return console.warn;
            case LogLevel[LogLevel.error]:
                return console.error;
            case LogLevel[LogLevel.all]:
            case LogLevel[LogLevel.off]:
            default:
                return console.log;
        }
    }
}