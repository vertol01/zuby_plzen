import * as b from 'bobril';
import * as Fonts from '../Font/lib';
import * as Constants from '../../constants';


export const list = b.styleDef(
    {
        fontFamily: Fonts.OpenSansCondensedFontFamily,
        fontWeight: Fonts.FontWeightLight,
        fontSize: Constants.textSize,
        marginTop: 0,
        listStyleType: 'none'
    }
);