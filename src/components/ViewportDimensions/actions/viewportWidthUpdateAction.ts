import * as flux from 'bobflux';
import { IDimensionsState, dimensionsCursor } from '../state';

export const changeViewportWidth =
    flux.createAction(dimensionsCursor, (state: IDimensionsState, viewportWidth: number): IDimensionsState => {

        if (viewportWidth === state.viewportWidth)
            return state;

        return flux.shallowCopy(state, copy => { copy.viewportWidth = viewportWidth; });
    });
