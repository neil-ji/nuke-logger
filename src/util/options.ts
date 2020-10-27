import { Constants, ILevelOptions, ILoggerOptions, IStyle, LogLevel } from "nuke-model";
import { getNodeStringSubstitution } from "./style";


const getBrowserLevelStyle = (customStyle: IStyle): IStyle => {
    return {
        margin: "0 2px 0 0",
        padding: "0 7px",
        fontSize: "12px",
        borderRadius: "5px",
        backgroundColor: Constants.BROWSER_STYLES.LIGHT_GREY,
        ...customStyle,
    };
}

const getLevelOption = (displayValue: string, nodeLevelStyle: string, browserLevelStyle: IStyle): ILevelOptions => {
    const nodePackageStyle = getNodeStringSubstitution(Constants.NODE_STYLES.C_GREY);
    const nodeMsgStyle = getNodeStringSubstitution();
    const browserPackageStyle: IStyle = { fontSize: "12px" };
    const browserMsgStyle: IStyle = { fontSize: "12px", color: Constants.BROWSER_STYLES.GREY };

    return {
        displayValue,
        nodeStyles: {
            levelStyle: nodeLevelStyle,
            packageStyle: nodePackageStyle,
            msgStyle: nodeMsgStyle,
        },
        browserStyles: {
            levelStyle: browserLevelStyle,
            packageStyle: browserPackageStyle,
            msgStyle: browserMsgStyle,
        }
    };
}

const mergeLevelOption = (a?: ILevelOptions, b?: ILevelOptions): ILevelOptions => {
    return {
        displayValue: b?.displayValue || a?.displayValue,
        nodeStyles: {
            ...a?.nodeStyles,
            ...b?.nodeStyles
        },
        browserStyles: {
            levelStyle: {
                ...a?.browserStyles?.levelStyle,
                ...b?.browserStyles?.levelStyle
            },
            packageStyle: {
                ...a?.browserStyles?.packageStyle,
                ...b?.browserStyles?.packageStyle
            },
            msgStyle: {
                ...a?.browserStyles?.msgStyle,
                ...b?.browserStyles?.msgStyle
            }
        }
    }
}

const mergeOption = (...options: Array<ILoggerOptions | undefined>): ILoggerOptions => {
    const defaultOption: ILoggerOptions = {
        level: LogLevel.all,
        package: "[nuke-logger]",
        trace: getLevelOption(
            "trace",
            getNodeStringSubstitution(Constants.NODE_STYLES.C_PURPLE),
            getBrowserLevelStyle({ color: Constants.BROWSER_STYLES.PURPLE })
        ),
        debug: getLevelOption(
            "debug",
            getNodeStringSubstitution(Constants.NODE_STYLES.C_GREEN),
            getBrowserLevelStyle({ color: Constants.BROWSER_STYLES.GREEN })
        ),
        info: getLevelOption(
            "info",
            getNodeStringSubstitution(Constants.NODE_STYLES.C_BLUE),
            getBrowserLevelStyle({ color: Constants.BROWSER_STYLES.BLUE })
        ),
        warn: getLevelOption(
            "warn",
            getNodeStringSubstitution(Constants.NODE_STYLES.C_YELLOW),
            getBrowserLevelStyle({ color: Constants.BROWSER_STYLES.ORANGE })
        ),
        error: getLevelOption(
            "error",
            getNodeStringSubstitution(Constants.NODE_STYLES.C_RED),
            getBrowserLevelStyle({ color: Constants.BROWSER_STYLES.RED })
        ),
        fatal: getLevelOption(
            "fatal",
            getNodeStringSubstitution(Constants.NODE_STYLES.C_BLACK, Constants.NODE_STYLES.BG_RED),
            getBrowserLevelStyle({ color: Constants.BROWSER_STYLES.WHITE, backgroundColor: Constants.BROWSER_STYLES.RED })
        )
    }
    if (!options || options.length === 0) {
        return defaultOption;
    }
    const mergedOption: ILoggerOptions = options.reduce((pre, cur) => {
        return {
            level: cur?.level || pre?.level,
            package: cur?.package || pre?.package,
            trace: mergeLevelOption(pre?.trace, cur?.trace),
            debug: mergeLevelOption(pre?.debug, cur?.debug),
            info: mergeLevelOption(pre?.info, cur?.info),
            warn: mergeLevelOption(pre?.warn, cur?.warn),
            error: mergeLevelOption(pre?.error, cur?.error),
            fatal: mergeLevelOption(pre?.fatal, cur?.fatal)
        }
    }, defaultOption) || defaultOption;
    return mergedOption;
}

export {
    mergeLevelOption,
    mergeOption,
}