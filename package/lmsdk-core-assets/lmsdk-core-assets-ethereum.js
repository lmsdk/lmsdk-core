import LMPUtils from '../lmsdk-core-utils'

var LMPAssetsEthereum = function LMPAssetsEthereum() {

}

LMPAssetsEthereum.prototype.getAssetsList = function() {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMAssets", "getAssetsList", [plus.bridge.callbackId(resolve, reject), 'ethereum'])
        }
    });
}

LMPAssetsEthereum.prototype.getAssetForKey = function(key) {
    
    if ( typeof key == 'string' ) {
        
       return new Promise(function(resolve, reject) {
           if (LMPUtils.inLmApp) {
               plus.bridge.exec("LMAssets", "getAssetForKey", [plus.bridge.callbackId(resolve, reject), 'ethereum', key])
           }
       });
       
    } else if ( typeof key == 'object' ) {
        
        return new Promise(function(resolve, reject) {
            if (LMPUtils.inLmApp) {
                plus.bridge.exec("LMAssets", "getAssetInfoByKeyList", [plus.bridge.callbackId(resolve, reject), 'ethereum', key])
            }
        });
        
    }
}

LMPAssetsEthereum.prototype.searchAssetsNameWithKeyword = function(keyword, limit) {
    if (!limit) {
        limit = -1;
    }
    
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMAssets", "searchAssetsNameWithKeyword", [plus.bridge.callbackId(resolve, reject), 'ethereum', keyword, limit])
        }
    });
}

LMPAssetsEthereum.prototype.searchAssetsInfoWithKeyword = function(keyword, limit) {
    if (!limit) {
        limit = 20;
    }
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMAssets", "searchAssetsInfoWithKeyword", [plus.bridge.callbackId(resolve, reject), 'ethereum', keyword, limit])
        }
    });
    
}

module.exports = LMPAssetsEthereum;