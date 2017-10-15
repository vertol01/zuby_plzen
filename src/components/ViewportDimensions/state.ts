import * as flux from 'bobflux';


export interface IDimensionsState extends flux.IState {
    viewportWidth?: number
}

export const dimensionsCursor: flux.ICursor<IDimensionsState> = {
    key: 'dimensionsState'
};

export function createDefaultDimensionsState(): IDimensionsState {
    return {
        viewportWidth: undefined
    };
}