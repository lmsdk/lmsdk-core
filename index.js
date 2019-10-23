const url = require('url');
const Web3 = require('web3');

import eth_providers from '../lmsdk-eth-providers'
import core_navigator from './package/lmsdk-core-navigator'
import core_language from './package/lmsdk-core-language'

var localURL = url.parse(location.href, true);

if ( localURL.query._lmt === "ethereum" ) {
    window.ethereum = new eth_providers.HttpProvider(localURL.query._lmv);
    window.web3 = new Web3(window.ethereum);
}

window.lmp = {
    navigator: new core_navigator(),
    language: new core_language()
}
