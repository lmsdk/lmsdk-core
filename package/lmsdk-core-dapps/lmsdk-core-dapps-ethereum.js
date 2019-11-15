import LMPUtils from '../lmsdk-core-utils'

var LMPDappsEthereum = function LMPDappsEthereum() {

}

LMPDappsEthereum.prototype.getDappList = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMDapps", "getDappList", [plus.bridge.callbackId(resolve, reject), 'ethereum'])
        }
    });
}

LMPDappsEthereum.prototype.getDappForKey = function(dappkey) {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMDapps", "getDappForKey", [plus.bridge.callbackId(resolve, reject), 'ethereum', dappkey])
        }
    });
}

LMPDappsEthereum.prototype.searchDappsNameWithKeyword = function(keyword, limit) {
    if (!limit) {
        limit = -1;
    }
    
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMDapps", "searchDappsNameWithKeyword", [plus.bridge.callbackId(resolve, reject), 'ethereum', keyword, limit])
        }
    });
}

LMPDappsEthereum.prototype.searchDappsInfoWithKeyword = function(keyword, limit) {
    if (!limit) {
        limit = 20;
    }
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMDapps", "searchDappsInfoWithKeyword", [plus.bridge.callbackId(resolve, reject), 'ethereum', keyword, limit])
        }
    });
}

LMPDappsEthereum.prototype.recommedDappsList = function() {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMDapps", "recommedDappsList", [plus.bridge.callbackId(resolve, reject), 'ethereum'])
        }
    });
}

module.exports = LMPDappsEthereum;