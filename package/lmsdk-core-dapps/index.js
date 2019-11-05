import LMPUtils from '../lmsdk-core-utils'
import dapps_ethereum from './lmsdk-core-dapps-ethereum.js'

var LMPDapps = function LMPDapps() {
    this.ethereum = new dapps_ethereum();
}

LMPDapps.prototype.openDappWithHttp = function(url) {
    
    var buff = new Buffer(url)
    var schemasString = "limowallet://limowallet.org/dapps/open?type=http&url=" + buff.toString("base64");
    
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
            plus.bridge.exec("LMDapps", "openDappWithSchemas", [plus.bridge.callbackId(resolve, reject), schemasString])
        }
    });
}

module.exports = LMPDapps;