// <b.IBobrilNode>{
//     tag: 'link',
//     attrs:
//     {
//         href: "https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300i,700",
//         rel: "stylesheet"
//     }
// }

import * as b from 'bobril';
import * as assets from '../../assets';

export { FontWeightLight, FontWeightBold, FontStyleIatlic, OpenSansCondensedFontFamily } from './constants';
export const create = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        me.children = [
            {
                tag: 'style',
                children:
                `@font-face {
                font-family: 'Open Sans Condensed';
                font-style: normal;
                font-weight: 300;
                src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(${b.asset(assets.OpenSans_CondLight_woff2)}) format('woff2'),  url(${b.asset(assets.OpenSans_CondLight_woff)}) format('woff');
                }
                @font-face {
                    font-family: 'Open Sans Condensed';
                    font-style: normal;
                    font-weight: 700;
                    src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(${b.asset(assets.OpenSans_CondBold_woff2)}) format('woff2'), url(${b.asset(assets.OpenSans_CondBold_woff)}) format('woff');
                }`
            }
        ];
    }
});
