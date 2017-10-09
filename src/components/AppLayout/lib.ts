import * as b from 'bobril';
import * as styles from './styles';
import { IData } from "./data";
import * as Columns from '../Columns/lib';
import * as AppContainer from '../AppContainer/lib';
import * as Rows from "../Rows/lib";

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode): void {
        let columns = Columns.create({
            columns: [
                { content: ctx.data.leftColumn },
                { grow: true, content: ctx.data.centerColumn },
                { content: ctx.data.rightColumn }
            ]
        })

        let content = Rows.create(
            {
                rows: [
                    { content: ctx.data.appHeader },
                    { content: ctx.data.appControls },
                    { content: columns, grow: true }
                ],
                alignment: Rows.Align.Stretch
            }
        )
        me.children = AppContainer.create({
            width: ctx.data.width,
            content: b.styledDiv(content, styles.mainContainer)
        });
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData
}
