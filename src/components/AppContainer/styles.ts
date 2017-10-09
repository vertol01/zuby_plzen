import * as b from 'bobril';
import * as assets from '../../assets';

export let bodyStyle = b.styleDef({
    height: '100%',
    margin: 0
})

export let htmlStyle = b.styleDef({
    height: '100%',
    margin: 0,
    marginLeft: 'calc(100vw - 100%)',
})

export let contentContainerStyle = b.styleDef({
    height: '100%',
    margin: '0 auto'
})

export let appContainerStyle = b.styleDef({
    height: '100%',
    width: '100%',
    margin: '0 auto',
    display: 'table'
})

export let pageStyle = b.styleDef({
    height: '100%',
    width: '100%',
    display: 'table',
})

export let bottomBackgroundImageStyle = b.styleDef({
    backgroundImage: `url(${b.asset(assets.background_png)})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundAttachment: 'fixed'
})