import LMPUtils from '../lmsdk-core-utils'

var LMPNavigationBar = function LMPNavigationBar() {

}

LMPNavigationBar.prototype.setNavigationBarStyle = function(options) {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMNavigator", "setNavigationBarStyle", [plus.bridge.callbackId(resolve, reject), location.href, options])
        }
    });
}

module.exports = LMPNavigationBar;
