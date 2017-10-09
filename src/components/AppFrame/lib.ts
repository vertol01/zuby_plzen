import * as b from 'bobril';
import * as AppLayout from '../AppLayout/lib';
import * as Rows from '../Rows/lib';
import * as Columns from '../Columns/lib';
import * as Button from '../Button/lib';
import * as Constants from '../../constants';
import * as Color from '../../colors';
import * as Fonts from '../Font/lib';
import * as LField from '../LField/lib';
import * as assets from '../../assets';
import { IData } from './data';
import { pageCursor, IPageState } from './state';
import * as flux from 'bobflux';

export const create = b.createVirtualComponent<IData>({
    render(_ctx: IContext, me: b.IBobrilNode): void {

        const state = flux.getState(pageCursor);
        let app = AppLayout.create(
            {
                width: Constants.appWidth,
                appHeader: getAppHeader(),
                appControls: getControls(state.currentPage),
                leftColumn: getLeftColumn(),
                rightColumn: getRightColumn(),
                centerColumn: _ctx.data.content
            });

        me.children = [
            Fonts.create(),
            app
        ];
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData;
}

function getAppHeader() {
    return b.style(
        {
            tag: 'div',
            children: 'MDDr. Jana Bystřická'
        },
        {
            height: Constants.headerHeight,
            background: `url(${b.asset(assets.logo_svg)}) no-repeat top center/contain, 
            url(${b.asset(assets.zuby_png)}) no-repeat center/contain`,
            marginBottom: Constants.headerMarginBottom,
            marginTop: Constants.headerMarginTop,
            flex: '1 1 100%',
            fontFamily: Fonts.OpenSansCondensedFontFamily,
            fontWeight: Fonts.FontWeightLight,
            justifyContent: 'center',
            alignItems: 'flex-end',
            display: 'flex'
        }
    );
}

function getControls(currentPage: string) {
    let controls = Columns.create(
        {
            columns: [
                {
                    content: Button.create(
                        {
                            height: Constants.buttonHeight,
                            color: currentPage === 'home' ? Color.white : Color.darkBlue,
                            width: Constants.buttonWidth,
                            value: 'Domů',
                            textSize: Constants.buttonTextSize,
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('home'));
                            }
                        })
                },
                {
                    content: Button.create(
                        {
                            height: Constants.buttonHeight,
                            color: currentPage === 'about' ? Color.white : Color.lightBrown,
                            textSize: Constants.buttonTextSize,
                            width: Constants.buttonWidth,
                            value: 'O nás',
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('about'));
                            }
                        })
                },
                {
                    content: Button.create(
                        {
                            height: Constants.buttonHeight,
                            color: currentPage === 'services' ? Color.white : Color.darkBrow,
                            textSize: Constants.buttonTextSize,
                            width: Constants.buttonWidth,
                            value: 'Služby',
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('services'));
                            }
                        })
                },
                {
                    content: Button.create(
                        {
                            height: Constants.buttonHeight,
                            color: currentPage === 'gallery' ? Color.white : Color.lightBlue,
                            textSize: Constants.buttonTextSize,
                            width: Constants.buttonWidth,
                            value: 'Fotogalerie',
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('gallery'));
                            }
                        })
                },
                {
                    content: Button.create(
                        {
                            height: Constants.buttonHeight,
                            color: currentPage === 'contact' ? Color.white : Color.black,
                            textSize: Constants.buttonTextSize,
                            width: Constants.buttonWidth,
                            textColor: currentPage === 'contact' ? Color.black : Color.white,
                            value: 'Kontakt',
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('contact'));
                            }
                        })
                }
            ],
            addSpacing: true
        }
    );
    return b.styledDiv(controls, {
        marginLeft: Constants.leftColumnWidth,
        marginRight: Constants.rightColumnWidth,
        marginBottom: Constants.controlsMargin,
        flex: '1 1 100%'
    });
}

function getRightColumn() {
    return b.style({ tag: 'div' }, { height: 300, width: Constants.rightColumnWidth, backgroundColor: 'orange', flex: '1 1 auto' });
}
function getTextField(value: string, textSize: number, lineHeight: number, isBold: boolean) {
    return b.style(
        {
            tag: 'div',
            children: value
        },
        { fontSize: textSize },
        { fontFamily: Fonts.OpenSansCondensedFontFamily },
        { fontWeight: isBold ? Fonts.FontWeightBold : Fonts.FontWeightLight },
        {lineHeight : lineHeight}
    );
}

function getLeftColumn() {
    let items = Rows.create(
        {
            rows: [
                {
                    content: b.styledDiv(
                        {},
                        { width: Constants.leftColumnWidth },
                        { height: 30 },
                        { backgroundImage: `url(${b.asset(assets.ordinace_svg)})` },
                        { marginLeft: -70 },
                        { paddingLeft: 70 },
                        { backgroundSize: 'contain'},
                        { backgroundRepeat: 'no-repeat'}
                    )
                },
               
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
            ],
            alignment: Rows.Align.Stretch
        }
    );
    return b.style(
        {
            tag: 'div',
            children: items
        },
        {
            width: Constants.leftColumnWidth,
            flex: '1 1 auto',
            display: 'flex'
        }
    );
}
