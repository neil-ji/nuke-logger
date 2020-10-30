import { ILevelOptions, ILoggerOptions, LogLevel } from "nuke-model";
import { convertInputToLogLevelEnum, formatBrowserStyleOption, formatNodeStyleOption, mergeLevelOption, mergeOption } from "nuke-util";

export class LoggerBase {
    private option: ILoggerOptions;

    private isNodeRunTime: boolean;

    private showTimings: boolean;

    constructor(options?: ILoggerOptions[]) {
        this.option = mergeOption(...options || []);
        try {
            this.isNodeRunTime = window === void 0;
        } catch (error) {
            this.isNodeRunTime = true;
        }
        this.showTimings = !!this.option.timings;
    }

    public log(level: LogLevel | string, msg?: string, option?: ILevelOptions) {
        const validLevel: string = convertInputToLogLevelEnum(level);
        const newOption = mergeLevelOption(Object.getOwnPropertyDescriptor(this.option, validLevel)?.value, option);
        const nativeMethod = this.getNativeLogMethod(validLevel);
        const argv = this.isNodeRunTime
            ? formatNodeStyleOption(newOption.nodeStyles!, this.showTimings, validLevel, this.option.package || "", msg)
            : formatBrowserStyleOption(newOption.browserStyles!, this.showTimings, validLevel, this.option.package || "", msg);
        nativeMethod(...argv);
    }

    public assert(condition?: boolean, ...data: any[]) {
        console.assert(condition, data);
    }

    public clear() {
        console.clear();
    }

    public count(label?: string) {
        console.count(label);
    }

    public group(...label: any[]) {
        console.group(label);
    }

    public groupCollapsed(...label: any[]) {
        console.groupCollapsed(label);
    }

    public groupEnd() {
        console.groupEnd();
    }

    public table(tabularData: any, properties?: ReadonlyArray<string>) {
        console.table(tabularData, properties);
    }

    public time(label?: string) {
        console.time(label);
    }

    public timeEnd(label?: string) {
        console.timeEnd(label);
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