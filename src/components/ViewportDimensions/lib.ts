import * as b from 'bobril'
import {changeViewportWidth} from './actions/viewportWidthUpdateAction';

export const create = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
      
    },

    postInitDom(_ctx: b.IBobrilCtx, _me: b.IBobrilCacheNode, _element: HTMLElement) {
        setViewportWidth()
    },

    postUpdateDom(_ctx: b.IBobrilCtx, _me: b.IBobrilCacheNode, _element: HTMLElement) {
        setViewportWidth()
    },
});

function setViewportWidth() {
    changeViewportWidth(window.innerWidth);
}