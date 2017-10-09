import * as b from 'bobril';

export enum IAlignment {
    SpaceBetween
}

export interface IData{
    leftValue: b.IBobrilNode,
    rightValue: b.IBobrilNode,
    width: number,
    align: IAlignment
}