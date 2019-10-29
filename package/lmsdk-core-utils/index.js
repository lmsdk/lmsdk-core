const url = require('url');
const localURL = url.parse(location.href.replace('/#', ''), true);
var LMPUtils = {}

LMPUtils.inLmApp = localURL.query._lm ? true : false;
LMPUtils.lmt = localURL.query._lmt;
LMPUtils.lmv = localURL.query._lmv;

module.exports = LMPUtils;