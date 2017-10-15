import * as b from 'bobril';

import * as AppFrame from '../components/AppFrame/lib';
import * as ViewportDimensions from '../components/ViewportDimensions/lib';
import { changeCurretnPage } from '../components/AppFrame/actions/pageChangedAction';

export const mainPage = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        let handler = me.data.activeRouteHandler();
        changeCurretnPage(handler.key);
        me.children = [
            ViewportDimensions.create(),
            AppFrame.create({ content: me.data.activeRouteHandler() })
        ]
    }
});
