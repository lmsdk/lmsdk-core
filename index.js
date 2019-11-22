/// submodules
import core_navigator from './package/lmsdk-core-navigator'
import core_language from './package/lmsdk-core-language'
import core_theme from './package/lmsdk-core-theme'
import core_assets from './package/lmsdk-core-assets'
import core_dapps from './package/lmsdk-core-dapps'
import core_utils from './package/lmsdk-core-utils'

window.lmp = {
    navigator: new core_navigator(),
    language: new core_language(),
    theme: new core_theme(),
    assets: new core_assets(),
    dapps: new core_dapps(),
    utils: core_utils
}
