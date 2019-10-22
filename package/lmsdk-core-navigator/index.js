var LMPNavigator = function LMPNavigator() {

}

LMPNavigator.prototype.types = {
    Push: "push",
    Pop: "pop",
    PopToRoot: "poptoroot",
    SetTabSelected:"settabselected"
}

LMPNavigator.prototype.push = function(url) {
    return new Promise(function(resolve, reject) {
        plus.bridge.exec("LMNavigation", "pushViewWithURL", [plus.bridge.callbackId(resolve, reject)], url)
    });
}

LMPNavigator.prototype.pop = function(url) {
    return new Promise(function(resolve, reject) {
        plus.bridge.exec("LMNavigation", "popView", [plus.bridge.callbackId(resolve, reject)], url)
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
