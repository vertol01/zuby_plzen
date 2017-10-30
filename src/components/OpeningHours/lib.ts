import * as b from 'bobril';
//import * as styles from './styles';
import * as Rows from '../Rows/lib';
import * as LField from '../LField/lib';
import * as Constants from '../../constants';
import * as Fonts from '../Font/lib';

export const create = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = Rows.create(

            {
                alignment: Rows.Align.Stretch,
                rows: [
                    {
                        content: LField.create(
                            {
                                leftValue: getTextField('PO', Constants.leftColumnTextSize, Constants.lineHeight, true),
                                rightValue: getTextField('8-12', Constants.leftColumnTextSize, Constants.lineHeight, false),
                                width: Constants.lFieldWidth,
                                align: LField.IAlignment.SpaceBetween
                            }
                        )
                    },
                    {
                        content: LField.create(
                            {
                                leftValue: getTextField('ÚT', Constants.leftColumnTextSize, Constants.lineHeight, true),
                                rightValue: getTextField('8-12', Constants.leftColumnTextSize, Constants.lineHeight, false),
                                width: Constants.lFieldWidth,
                                align: LField.IAlignment.SpaceBetween
                            }
                        )
                    },
                    {
                        content: LField.create(
                            {
                                leftValue: getTextField('ST', Constants.leftColumnTextSize, Constants.lineHeight, true),
                                rightValue: getTextField('8-15', Constants.leftColumnTextSize, Constants.lineHeight, false),
                                width: Constants.lFieldWidth,
                                align: LField.IAlignment.SpaceBetween
                            }
                        )
                    },
                    {
                        content: LField.create(
                            {
                                leftValue: getTextField('ČT', Constants.leftColumnTextSize, Constants.lineHeight, true),
                                rightValue: getTextField('12-16', Constants.leftColumnTextSize, Constants.lineHeight, false),
                                width: Constants.lFieldWidth,
                                align: LField.IAlignment.SpaceBetween
                            }
                        )
                    },
                    {
                        content: LField.create(
                            {
                                leftValue: getTextField('PÁ', Constants.leftColumnTextSize, Constants.lineHeight, true),
                                rightValue: getTextField('8-12', Constants.leftColumnTextSize, Constants.lineHeight, false),
                                width: Constants.lFieldWidth,
                                align: LField.IAlignment.SpaceBetween
                            }
                        )
                    }
                ]
            }
        );
    }
});

function getTextField(value: string, textSize: number, lineHeight: number, isBold: boolean) {
    return b.style(
        {
            tag: 'div',
            children: value
        },
        { fontSize: textSize },
        { fontFamily: Fonts.OpenSansCondensedFontFamily },
        { fontWeight: isBold ? Fonts.FontWeightBold : Fonts.FontWeightLight },
        { lineHeight: lineHeight },
        { whiteSpace: 'nowrap' }
    );
}

