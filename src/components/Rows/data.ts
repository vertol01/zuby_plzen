import * as b from 'bobril';

export enum Align {
    Center,
    Stretch
}
export interface IRow{
    grow?: boolean,
    content: b.IBobrilChildren
}

export interface IData {
    rows: IRow[],
    alignment: Align
}

