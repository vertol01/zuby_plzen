import * as b from 'bobril';

export let mainContainer = b.styleDef(
    {
        display: 'flex',
        flexDirection: 'column',

        flex: '1 1 100%',
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


export let centerItems = b.styleDef(
    {
        alignItems: 'center'
    }
)

export let stretchItems = b.styleDef(
    {
        alignItems: 'stretch'
    }
)

