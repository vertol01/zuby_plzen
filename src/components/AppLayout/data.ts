import * as b from 'bobril';

export interface IData {
    appHeader: b.IBobrilNode,
    appControls: b.IBobrilNode,
    leftColumn: b.IBobrilNode,
    rightColumn: b.IBobrilNode,
    centerColumn: b.IBobrilNode,
    appContentWidth: number
    appWidth: number,
    appBackgroundcolor: string,
    pageBackgroundcolor: string
}