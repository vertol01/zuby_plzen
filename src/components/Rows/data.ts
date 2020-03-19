import * as b from 'bobril';

export enum Align {
    Center,
    Stretch,
    Right
}
export interface IRow {
    grow?: boolean;
    content: b.IBobrilChildren;
    width?: number; 
}

export interface IData {
    rows: IRow[];
    alignment: Align;
}
