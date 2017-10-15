import * as b from 'bobril';
import * as styles from './styles';
import { IData } from './data';

const headerKey = 'header';
export const create = b.createVirtualComponent<IData>({
    init(ctx: IContext): void {
        ctx.width = 0;
    },

    render(ctx: IContext, me: b.IBobrilNode): void {
        me.children = b.style(
            <b.IBobrilNode>{
                tag: 'div',
                children: ctx.data.content,
                ref: [ctx, headerKey]
            },
            styles.headerStyle,
            ctx.width && { height: ctx.data.heightToWidthRatio * ctx.width },
            ctx.width && { fontSize: Math.max(20 * ctx.width / 700, 10) }
        );
    },

    postInitDom(ctx: IContext, _me: b.IBobrilCacheNode, _element: HTMLElement) {
        updateHeight(ctx)
    },

    postUpdateDom(ctx: IContext, _me: b.IBobrilCacheNode, _element: HTMLElement) {
        updateHeight(ctx);
    },
});

interface IContext extends b.IBobrilCtx {
    data: IData,
    width: number
}

function updateHeight(ctx: IContext) {
    let node = <HTMLElement>b.getDomNode(ctx.refs![headerKey]!);
    if (node.getBoundingClientRect().width != ctx.width) {
        ctx.width = node.getBoundingClientRect().width;
        b.invalidate(ctx);
    }
}