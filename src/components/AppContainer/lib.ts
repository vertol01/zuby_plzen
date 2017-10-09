import * as b from 'bobril';
import * as styles from './styles';
import { IData } from "./data";

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode): void {

        let content = {
            tag: 'div',
            children: b.styledDiv(
                ctx.data.content,
                { width: ctx.data.appContentWidth },
                styles.contentContainerStyle
            )
        };
        b.style(content,
            {
                maxWidth: ctx.data.appWidth,
                backgroundColor: ctx.data.appBackgroundcolor
            },
            styles.appContainerStyle,
            styles.bottomBackgroundImageStyle,
        );

        let page = b.style(
            {
                tag: 'div',
                children: content
            },
            styles.pageStyle,
            { backgroundColor: ctx.data.pageBackgroundcolor }
        );
        me.children = [
            {
                tag: 'style',
                children: 
                `html { background-color: ${ctx.data.pageBackgroundcolor} }`
            },
            page
        ];
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