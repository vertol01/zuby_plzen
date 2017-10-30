import * as b from "bobril";
import * as Rows from "../Rows/lib";
import * as styles from "./styles";
import { IData, IParagraph, ILine, LineType } from "./data";
export { IData, IParagraph, ILine, LineType } from "./data";

export const create = b.createVirtualComponent<IData>({
  render(ctx: IContext, me: b.IBobrilNode) {
    let rows = [];

    ctx.data.header && rows.push({ content: getHeader(ctx.data.header) });
    ctx.data.paragraphs && rows.push({ content: getBody(ctx.data.paragraphs, ctx.data.header !== undefined) });
    me.children = Rows.create({
      rows: rows,
      alignment: Rows.Align.Stretch
    });
  }
});

interface IContext extends b.IBobrilCtx {
  data: IData;
}

function getHeader(text: string) {
  return b.style(
    {
      tag: "div",
      children: text
    },
    styles.textHeader
  );
}

function getBody(paragraphs: IParagraph[], containsHeader: boolean) {
  let first = true;
  return b.style(
    {
      tag: "div",
      children: paragraphs.map(item => {
        let paragraph = b.style(
          {
            tag: "p",
            children: getLines(item.lines)
          },
          first && { marginTop: 0 },
        );
        first = false;
        return paragraph;
      })
    },
    styles.textBody
  );
}

function getLines(lines: ILine[]) {
  let result: b.IBobrilNode[] = [];

  let listLines: string[] = [];
  for (let i = 0; i < lines.length; ++i) {
    let line = lines[i];
    if (line.type == LineType.ListItem) {
      listLines.push(line.text);
    }
    else {
      if (listLines.length !== 0) {
        result.push(writeList(listLines));
      }
      listLines = [];
      result.push([styleText(line.text), { tag: 'br' }]);
    }
  }
  if (listLines.length !== 0) {
    result.push(writeList(listLines));
  }
  return result;
}

function writeList(list: string[]) {
  return b.style({

    tag: 'ul',
    children: list.map((item) => {
      return {
        tag: 'li',
        children: styleText(item)
      };
    })
  },
    { marginTop: 0, marginBottom: 0 }
  );
}

function styleText(text: string) {
  let result: b.IBobrilChildArray = [];

  let currentIndex = 0;
  let start;
  while (currentIndex != -1) {
    start = text.indexOf('<b>', currentIndex);

    addPlainString(text, result, currentIndex, start);
    if (start === -1) {
      currentIndex = -1;
      continue;
    }
    start += 3;
    let end = text.indexOf('</b>', start);

    if (end === -1) {
      addPlainString(text, result, start, end);
      currentIndex = -1;
      continue;
    }
    currentIndex = end + 4;
    result.push({
      tag: 'b',
      children: text.substring(start, end)
    });
  }
  return result;
}

function addPlainString(text: string, result: b.IBobrilChildArray, start: number, end: number) {
  if (start != end) {
    result.push(text.substring(start, end !== -1 ? end : undefined));
  }
}



