export enum LineType {
  Regular,
  ListItem
}

export enum TextAlign {
  Center,
  Right
}

export interface ILine {
  text: string;
  type: LineType;
}

export interface IParagraph {
  lines: ILine[];
  textAlign?: TextAlign;
}

export interface IHeader {
  text: string;
  underline?: boolean;
}

export interface IData {
  header?: IHeader | string;
  paragraphs?: IParagraph[];
}
