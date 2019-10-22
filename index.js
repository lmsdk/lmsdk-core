const url = require('url');
const Web3 = require('web3');

import lmsdk_eth_providers from '../lmsdk-eth-providers'
import lmsdk_core_navigator from './package/lmsdk-core-navigator'

var localURL = url.parse(location.href, true);

if ( localURL.query._lmt === "ethereum" ) {
    window.ethereum = new lmsdk_eth_providers.HttpProvider(localURL.query._lmv);
    window.web3 = new Web3(window.ethereum);
}

window.lmp = {
    navigator: new lmsdk_core_navigator(),
}
