import dapps_ethereum from './lmsdk-core-dapps-ethereum.js'

var LMPDapps = function LMPDapps() {
    this.ethereum = new dapps_ethereum();
}

module.exports = LMPDapps;