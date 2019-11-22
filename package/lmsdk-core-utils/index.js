var LMPUtils = {}

if (window.lmdapp) {
    
    LMPUtils.inLmApp = true;
    LMPUtils.lmt = window.lmdapp.lmt;
    LMPUtils.lmv = window.lmdapp.lmv;

    LMPUtils.identityInfo = function() {
        return new Promise(function(resolve, reject) {
            plus.bridge.exec("LMUtils", "getCuurrentUserInfo", [plus.bridge.callbackId(resolve, reject)])
        });
    }
}

module.exports = LMPUtils;
