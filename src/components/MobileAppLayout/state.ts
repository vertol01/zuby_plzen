import * as flux from 'bobflux';



export interface IMobileAppState extends flux.IState {
    controlsShown: boolean
}

export const mobileAppCursor: flux.ICursor<IMobileAppState> = {
    key: 'mobileAppState'
};

export function createDefaultMobileAppState(): IMobileAppState {
    return {
        controlsShown: false
    };
}