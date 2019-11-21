import LMPUtils from '../lmsdk-core-utils'
import dapps_ethereum from './lmsdk-core-dapps-ethereum.js'

var LMPDapps = function LMPDapps() {
    this.ethereum = new dapps_ethereum();
}

LMPDapps.prototype.openDappWithDappKey = function(key) {
    return new Promise(function(resolve, reject) {
        if (LMPUtils.inLmApp) {
			var list = JSON.parse(localStorage.getItem("recentlyUsed"));
			if(list === null){list = []}
			for (let k in list) {
				if(list[k] === key){list.splice(k,1)}
			}
			list.unshift(key)
			if(list.length>=6){
				list.pop()
			}
			localStorage.setItem("recentlyUsed",JSON.stringify(list));
			
            plus.bridge.exec("LMDapps", "openDappWithSchemas", [plus.bridge.callbackId(resolve, reject), "limowallet://limowallet.org/dapps/open?type=git&url=" + key])
        }
    });
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