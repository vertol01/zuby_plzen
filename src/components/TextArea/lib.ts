import * as b from "bobril";
import * as Rows from "../Rows/lib";
import * as styles from "./styles";
import { IData, IParagraph } from "./data";
export { IData } from "./data";

export const create = b.createVirtualComponent<IData>({
  render(ctx: IContext, me: b.IBobrilNode) {
    let rows = [];

    ctx.data.header && rows.push({ content: getHeader(ctx.data.header) });
    ctx.data.paragraphs && rows.push({ content: getBody(ctx.data.paragraphs) });
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

function getBody(paragraphs: IParagraph[]) {
  return b.style(
    {
      tag: "div",
      children: paragraphs.map(item => {
        return b.style(
          {
            tag: "p",
            children: item.lines.map((line, index) => {
              //   if (index !== item.lines.length) {

              //   }
              return [line, { tag: "br" }];
            })
          },
          item.topMargin !== undefined && { marginTop: item.topMargin }
        );
      })
    },
    styles.textBody
  );
}
