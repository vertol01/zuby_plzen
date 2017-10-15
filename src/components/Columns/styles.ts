import * as b from 'bobril';

export let mainContainer = b.styleDef(
    {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 100%',
    }
)

export let item = b.styleDef(
    {
        display: 'flex',
    }
)

export let fixedSizeItem = b.styleDef(
    {
        flex: '0 0 auto',
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

export let containerSpacing = b.styleDef(
    {
        justifyContent: 'space-between' 
    }
)
