import * as b from "bobril";

import * as Map from ".././components/GoogleMap/lib";
import * as TextArea from ".././components/TextArea/lib";
import * as Rows from ".././components/Rows/lib";
import * as Fonts from '../components/Font/lib';
import * as Constants from '../constants';
import * as assets from '../assets';
import * as OpeningHours from '../components/OpeningHours/lib';
import * as Columns from '../components/Columns/lib';

import { IParagraph, LineType } from "../components/TextArea/data";

export const contactPage = b.createVirtualComponent({
    id: "constactPage",
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        let map = Map.create({
            apiKey: "AIzaSyAGo4HE3j_HjuL64-CoBgS-GVwCbR_UWGc",
            center: { lat: 49.730125, lng: 13.373137 },
            zoom: 17,
            marker: { position: { lat: 49.73, lng: 13.373 } }
        });
        me.children = [
            Rows.create({
                alignment: Rows.Align.Stretch,
                rows: [
                    {
                        content: TextArea.create({
                            header: `MDDr. Jana Bystřická`,
                            paragraphs: getText()
                        })
                    },
                    {
                        content: TextArea.create({
                            header: `Ordinační hodiny`,
                            paragraphs: getText1()
                        })
                    },
                    {
                        content:


                        b.styledDiv(
                            Columns.create(
                                {
                                    spacing: Columns.Spacing.Around,
                                    columns: [
                                        { content: OpeningHours.create() },
                                        {
                                            content: b.styledDiv(
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
                                                    backgroundImage: `url(${b.asset(assets.telephoneGreen_png)})`,
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat',
                                                    fontFamily: Fonts.OpenSansCondensedFontFamily,
                                                    fontWeight: Fonts.FontWeightLight,
                                                    fontSize: Constants.rightColumnTextSize
                                                }
                                            )
                                        },

                                    ]
                                }
                            ),
                            { marginBottom: 16, display: 'flex', flex: '1 1 100%' })
                    },
                    {
                        content: TextArea.create({
                            header: `Ordinace`
                        })
                    },

                    {
                        content: b.style(
                            {
                                tag: 'p',
                                children: [
                                    `Poliklinika Bory, 6.patro`,
                                    { tag: 'br' },
                                    'Čechova 44, Plzeň',
                                    { tag: 'br' },
                                    `Spojení | tramvaj 4`,
                                    { tag: 'br' },
                                    b.style({ tag: 'span' }, { width: 45, display: 'inline-block' }),
                                    `autobus 29`,
                                    { tag: 'br' },
                                    b.style({ tag: 'span' }, { width: 45, display: 'inline-block' }),
                                    `trolejbus 16`
                                ]
                            },
                            {
                                fontFamily: Fonts.OpenSansCondensedFontFamily,
                                fontWeight: Fonts.FontWeightLight,
                                fontSize: Constants.textSize,
                                marginTop: 0
                            }
                        )
                    },
                    { content: b.style(map, { marginBottom: 16 }) },
                    {
                        content: TextArea.create({
                            header: `Zdravotní Pojištovny`,
                            paragraphs: getText4()
                        })
                    },
                ]
            })
        ];
    }
});


// function getText2(): IParagraph[] {
//     return [
//         {
//             lines: [
//                 {
//                     type: LineType.Regular,
//                     text: `Poliklinika Bory, 6.patro`
//                 },
//                 {
//                     type: LineType.Regular,
//                     text: `Čechova 44, Plzeň`
//                 },
//                 {
//                     type: LineType.Regular,
//                     text: `Spojení|tramvaj 4`
//                 },
//                 {
//                     type: LineType.Regular,
//                     text: `autobus 29`
//                 },
//                 {
//                     type: LineType.Regular,
//                     text: `<> trolejbus 16`
//                 }
//             ]
//         }
//     ];
// }

function getText1(): IParagraph[] {
    return [
        {
            lines: [
                {
                    type: LineType.Regular,
                    text: `Pacienty ošetřujeme
                     po předchozím telefonickém objednání. Objednávejte se prosím na tel.: 733 269 177 nebo 373 723 223. Děkujeme.`}
            ]
        },
        {
            lines: [
                {
                    type: LineType.Regular,
                    text: `Objednání mimo ordinační hodiny na přání pacienta účtujeme částkou 1.500 KČ (tato cena je jednorázovým poplatkem, který nezahrnuje standardní platby za ošetření)`
                }
            ]
        }
    ];
}

function getText(): IParagraph[] {
    return [
        {
            lines: [
                {
                    type: LineType.Regular,
                    text: `Telefon 733 269 177 | 373 723 223`
                },
                {
                    type: LineType.Regular,
                    text: `Email ordinace@zuby-plzen.cz`
                }
            ]
        },
        {
            lines: [{
                type: LineType.Regular,
                text: `ZuBy s.r.o.`
            }, {
                type: LineType.Regular,
                text: `Čechova 2641/44`
            }, {
                type: LineType.Regular,
                text: `301 00 Plzeň`
            }]
        },
        {
            lines: [{
                type: LineType.Regular,
                text: `IČ: 05937078`
            }]
        }
    ];
}

function getText3(): IParagraph[] {
    return [
        {
            lines: [
                {
                    type: LineType.Regular,
                    text: `Poliklinika Bory, 6. Patro`
                },
                {
                    type: LineType.Regular,
                    text: `Čechova 44, Plzeň`
                },
                {
                    type: LineType.Regular,
                    text: `Spojení | tramvaj 4`
                },
                {
                    type: LineType.Regular,
                    text: `autobus 29`
                },
                {
                    type: LineType.Regular,
                    text: `trolejbus 16`
                }
            ]
        }
    ];
}

function getText4(): IParagraph[] {
    return [
        {
            lines: [
                {
                    type: LineType.Regular,
                    text: `Jsme smluvním zařízením zdravotních pojišťoven`
                },
                {
                    type: LineType.ListItem,
                    text: `Jsme smluvním zařízením zdravotních pojišťoven:`
                },
                {
                    type: LineType.ListItem,
                    text: `Všeobecná zdravotní pojišťovna (111)`
                },
                {
                    type: LineType.ListItem,
                    text: `Vojenská zdravotní pojišťovna České republiky (201)`
                },
                {
                    type: LineType.ListItem,
                    text: `Česká průmyslová zdravotní pojišťovna (205)`
                },
                {
                    type: LineType.ListItem,
                    text: `Oborová zdravotní pojišťovna zaměstnanců bank, pojišťoven a stavebnictví (207)`
                },
                {
                    type: LineType.ListItem,
                    text: `Zdravotní pojišťovna Ministerstva vnitra České republiky (211)`
                }
            ]
        }
    ];
}
// `ORDINAČNÍ HODINY`
// ``
// ``
// `PO 8-14`
// `ÚT 8-16`
// `ST 8-14`
// `ČT 8-14`
// `PÁ 8-12`
