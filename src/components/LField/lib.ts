import * as b from 'bobril';
import { IData } from "./data";
export { IData, IAlignment } from "./data";

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = {
            tag: 'div',
            children: [
                ctx.data.leftValue,
                ctx.data.rightValue
            ]
        };
        b.style(
            me.children,
            { width: ctx.data.width },
            { justifyContent: 'space-between' },
            { display: 'flex' }
        )
    },
});

interface IContext extends b.IBobrilCtx {
    data: IData
}
