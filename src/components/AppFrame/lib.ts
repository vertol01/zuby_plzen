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
import * as MobileLayout from '../MobileAppLayout/lib';
import { IData } from './data';
import { pageCursor, IPageState } from './state';
import { IDimensionsState, dimensionsCursor } from '../ViewportDimensions/state';
import * as DynamicHeader from '../DynamicHeader/lib';
import { showMobileAppControls } from '../MobileAppLayout/action/showControlsAction'


import * as flux from 'bobflux';

export const create = b.createVirtualComponent<IData>({
    render(_ctx: IContext, me: b.IBobrilNode): void {

        const pageState = flux.getState(pageCursor);
        const state = flux.getState(dimensionsCursor);
        if (state.viewportWidth === undefined) {
            return;
        }
        let app;
        if (state.viewportWidth > Constants.mobileLayoutWidth) {
            app = AppLayout.create(
                {
                    appWidth: Constants.appWidth,
                    appContentWidth: Constants.appContentWidth,
                    appBackgroundcolor: Constants.appBackgroundColor,
                    pageBackgroundcolor: Constants.pageBackgroundcolor,
                    appHeader: getAppHeader(Constants.headerMarginBottom),
                    appControls: getControls(pageState.currentPage),
                    leftColumn: getLeftColumn(),
                    rightColumn: getRightColumn(),
                    centerColumn: _ctx.data.content
                });
        } else {
            app = MobileLayout.create({
                header: getAppHeader(Constants.mobileHeaderMarginBottom),
                info: getAppInfo(state.viewportWidth),
                content: _ctx.data.content,
                controls: getMobileAppControls()
            });
        }

        me.children = [
            Fonts.create(),
            app
        ];
    }
});

interface IContext extends b.IBobrilCtx {
    data: IData;
}

function getTextSize(viewportWidth: number) {
    return (820 + viewportWidth) / 76;
}

function getAppInfo(viewportWidth: number) {
    return Rows.create(
        {
            alignment: Rows.Align.Center,
            rows: [
                {
                    content: b.styledDiv(
                        {},
                        { width: Constants.leftColumnWidth },
                        { height: 20 },
                        { backgroundImage: `url(${b.asset(assets.ordinace_svg)})` },
                        { backgroundSize: 'contain' },
                        { backgroundRepeat: 'no-repeat' }
                    )
                },
                {
                    width: 100,
                    content: getOpeningTimes(viewportWidth)
                },
                {
                    content: b.styledDiv(
                        b.styledDiv(
                            Constants.mobilePhoneNumber,
                            { paddingTop: Math.min(viewportWidth / 400 * 45, 45) },
                            {
                                whiteSpace: 'nowrap'
                            }
                        ),
                        {
                            marginTop: 10,
                            marginBottom: 10,
                            width: Math.min(viewportWidth / 400 * Constants.rightItemsSize, Constants.rightItemsSize),
                            height: Math.min(viewportWidth / 400 * 78, 78),
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'top',
                            backgroundImage: `url(${b.asset(assets.telefon1_png)})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            fontFamily: Fonts.OpenSansCondensedFontFamily,
                            fontWeight: Fonts.FontWeightLight,
                            fontSize: Math.max(Math.min(viewportWidth / 400 * Constants.rightColumnTextSize, Constants.rightColumnTextSize), 15)
                        }
                    )
                }
            ]
        }
    )
}

function getOpeningTimes(viewportWidth: number) {

    let textSize = getTextSize(viewportWidth);
    textSize = Math.max(Math.min(viewportWidth / 400 * 20, 20), 15);
    let data = Columns.create({
        addSpacing: true,
        columns: [
            {
                content: getTextField('PO|8-12', textSize, Constants.lineHeight, false),
            },
            {
                content: getTextField('ÚT|8-12', textSize, Constants.lineHeight, false),
            },
            {
                content: getTextField('ST|12-15', textSize, Constants.lineHeight, false),
            },
            {
                content: getTextField('ČT|8-12', textSize, Constants.lineHeight, false),
            },
            {
                content: getTextField('PÁ|8-12', textSize, Constants.lineHeight, false),
            },
        ]
    });
    return b.style(data, { flexWrap: 'wrap'});
}

function getAppHeader(headerMargimBottom: number) {
    let background = b.style(
        {
            tag: 'div'
        },
        {
            flex: '1 1 100%',
            marginLeft: '22%',
            marginRight: '22%',
            background: `url(${b.asset(assets.zuby_png)}) no-repeat 22% 0/contain`,
        }
    )
    let headerText =
        b.styledDiv(
            [
                b.style(
                    {
                        tag: 'span',
                        children: '·'
                    },
                    { fontWeight: Fonts.FontWeightBold }
                ),
                'MDDr. Jana Bystřická',
                b.style(
                    {
                        tag: 'span',
                        children: '·'
                    },
                    { fontWeight: Fonts.FontWeightBold }
                ),
            ],
            {
                display: 'flex',
                flex: '1 1 100%',
                justifyContent: 'center',
                alignItems: 'flex-end',
                fontFamily: Fonts.OpenSansCondensedFontFamily,
                fontWeight: Fonts.FontWeightLight,
                background: `url(${b.asset(assets.logo_svg)}) no-repeat top left/contain,
                             url(${b.asset(assets.zuby_png)}) no-repeat center/contain`
            }
        );

    let dynamicHeader = DynamicHeader.create({
        heightToWidthRatio: Constants.headerRatio,
        content: [headerText]
    });

    let headerWrapper = b.styledDiv(
        dynamicHeader,
        {
            flex: '1 1 100%',
            marginBottom: headerMargimBottom,
            marginTop: Constants.headerMarginTop,
            display: 'flex'
        }
    );

    return headerWrapper;
}

function getMobileAppControls() {
    return Rows.create({
        alignment: Rows.Align.Stretch,
        rows: [
            {
                content: b.styledDiv(
                    Button.create(
                        {
                            height: Constants.buttonHeight,
                            color: Color.darkBlue,
                            value: 'Domů',
                            width: '100%',
                            textSize: Constants.buttonTextSize,
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('home'));
                                showMobileAppControls(false);
                            }
                        }
                    ),
                    { marginTop: Constants.mobileControlsMargin, flex: '1 1 100%', display: 'flex' }
                )
            },
            {
                content: b.styledDiv(
                    Button.create(
                        {
                            height: Constants.buttonHeight,
                            color: Color.lightBrown,
                            width: '100%',
                            textSize: Constants.buttonTextSize,
                            value: 'O nás',
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('about'));
                                showMobileAppControls(false);
                            }
                        }),
                    {
                        marginTop: Constants.mobileControlsMargin, flex: '1 1 100%', display: 'flex'
                    }
                )
            },
            {
                content: b.styledDiv(
                    Button.create(
                        {
                            height: Constants.buttonHeight,
                            color: Color.darkBrow,
                            width: '100%',
                            textSize: Constants.buttonTextSize,
                            value: 'Služby',
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('services'));
                                showMobileAppControls(false);
                            }
                        }),
                    {
                        marginTop: Constants.mobileControlsMargin, flex: '1 1 100%', display: 'flex'
                    }
                )
            },
            {
                content: b.styledDiv(
                    Button.create(
                        {
                            height: Constants.buttonHeight,
                            width: '100%',
                            color: Color.lightBlue,
                            textSize: Constants.buttonTextSize,
                            value: 'Fotogalerie',
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('gallery'));
                                showMobileAppControls(false);
                            }
                        }),
                    {
                        marginTop: Constants.mobileControlsMargin, flex: '1 1 100%', display: 'flex'
                    }
                )
            },
            {
                content: b.styledDiv(
                    Button.create(
                        {
                            height: Constants.buttonHeight,
                            color: Color.black,
                            textSize: Constants.buttonTextSize,
                            width: '100%',
                            textColor: Color.white,
                            value: 'Kontakt',
                            onClick: () => {
                                b.runTransition(b.createRedirectPush('contact'));
                                showMobileAppControls(false);
                            }
                        }),
                    { marginTop: Constants.mobileControlsMargin, flex: '1 1 100%', display: 'flex' }
                )
            }
        ]
    })
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
    let items = Rows.create({
        rows: [
            {
                content:
                b.styledDiv(
                    b.styledDiv(
                        Constants.mobilePhoneNumber,
                        { paddingTop: 50 }
                    ),
                    {
                        marginBottom: Constants.rightItemsMargin,
                        width: Constants.rightItemsSize,
                        height: Constants.rightItemsSize,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'top',
                        backgroundImage: `url(${b.asset(assets.telefon_png)})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        fontFamily: Fonts.OpenSansCondensedFontFamily,
                        fontWeight: Fonts.FontWeightLight,
                        fontSize: Constants.rightColumnTextSize
                    }
                )
            },
            {
                content: b.style(
                    {
                        tag: 'img',
                        attrs: {
                            src: b.asset(assets.right_column_1_jpg),
                            width: Constants.rightItemsSize,
                            height: Constants.rightItemsSize
                        }
                    },
                    { margin: Constants.rightItemsMargin, borderRadius: '50%' }
                )
            },
            {
                content: b.style(
                    {
                        tag: 'img',
                        attrs: {
                            src: b.asset(assets.right_column_2_jpg),
                            width: Constants.rightItemsSize,
                            height: Constants.rightItemsSize
                        }
                    },
                    { margin: Constants.rightItemsMargin, borderRadius: '50%' }
                )
            },
        ],
        alignment: Rows.Align.Right
    });
    return b.style(
        {
            tag: 'div',
            children: items
        },
        {
            width: Constants.rightColumnWidth,
            flex: '1 1 auto',
            display: 'flex'
        }
    );
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
        { lineHeight: lineHeight },
        { whiteSpace: 'nowrap' }
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
                        { backgroundSize: 'contain' },
                        { backgroundRepeat: 'no-repeat' }
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
