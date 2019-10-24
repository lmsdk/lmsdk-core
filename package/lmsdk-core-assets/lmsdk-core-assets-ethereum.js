const url = require('url');
var localURL = url.parse(location.href, true);

var LMPAssetsEthereum = function LMPAssetsEthereum() {
    if (localURL.query._lm) {
        this._inApp = true
    }
}

LMPAssetsEthereum.prototype.getAssetsList = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMAssets", "getAssetsList", [plus.bridge.callbackId(resolve, reject), 'ethereum'])
        }
    });
}

LMPAssetsEthereum.prototype.getAssetForKey = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMAssets", "getAssetForKey", [plus.bridge.callbackId(resolve, reject), 'ethereum'])
        }
    });
}

LMPAssetsEthereum.prototype.searchAssetsNameWithKeyword = function(keyword, limit) {
    
    var _this = this;
    
    if (!limit) {
        limit = -1;
    }
    
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMAssets", "searchAssetsNameWithKeyword", [plus.bridge.callbackId(resolve, reject), 'ethereum', keyword, limit])
        }
    });
}

LMPAssetsEthereum.prototype.searchAssetsInfoWithKeyword = function(keyword, limit) {
    
    var _this = this;
    if (!limit) {
        limit = 20;
    }
    return new Promise(function(resolve, reject) {
        if (_this._inApp) {
            plus.bridge.exec("LMAssets", "searchAssetsInfoWithKeyword", [plus.bridge.callbackId(resolve, reject), 'ethereum', keyword, limit])
        }
    });
    
}
module.exports = LMPAssetsEthereum;