/// submodules
import core_navigator from './package/lmsdk-core-navigator'
import core_language from './package/lmsdk-core-language'
import core_theme from './package/lmsdk-core-theme'
import core_assets from './package/lmsdk-core-assets'

window.lmp = {
    navigator: new core_navigator(),
    language: new core_language(),
    theme: new core_theme(),
    assets: new core_assets()
}
