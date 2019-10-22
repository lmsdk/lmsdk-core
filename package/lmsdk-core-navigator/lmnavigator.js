const url = require('url');
var localURL = url.parse(location.href, true);

var lmNavigationBar = require('./lmnavigationbar.js');

var LMPNavigator = function LMPNavigator() {

    if (localURL.query._lm) {
        this._inApp = true
        this.navigationBar = new lmNavigationBar();
    }
    
}

LMPNavigator.prototype.types = {
    Push: "push",
    Pop: "pop",
    PopToRoot: "poptoroot",
    SetTabSelected:"settabselected"
}

LMPNavigator.prototype.push = function(url) {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMNavigation", "pushViewWithURL", [plus.bridge.callbackId(resolve, reject)], url)
        } else {
            location.href = url;
        }
    });
}

LMPNavigator.prototype.pop = function(url) {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMNavigation", "popView", [plus.bridge.callbackId(resolve, reject)], url)
        } else {
            location.href = url
        }
    });
}

LMPNavigator.prototype.popToRoot = function() {
    return new Promise(function(resolve, reject) {
        plus.bridge.exec("LMNavigation", "popToRoot", [plus.bridge.callbackId(resolve, reject)])
    });
}

LMPNavigator.prototype.setSelectedTabBarIndex = function(index) {

    return new Promise(function(resolve, reject) {
        plus.bridge.exec("LMNavigation", "setSelectedTabBarIndex", [plus.bridge.callbackId(resolve, reject)], index)
    });
}

LMPNavigator.prototype.selectedTarBarIndex = function() {

    return new Promise(function(resolve, reject) {
        plus.bridge.exec("LMNavigation", "selectedTarBarIndex", [plus.bridge.callbackId(resolve, reject)])
    });
}

module.exports = LMPNavigator;
