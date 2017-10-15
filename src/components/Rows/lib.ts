import * as b from 'bobril';
import * as styles from './styles';
import { IData, Align } from "./data";

export { IData, Align } from "./data";

export const create = b.createVirtualComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode): void {
        let rows = ctx.data.rows.map((row) => {
            return b.styledDiv(
                row.content,
                !!row.grow ? styles.growingItem : styles.item,
                row.width && {width: `${row.width}%`  }
            );
        });

        me.children = b.styledDiv(
            rows,
            styles.mainContainer,
            getAlignment(ctx.data.alignment)
        )
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData
}

function getAlignment(alignment: Align) {
    switch(alignment){
        case Align.Center:
        return  styles.centerItems;
        case Align.Stretch:
        return  styles.stretchItems;
        case Align.Right:
        return  styles.rightAlignedItems;
    }
}