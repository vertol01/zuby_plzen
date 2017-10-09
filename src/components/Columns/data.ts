import * as b from 'bobril';

export interface IColumn{
    grow?: boolean,
    content: b.IBobrilChildren
}

export interface IData {
    columns: IColumn[],
    addSpacing?: boolean
}