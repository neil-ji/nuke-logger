import { IRuntimeStyle, IStyle } from "model/type"

const formatNodeStyleOption = (
    styleOption: IRuntimeStyle<string>,
    timings: boolean,
    level: string,
    packageName: string,
    msg: any
) => {
    const date = timings ? `[${new Date().toLocaleString()}] ` : "";
    const styles = `${date}${styleOption?.levelStyle} ${styleOption?.packageStyle}${styleOption?.msgStyle}:`;
    return [styles, level, packageName, msg];
}

const formatBrowserStyleOption = (
    styleOption: IRuntimeStyle<IStyle>,
    timings: boolean,
    level: string,
    packageName: string,
    msg: any
) => {
    const date = timings ? `[${new Date().toLocaleString()}] ` : "";
    const styles = `${date}%c%s%c%s%c%s`;
    return [
        styles,
        formatStyleToString(styleOption?.levelStyle),
        level,
        formatStyleToString(styleOption?.packageStyle),
        packageName,
        formatStyleToString(styleOption.msgStyle),
        msg
    ];
}

const formatStyleToString = (style?: IStyle) => !style
    ? ""
    : Object.entries(style).map((keyAndValue) => {
        return keyAndValue.join(":");
    }).join(";");

export {
    formatStyleToString,
    formatNodeStyleOption,
    formatBrowserStyleOption
}