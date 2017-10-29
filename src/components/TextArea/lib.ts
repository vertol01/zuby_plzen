import * as b from 'bobril';
import * as Rows from '../Rows/lib';
import *  as styles from './styles';
import { IData } from './data';
export { IData } from './data';

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {

        let rows = [];

        ctx.data.header && rows.push({ content: getHeader(ctx.data.header) });
        ctx.data.text && rows.push({ content: getBody(ctx.data.text) });
        me.children = Rows.create(
            {
                rows: rows,
                alignment: Rows.Align.Stretch
            }
        );
    },
});

interface IContext extends b.IBobrilCtx {
    data: IData;
}

function getHeader(text: string) {
    return b.style(
        {
            tag: 'div',
            children: text
        },
        styles.textHeader,

    );
}

function getBody(texts: string[]) {
    return b.style(
        {
            tag: 'div',
            children: texts.map((item) => {
                return {
                    tag: 'p',
                    children: item
                };
            })
        },
        styles.textBody
    );
}