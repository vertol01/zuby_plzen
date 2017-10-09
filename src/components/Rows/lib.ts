import * as b from 'bobril';
import * as styles from './styles';
import { IData, Align } from "./data";

export { IData, Align } from "./data";

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode): void {
        let rows = ctx.data.rows.map((row) => {
            return b.styledDiv(
                row.content,
                !!row.grow ? styles.growingItem : styles.item
            );
        });

        me.children = b.styledDiv(
            rows,
            styles.mainContainer,
            ctx.data.alignment === Align.Center? styles.centerItems : styles.stretchItems
        )
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData
}
