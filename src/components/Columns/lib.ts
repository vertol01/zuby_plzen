import * as b from 'bobril';
import * as styles from './styles';
import { IData, Alignment, Spacing } from "./data";

export { IData, Alignment, Spacing } from "./data";

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode): void {
        let columns = ctx.data.columns.map((column) => {
            return b.styledDiv(
                column.content,
                styles.item,
                !!column.growRatio ?
                    { flex: `1 1 ${column.growRatio}%`, }
                    : styles.fixedSizeItem,
                column.marginLeft && { marginLeft: column.marginLeft },
                column.marginRight && { marginLeft: column.marginRight }
            )
        });

        me.children = b.styledDiv(
            columns,
            styles.mainContainer,
            ctx.data.spacing=== Spacing.Between && styles.containerSpacingBetween,
            ctx.data.spacing=== Spacing.Around && styles.containerSpacingAround,
            ctx.data.alignment === Alignment.Stretch && styles.stretchItems
        )
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData
}
