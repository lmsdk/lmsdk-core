import asset_ethereum from './lmsdk-core-assets-ethereum.js'

var LMPAssets = function LMPAssets() {
    this.ethereum = new asset_ethereum();
}

module.exports = LMPAssets;