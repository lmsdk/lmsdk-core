const url = require('url');
var localURL = url.parse(location.href, true);

var LMPTheme = function LMPTheme() {
    if (localURL.query._lm) {
        this._inApp = true
    }
}

LMPTheme.prototype.getThemeKey = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMTheme", "getThemeKey", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

LMPTheme.prototype.getThemeObject = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMTheme", "getThemeObject", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

LMPTheme.prototype.setThemeObject = function(themes) {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMTheme", "setThemeObject", [plus.bridge.callbackId(resolve, reject), themes])
        }
    });
}

LMPTheme.prototype.setThemeFileWithURL = function(path) {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMTheme", "setThemeFileWithURL", [plus.bridge.callbackId(resolve, reject), location.href, path])
        }
    });
}

LMPTheme.prototype.resolveDefaultThemes = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMTheme", "resolveDefaultThemes", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

module.exports = LMPTheme;