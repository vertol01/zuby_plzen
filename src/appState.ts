import * as pageState from "./components/AppFrame/state"
import * as dimensionsState from "./components/ViewportDimensions/state"
import * as mobileAppState from './components/MobileAppLayout/state';
export function createDefaultState() {
    return {
        pageState: pageState.createDefaultPageState(),
        dimensionsState: dimensionsState.createDefaultDimensionsState(),
        mobileAppState: mobileAppState.createDefaultMobileAppState()
    }
}
