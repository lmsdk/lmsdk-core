var LMPUtils = {}

if (window.lmdapp) {
    LMPUtils.inLmApp = true;
    LMPUtils.lmt = window.lmdapp.lmt;
    LMPUtils.lmv = window.lmdapp.lmv;    
}

module.exports = LMPUtils;