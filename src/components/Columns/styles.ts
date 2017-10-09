import * as b from 'bobril';

export let mainContainer = b.styleDef(
    {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 100%'
    }
)

export let item = b.styleDef(
    {
        display: 'flex',
        flex: '0 0 auto',
    }
)

export let growingItem = b.styleDef(
    {
        display: 'flex',
        flex: '1 1 auto',
    }
)

export let containerSpacing = b.styleDef(
    {
        justifyContent: 'space-between' 
    }
)
