import * as flux from 'bobflux';
import { IPageState, pageCursor } from '../state';

export const changeCurretnPage = 
    flux.createAction(pageCursor, (state: IPageState, pageName: string): IPageState => {

        if (pageName === state.currentPage)
            return state;

        return flux.shallowCopy(state, copy => { copy.currentPage = pageName; });
    });
