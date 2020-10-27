"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("model/enum/LogLevel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogLevel = void 0;
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["all"] = 0] = "all";
        LogLevel[LogLevel["trace"] = 1] = "trace";
        LogLevel[LogLevel["debug"] = 2] = "debug";
        LogLevel[LogLevel["info"] = 3] = "info";
        LogLevel[LogLevel["warn"] = 4] = "warn";
        LogLevel[LogLevel["error"] = 5] = "error";
        LogLevel[LogLevel["fatal"] = 6] = "fatal";
        LogLevel[LogLevel["off"] = 7] = "off";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
});
define("model/enum/index", ["require", "exports", "model/enum/LogLevel"], function (require, exports, LogLevel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(LogLevel_1, exports);
});
define("model/constant/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Constants = void 0;
    var Constants = {
        "PACKAGE": "[nuke-logger]",
        "NODE_STYLES": {
            "BG_GREY": "5",
            "BG_RED": "41",
            "BG_GREEN": "42",
            "BG_YELLOW": "43",
            "BG_BLUE": "44",
            "BG_PURPLE": "45",
            "BG_LIGHT_BLUE": "46",
            "BG_WHITE": "47",
            "C_WHITE": "29",
            "C_BLACK": "30",
            "C_RED": "31",
            "C_GREEN": "32",
            "C_YELLOW": "33",
            "C_BLUE": "34",
            "C_PURPLE": "35",
            "C_LIGHT_BLUE": "36",
            "C_GREY": "90",
            "FONT_BOLD": "1",
            "INVERSE": "7"
        },
        "BROWSER_STYLES": {
            "PURPLE": "#660099",
            "GREEN": "#99CC33",
            "BLUE": "#0099FF",
            "ORANGE": "#FF9900",
            "RED": "#F00000",
            "WHITE": "#FFFFFF",
            "GREY": "#666666",
            "LIGHT_GREY": "#EEEEEE",
        }
    };
    exports.Constants = Constants;
});
define("model/type/IRuntimeStyle.type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("model/type/IStyle.type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("model/type/ILevelOptions.type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("model/type/ILoggerOptions.type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("model/type/index", ["require", "exports", "model/type/ILoggerOptions.type", "model/type/ILevelOptions.type", "model/type/IRuntimeStyle.type", "model/type/IStyle.type"], function (require, exports, ILoggerOptions_type_1, ILevelOptions_type_1, IRuntimeStyle_type_1, IStyle_type_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(ILoggerOptions_type_1, exports);
    __exportStar(ILevelOptions_type_1, exports);
    __exportStar(IRuntimeStyle_type_1, exports);
    __exportStar(IStyle_type_1, exports);
});
define("model/index", ["require", "exports", "model/enum/index", "model/constant/index", "model/type/index"], function (require, exports, enum_1, constant_1, type_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(enum_1, exports);
    __exportStar(constant_1, exports);
    __exportStar(type_1, exports);
});
define("util/style", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getNodeStringSubstitution = void 0;
    var getNodeStringSubstitution = function () {
        var styles = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            styles[_i] = arguments[_i];
        }
        return styles && styles.length > 0
            ? "\u001B[" + styles.join(";") + "m%s\u001B[0m"
            : "";
    };
    exports.getNodeStringSubstitution = getNodeStringSubstitution;
});
define("util/options", ["require", "exports", "model/index", "util/style"], function (require, exports, nuke_model_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeOption = exports.mergeLevelOption = void 0;
    var getBrowserLevelStyle = function (customStyle) {
        return __assign({ margin: "0 2px 0 0", padding: "0 7px", fontSize: "12px", borderRadius: "5px", backgroundColor: nuke_model_1.Constants.BROWSER_STYLES.LIGHT_GREY }, customStyle);
    };
    var getLevelOption = function (displayValue, nodeLevelStyle, browserLevelStyle) {
        var nodePackageStyle = style_1.getNodeStringSubstitution(nuke_model_1.Constants.NODE_STYLES.C_GREY);
        var nodeMsgStyle = style_1.getNodeStringSubstitution();
        var browserPackageStyle = { fontSize: "12px" };
        var browserMsgStyle = { fontSize: "12px", color: nuke_model_1.Constants.BROWSER_STYLES.GREY };
        return {
            displayValue: displayValue,
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
    };
    var mergeLevelOption = function (a, b) {
        var _a, _b, _c, _d, _e, _f;
        return {
            displayValue: (b === null || b === void 0 ? void 0 : b.displayValue) || (a === null || a === void 0 ? void 0 : a.displayValue),
            nodeStyles: __assign(__assign({}, a === null || a === void 0 ? void 0 : a.nodeStyles), b === null || b === void 0 ? void 0 : b.nodeStyles),
            browserStyles: {
                levelStyle: __assign(__assign({}, (_a = a === null || a === void 0 ? void 0 : a.browserStyles) === null || _a === void 0 ? void 0 : _a.levelStyle), (_b = b === null || b === void 0 ? void 0 : b.browserStyles) === null || _b === void 0 ? void 0 : _b.levelStyle),
                packageStyle: __assign(__assign({}, (_c = a === null || a === void 0 ? void 0 : a.browserStyles) === null || _c === void 0 ? void 0 : _c.packageStyle), (_d = b === null || b === void 0 ? void 0 : b.browserStyles) === null || _d === void 0 ? void 0 : _d.packageStyle),
                msgStyle: __assign(__assign({}, (_e = a === null || a === void 0 ? void 0 : a.browserStyles) === null || _e === void 0 ? void 0 : _e.msgStyle), (_f = b === null || b === void 0 ? void 0 : b.browserStyles) === null || _f === void 0 ? void 0 : _f.msgStyle)
            }
        };
    };
    exports.mergeLevelOption = mergeLevelOption;
    var mergeOption = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var defaultOption = {
            level: nuke_model_1.LogLevel.all,
            package: "[nuke-logger]",
            trace: getLevelOption("trace", style_1.getNodeStringSubstitution(nuke_model_1.Constants.NODE_STYLES.C_PURPLE), getBrowserLevelStyle({ color: nuke_model_1.Constants.BROWSER_STYLES.PURPLE })),
            debug: getLevelOption("debug", style_1.getNodeStringSubstitution(nuke_model_1.Constants.NODE_STYLES.C_GREEN), getBrowserLevelStyle({ color: nuke_model_1.Constants.BROWSER_STYLES.GREEN })),
            info: getLevelOption("info", style_1.getNodeStringSubstitution(nuke_model_1.Constants.NODE_STYLES.C_BLUE), getBrowserLevelStyle({ color: nuke_model_1.Constants.BROWSER_STYLES.BLUE })),
            warn: getLevelOption("warn", style_1.getNodeStringSubstitution(nuke_model_1.Constants.NODE_STYLES.C_YELLOW), getBrowserLevelStyle({ color: nuke_model_1.Constants.BROWSER_STYLES.ORANGE })),
            error: getLevelOption("error", style_1.getNodeStringSubstitution(nuke_model_1.Constants.NODE_STYLES.C_RED), getBrowserLevelStyle({ color: nuke_model_1.Constants.BROWSER_STYLES.RED })),
            fatal: getLevelOption("fatal", style_1.getNodeStringSubstitution(nuke_model_1.Constants.NODE_STYLES.C_BLACK, nuke_model_1.Constants.NODE_STYLES.BG_RED), getBrowserLevelStyle({ color: nuke_model_1.Constants.BROWSER_STYLES.WHITE, backgroundColor: nuke_model_1.Constants.BROWSER_STYLES.RED }))
        };
        if (!options || options.length === 0) {
            return defaultOption;
        }
        var mergedOption = options.reduce(function (pre, cur) {
            return {
                level: (cur === null || cur === void 0 ? void 0 : cur.level) || (pre === null || pre === void 0 ? void 0 : pre.level),
                package: (cur === null || cur === void 0 ? void 0 : cur.package) || (pre === null || pre === void 0 ? void 0 : pre.package),
                trace: mergeLevelOption(pre === null || pre === void 0 ? void 0 : pre.trace, cur === null || cur === void 0 ? void 0 : cur.trace),
                debug: mergeLevelOption(pre === null || pre === void 0 ? void 0 : pre.debug, cur === null || cur === void 0 ? void 0 : cur.debug),
                info: mergeLevelOption(pre === null || pre === void 0 ? void 0 : pre.info, cur === null || cur === void 0 ? void 0 : cur.info),
                warn: mergeLevelOption(pre === null || pre === void 0 ? void 0 : pre.warn, cur === null || cur === void 0 ? void 0 : cur.warn),
                error: mergeLevelOption(pre === null || pre === void 0 ? void 0 : pre.error, cur === null || cur === void 0 ? void 0 : cur.error),
                fatal: mergeLevelOption(pre === null || pre === void 0 ? void 0 : pre.fatal, cur === null || cur === void 0 ? void 0 : cur.fatal)
            };
        }, defaultOption) || defaultOption;
        return mergedOption;
    };
    exports.mergeOption = mergeOption;
});
define("util/convert", ["require", "exports", "model/index"], function (require, exports, nuke_model_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertInputToLogLevelEnum = void 0;
    var isValidNum = function (num) {
        switch (num) {
            case nuke_model_2.LogLevel.trace:
            case nuke_model_2.LogLevel.debug:
            case nuke_model_2.LogLevel.info:
            case nuke_model_2.LogLevel.warn:
            case nuke_model_2.LogLevel.error:
            case nuke_model_2.LogLevel.fatal:
                return true;
            case nuke_model_2.LogLevel.all:
            case nuke_model_2.LogLevel.off:
            default:
                return false;
        }
    };
    var isValidStr = function (str) {
        switch (str.toLowerCase()) {
            case nuke_model_2.LogLevel[nuke_model_2.LogLevel.trace]:
            case nuke_model_2.LogLevel[nuke_model_2.LogLevel.debug]:
            case nuke_model_2.LogLevel[nuke_model_2.LogLevel.info]:
            case nuke_model_2.LogLevel[nuke_model_2.LogLevel.warn]:
            case nuke_model_2.LogLevel[nuke_model_2.LogLevel.error]:
            case nuke_model_2.LogLevel[nuke_model_2.LogLevel.fatal]:
                return true;
            case nuke_model_2.LogLevel[nuke_model_2.LogLevel.off]:
            case nuke_model_2.LogLevel[nuke_model_2.LogLevel.all]:
            default:
                return false;
        }
    };
    var convertInputToLogLevelEnum = function (input) {
        if (typeof input === "string" && isValidStr(input)) {
            return input;
        }
        if (typeof input === "number" && isValidNum(input)) {
            return nuke_model_2.LogLevel[input];
        }
        return nuke_model_2.LogLevel[nuke_model_2.LogLevel.trace];
    };
    exports.convertInputToLogLevelEnum = convertInputToLogLevelEnum;
});
define("util/index", ["require", "exports", "util/style", "util/options", "util/convert"], function (require, exports, style_2, options_1, convert_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeLevelOption = exports.mergeOption = exports.getNodeStringSubstitution = exports.convertInputToLogLevelEnum = void 0;
    Object.defineProperty(exports, "getNodeStringSubstitution", { enumerable: true, get: function () { return style_2.getNodeStringSubstitution; } });
    Object.defineProperty(exports, "mergeLevelOption", { enumerable: true, get: function () { return options_1.mergeLevelOption; } });
    Object.defineProperty(exports, "mergeOption", { enumerable: true, get: function () { return options_1.mergeOption; } });
    Object.defineProperty(exports, "convertInputToLogLevelEnum", { enumerable: true, get: function () { return convert_1.convertInputToLogLevelEnum; } });
});
define("LoggerBase", ["require", "exports", "model/index", "util/index"], function (require, exports, nuke_model_3, nuke_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggerBase = void 0;
    var LoggerBase = /** @class */ (function () {
        function LoggerBase(options) {
            this.isNodeRunTime = true;
            this.option = nuke_util_1.mergeOption.apply(void 0, options || []);
            try {
                this.isNodeRunTime = window === void 0;
            }
            catch (error) {
                this.isNodeRunTime = true;
            }
        }
        LoggerBase.prototype.log = function (level, msg, option) {
            var _a, _b, _c, _d, _e, _f;
            var validLevel = nuke_util_1.convertInputToLogLevelEnum(level);
            var newOption = nuke_util_1.mergeLevelOption((_a = Object.getOwnPropertyDescriptor(this.option, validLevel)) === null || _a === void 0 ? void 0 : _a.value, option);
            var nativeMethod = this.getNativeLogMethod(validLevel);
            if (this.isNodeRunTime) {
                var style = ((_b = newOption.nodeStyles) === null || _b === void 0 ? void 0 : _b.levelStyle) + " " + ((_c = newOption.nodeStyles) === null || _c === void 0 ? void 0 : _c.packageStyle) + ((_d = newOption.nodeStyles) === null || _d === void 0 ? void 0 : _d.msgStyle) + ":";
                nativeMethod(style, newOption.displayValue, this.option.package, msg || "");
            }
            else {
                nativeMethod((_e = newOption.browserStyles) === null || _e === void 0 ? void 0 : _e.levelStyle, newOption.displayValue, (_f = newOption.browserStyles) === null || _f === void 0 ? void 0 : _f.packageStyle, this.option.package, msg || "");
            }
        };
        LoggerBase.prototype.getNativeLogMethod = function (level) {
            switch (level) {
                case nuke_model_3.LogLevel[nuke_model_3.LogLevel.trace]:
                case nuke_model_3.LogLevel[nuke_model_3.LogLevel.debug]:
                    return console.debug;
                case nuke_model_3.LogLevel[nuke_model_3.LogLevel.info]:
                    return console.info;
                case nuke_model_3.LogLevel[nuke_model_3.LogLevel.warn]:
                    return console.warn;
                case nuke_model_3.LogLevel[nuke_model_3.LogLevel.error]:
                    return console.error;
                case nuke_model_3.LogLevel[nuke_model_3.LogLevel.all]:
                case nuke_model_3.LogLevel[nuke_model_3.LogLevel.off]:
                default:
                    return console.log;
            }
        };
        return LoggerBase;
    }());
    exports.LoggerBase = LoggerBase;
});
define("Logger", ["require", "exports", "LoggerBase"], function (require, exports, LoggerBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Logger = void 0;
    var Logger = /** @class */ (function (_super) {
        __extends(Logger, _super);
        function Logger(options) {
            return _super.call(this, options) || this;
        }
        return Logger;
    }(LoggerBase_1.LoggerBase));
    exports.Logger = Logger;
});
define("index", ["require", "exports", "Logger", "LoggerBase"], function (require, exports, Logger_1, LoggerBase_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(Logger_1, exports);
    __exportStar(LoggerBase_2, exports);
});
var Logger = require("../Logger").Logger;
var main = function () {
    var logger = new Logger();
    logger.log(0, "Hello");
};
main();
