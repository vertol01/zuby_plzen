import * as b from 'bobril';
import { IData } from './data';
import * as Fonts from '../Font/lib';
import * as Color from '../../colors';

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = {
            tag: 'button',
            children: ctx.data.value
        };
        b.style(
            me.children,
            {
                height: ctx.data.height,
                width: ctx.data.width,
                backgroundColor: ctx.data.color,
                border: 'none',
                fontFamily: Fonts.OpenSansCondensedFontFamily,
                fontWeight: Fonts.FontWeightLight,
                fontSize: ctx.data.textSize,
                outline: 'none',
                color: ctx.data.textColor || Color.black
            });
    },

    onClick(_ctx: IContext, _event: b.IBobrilMouseEvent) {
        _ctx.data.onClick();
        return true;
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData;
}
