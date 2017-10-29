import * as b from 'bobril';

import * as Rows from '../Rows/lib';
import *  as styles from './styles';
import { IData } from './data';

export { IData } from './data';

export const create = b.createVirtualComponent<IData>({
  render(ctx: IContext, me: b.IBobrilNode) {
    let rows = [];

    ctx.data.header && rows.push({ content: getHeader(ctx.data.header) });
    rows.push({ content: getList(ctx.data.items) });
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

function getList(texts: string[]) {

    return [
        // {
        //     tag: 'style',
        //     children:
        //         `li:before {
        //             content: "-";
        //             margin-left: -1em;
        //             width: 1em;
        //             display: inline-block;
        //         }`
        // },
        b.style(
            {
                tag: 'ul',
                children: texts.map((item) => {
                    return {
                        tag: 'li',
                        children: item
                    };
                })
            },
            styles.list
        )
    ];
}

// function parseText(text: string): b.IBobrilNode[] {
// //    string.indexOf(searchvalue, start)
// }