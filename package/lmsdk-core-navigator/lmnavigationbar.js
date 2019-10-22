const url = require('url');
var localURL = url.parse(location.href, true);

var LMPNavigationBar = function LMPNavigationBar() {
    if (localURL.query._lm) {
        this._inApp = true
    }
}

LMPNavigationBar.prototype.setNavigationBarStyle = function(url, style, background, text, left, right ) {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMNavigation", "setNavigationBarStyle", [plus.bridge.callbackId(resolve, reject)], url, style, backgroud, text, left, right)
        }
    });
}

module.exports = LMPNavigationBar;
