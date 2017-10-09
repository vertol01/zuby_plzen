import * as flux from 'bobflux';


export interface IPageState extends flux.IState {
   currentPage: string
}

export const pageCursor: flux.ICursor<IPageState> = {
    key: ''
};

export function createDefaultPageState(): IPageState {
    return {
        currentPage: ''
    };
}