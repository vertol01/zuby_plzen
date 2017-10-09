import * as b from 'bobril';
import * as styles from './styles';
import { IData } from "./data";
import * as assets from '../../assets';

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode): void {

        me.children = {
            tag: 'div',
            children: b.styledDiv(
                ctx.data.content,
                styles.mainContentContainerStyle,
                { width: ctx.data.width },
                { height: '100%'},
                {
                    backgroundImage: `url(${b.asset(assets.background_png)})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    backgroundAttachment: 'fixed'
                }
            )
        };
        b.style(me.children, {width: '100%', height:'100%', display: 'table' });
    },
    postInitDom(_ctx: b.IBobrilCtx, _me: b.IBobrilCacheNode, _element: HTMLElement) {
        styleBody();
    },
    postUpdateDom(_ctx: b.IBobrilCtx, _me: b.IBobrilCacheNode, _element: HTMLElement) {
        styleBody();
    },
});

interface IContext extends b.IBobrilCtx {
    data: IData
}

function styleBody() {
    document.body.className = styles.bodyStyle;
    document.documentElement.className = styles.htmlStyle;
    document.documentElement.lang = 'cs';
}