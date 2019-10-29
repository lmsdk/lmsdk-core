var LMPLanguage = function LMPLanguage() {

}

LMPLanguage.prototype.localeIdentifier = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMLanguage", "localeIdentifier", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

LMPLanguage.prototype.languageIdentifier = function() {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMLanguage", "languageIdentifier", [plus.bridge.callbackId(resolve, reject)])
        }
    });
}

LMPLanguage.prototype.changeLocaleIdentifier = function(lang) {
    return new Promise(function(resolve, reject) {
       if (LMPUtils.inLmApp) {
           plus.bridge.exec("LMLanguage", "changeLanguageIdentifier", [plus.bridge.callbackId(resolve, reject), lang])
       } 
    })
}

module.exports = LMPLanguage;