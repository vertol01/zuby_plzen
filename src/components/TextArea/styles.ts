import * as b from 'bobril';
import * as Fonts from '../Font/lib';
import * as Constants from '../../constants';
export const textHeader = b.styleDef(
    {
        fontFamily: Fonts.OpenSansCondensedFontFamily,
        fontWeight: Fonts.FontWeightBold,
        marginBottom: Constants.headerTextPadding,
        fontSize: Constants.headerTextSize
    }
);

export const textBody = b.styleDef(
    {
        fontFamily: Fonts.OpenSansCondensedFontFamily,
        fontWeight: Fonts.FontWeightLight,
        fontSize: Constants.textSize
    }
);