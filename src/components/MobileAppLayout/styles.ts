import * as b from 'bobril';
import * as assets from '../../assets';

export const openControlsButtonBackground = b.styleDef(
    {
        background: `url(${b.asset(assets.button1_svg)}) no-repeat center/contain`
    }
);

export const closeControlsButtonBackground = b.styleDef(
    {
        background: `url(${b.asset(assets.button2_svg)}) no-repeat center/contain`
    }
);