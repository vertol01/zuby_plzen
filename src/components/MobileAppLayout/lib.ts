import * as b from 'bobril';
import * as styles from './styles';
import * as flux from 'bobflux';
import * as Columns from '../Columns/lib';
import * as Rows from '../Rows/lib';
import { IData } from "./data";
import * as DynamicHeader from '../DynamicHeader/lib';
import * as Button from '../Button/lib';
import { showMobileAppControls } from './action/showControlsAction';
import * as state from './state';
import * as assets from '../../assets';
import * as Color from '../../colors';
export { IData } from "./data";

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode): void {
        let mobileAppState = flux.getState(state.mobileAppCursor);


        me.children = Columns.create({

            alignment: Columns.Alignment.Stretch,
            columns: [
                {
                    growRatio: 10,
                    content: {}
                },
                {
                    growRatio: 80,
                    content: mobileAppState.controlsShown ? getControlsContent(ctx) : getContent(ctx)
                },
                {
                    growRatio: 10,
                    content: b.styledDiv(

                        Button.create({
                            width: 20,
                            height: 20,
                            backgroundImage: mobileAppState.controlsShown ? styles.closeControlsButtonBackground : styles.openControlsButtonBackground,
                            color: Color.backgroundColor,
                            onClick: () => { showMobileAppControls(!mobileAppState.controlsShown); }
                        }),

                        {
                            flex: '1 1 100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: 30
                        }
                    )
                }
            ]
        })
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData
}

function getControlsContent(ctx: IContext) {
    return Rows.create({
        alignment: Rows.Align.Stretch,
        rows: [
            {
                content: ctx.data.header,
            },
            {
                content: ctx.data.controls,
                grow: true
            }
        ]
    });
}

function getContent(ctx: IContext) {
    return Rows.create({
        alignment: Rows.Align.Stretch,
        rows: [
            {
                content: ctx.data.header,
            },
            {
                content: ctx.data.info,
            },
            {
                content: ctx.data.content,
                grow: true
            }
        ]
    });
}