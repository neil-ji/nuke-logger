import { IRuntimeStyle } from "./IRuntimeStyle.type";
import { IStyle } from "./IStyle.type";

export interface ILevelOptions {
    displayValue?: string;
    nodeStyles?: IRuntimeStyle<string>;
    browserStyles?: IRuntimeStyle<IStyle>;
}