export enum LineType {
  Regular,
  ListItem
}

export interface ILine {
  text: string;
  type: LineType;
}

export interface IParagraph {
  lines: ILine[];
  topMargin?: number;
}

export interface IData {
  header?: string;
  paragraphs?: IParagraph[];
}
