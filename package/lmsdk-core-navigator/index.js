var LMPNavigator = function LMPNavigator() {

}

LMPNavigator.prototype.types = {
    Push: "PUSH",
    Pop: "POP",
    PopToRoot: "POPTOROOT",
    SetTabSelected:"SETTABLESELECTED"
}

LMPNavigator.prototype.push = function(url) {

    return new Promise(function(resolve, reject) {
        var success = function() {
            resolve();
        }

        var fail = function() {
            reject();
        }

        plus.bridge.exec("LMNavigation", "pushViewWithURL", [plus.bridge.callbackId(success, fail)], url])
    });
}

LMPNavigator.prototype.pop = function(url) {

    return new Promise(function(resolve, reject) {
        var success = function() {
            resolve();
        }

        var fail = function() {
            reject();
        }

        plus.bridge.exec("LMNavigation", "popView", [plus.bridge.callbackId(success, fail)], url)
    });
}

LMPNavigator.prototype.popToRoot = function() {

    return new Promise(function(resolve, reject) {
        var success = function() {
            resolve();
        }

        var fail = function() {
            reject();
        }

        plus.bridge.exec("LMNavigation", "popToRoot", [plus.bridge.callbackId(success, fail)])
    });
}

LMPNavigator.prototype.setSelectedTabBarIndex = function(index) {

    return new Promise(function(resolve, reject) {
        var success = function() {
            resolve();
        }

        var fail = function() {
            reject();
        }

        plus.bridge.exec("LMNavigation", "setSelectedTabBarIndex", [plus.bridge.callbackId(success, fail)], index)
    });
}

LMPNavigator.prototype.selectedTarBarIndex = function() {

    return new Promise(function(resolve, reject) {
        var success = function() {
            resolve();
        }

        var fail = function() {
            reject();
        }

        plus.bridge.exec("LMNavigation", "selectedTarBarIndex", [plus.bridge.callbackId(success, fail)])
    });
}

module.exports = LMPNavigator;
