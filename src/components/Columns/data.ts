import * as b from 'bobril';

export enum Alignment {
    Stretch
}

export interface IColumn {
    growRatio?: number,
    content: b.IBobrilChildren
    marginLeft?: string,
    marginRight?: string,
}

export interface IData {
    columns: IColumn[],
    alignment?: Alignment,
    addSpacing?: boolean
}