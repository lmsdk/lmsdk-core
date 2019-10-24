const url = require('url');
var localURL = url.parse(location.href, true);

var LMPNavigationBar = function LMPNavigationBar() {
    if (localURL.query._lm) {
        this._inApp = true
    }
}

LMPNavigationBar.prototype.setNavigationBarStyle = function(options) {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMNavigator", "setNavigationBarStyle", [plus.bridge.callbackId(resolve, reject), location.href, options])
        }
    });
}

module.exports = LMPNavigationBar;
