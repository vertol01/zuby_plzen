import * as b from 'bobril';
import { IData } from './data';
import * as Color from '../../colors';
import * as styles from './styles';
import * as assets from '../../assets';

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
                color: ctx.data.textColor || Color.black,
                fontSize: ctx.data.textSize
            },
            ctx.data.backgroundImage && ctx.data.backgroundImage,
            styles.buttonStyle,
            styles.buttonTextStyle,
        );
    },

    onClick(_ctx: IContext, _event: b.IBobrilMouseEvent) {
        _ctx.data.onClick();
        return true;
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData;
}
