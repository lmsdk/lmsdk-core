import LMPUtils from '../lmsdk-core-utils'

var LMPTheme = function LMPTheme() {

}

LMPTheme.prototype.getThemeKey = function() {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMTheme", "getThemeKey", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

LMPTheme.prototype.getThemeObject = function() {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMTheme", "getThemeObject", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

LMPTheme.prototype.setThemeObject = function(themes) {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMTheme", "setThemeObject", [plus.bridge.callbackId(resolve, reject), themes])
        }
    });
}

LMPTheme.prototype.setThemeFileWithURL = function(path) {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMTheme", "setThemeFileWithURL", [plus.bridge.callbackId(resolve, reject), location.href, path])
        }
    });
}

LMPTheme.prototype.resolveDefaultThemes = function() {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMTheme", "resolveDefaultThemes", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

module.exports = LMPTheme;