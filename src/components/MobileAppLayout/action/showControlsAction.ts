import * as flux from 'bobflux';
import { IMobileAppState, mobileAppCursor } from '../state';

export const showMobileAppControls =
    flux.createAction(mobileAppCursor, (state: IMobileAppState, showControls: boolean): IMobileAppState => {

        if (showControls === state.controlsShown)
            return state;

        return flux.shallowCopy(state, copy => { copy.controlsShown = showControls; });
    });
