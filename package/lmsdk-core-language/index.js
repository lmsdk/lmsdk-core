const url = require('url');
var localURL = url.parse(location.href, true);

var LMPLanguage = function LMPLanguage() {
    if (localURL.query._lm) {
        this._inApp = true
    }
}

LMPLanguage.prototype.localeIdentifier = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMLanguage", "localeIdentifier", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

LMPLanguage.prototype.languageIdentifier = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMLanguage", "languageIdentifier", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

LMPLanguage.prototype.changeLocaleIdentifier = function(lang) {
    var _this = this;
    return new Promise(function(resolve, reject) {
       if (_this._inApp) {
           plus.bridge.exec("LMLanguage", "changeLanguageIdentifier", [plus.bridge.callbackId(resolve, reject), lang])
       } 
    })
}

module.exports = LMPLanguage;