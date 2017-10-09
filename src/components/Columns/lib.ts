import * as b from 'bobril';
import * as styles from './styles';
import { IData } from "./data";
export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode): void {

        let columns = ctx.data.columns.map((column) => {
            return b.styledDiv(
                column.content,
                !!column.grow ? styles.growingItem : styles.item
            )
        });

        me.children = b.styledDiv(
            columns,
            styles.mainContainer,
            ctx.data.addSpacing && styles.containerSpacing)
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData
}
