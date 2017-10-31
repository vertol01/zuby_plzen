import * as b from "bobril";
import * as Rows from ".././components/Rows/lib";
import * as TextArea from ".././components/TextArea/lib";
import * as Constants from ".././constants";
import * as Color from '../colors';
import * as Fonts from '../components/Font/lib';

import { IParagraph, LineType } from "../components/TextArea/data";

export const homePage = b.createVirtualComponent({
  id: "homePage",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
    me.children = [

      getText()
    ]
  }
});

function getText() {
  let text: IParagraph[] = [
    {
      lines: [
        {
          type: LineType.Regular,
          text: `Nové moderní prostředí ordinace nabízí svým pacientům kvalitní a profesionální služby v oblasti zubního lékařství a zubní hygieny. Aplikujeme nejnovější léčebné metody a postupy, pracujeme se špičkovým vybavením a klademe důraz na šetrné a bezbolestné ošetření.`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `Naše práce stojí na třech základních pilířích – <b>pravidelná preventivní péče</b> – <b>profesionální ošetření</b> za pomoci moderní techniky a postupů – <b>přátelský a individuální přístup</b>, který ocení dospělí i ti nejmenší.`
        }
      ]
    },
    {
      lines: [{
        type: LineType.Regular,
        text: `Přijďte se přesvědčit, že i péče o zuby může být příjemná!`
      }]
    },
    {
      lines: [{
        type: LineType.Regular,
        text: `<b>Těšíme se na Vaši návštěvu</b>`
      }]
    },
    {
      lines: [{
        type: LineType.Regular,
        text: `Tým ZuBy s.r.o.`
      }]
    },
    // {
    //   lines: [{
    //     type: LineType.Regular,
    //     text: `MODERNÍ A PŘÍJEMNÉ PROSTŘEDÍ`
    //   }]
    // },
    // {
    //   lines: [{
    //     type: LineType.Regular,
    //     text: `ŠPIČKOVÉ PŘÍSTROJE – MODERNÍ LÉČEBNÉ A DIAGNOSTICKÉ METODY`
    //   }]
    // },
    // {
    //   lines: [{
    //     type: LineType.Regular,
    //     text: `ŠETRNÉ A BEZBOLESTNÉ OŠETŘENÍ`
    //   }]
    // },
    // {
    //   lines: [{
    //     type: LineType.Regular,
    //     text: `OSOBNÍ A LIDSKÝ PŘÍSTUP`
    //   }]
    // },
    // {
    //   lines: [{
    //     type: LineType.Regular,
    //     text: `PÉČE I O TY NEJMENŠÍ`
    //   }]
    // },
    // {
    //   lines: [{
    //     type: LineType.Regular,
    //     text: `SMLUVNÍ ZAŘÍZENÍ ZDRAVOTNÍCH POJIŠŤOVEN`
    //   }]
    // },
  ];

  let text2: IParagraph[] = [
    {
      lines: [
        {
          type: LineType.ListItem,
          text: `<b>Intraorální rentgen</b> (zhotovení detailních snímků jednotlivých zubů a diagnostických skusových snímků)`
        },
        {
          type: LineType.ListItem,
          text: `<b>Panoramatický rentgen</b> (snímkování kompletního chrupu)`
        },
        {
          type: LineType.ListItem,
          text: `<b>Ultrazvuk</b> (odstraňování zubního kamene)`
        },
        {
          type: LineType.ListItem,
          text: `<b>Endomotor</b> (přístrojové ošetření zubních kanálků)`
        },
        {
          type: LineType.ListItem,
          text: `<b>Apexlokátor</b> (přesné měření délky zubního kanálku)`
        },
        {
          type: LineType.ListItem,
          text: `<b>Polymerační lampa</b> (vytvrzení “bílých” plomb)`
        },
        {
          type: LineType.ListItem,
          text: `<b>AirFlow</b> ( odstraňování diskolorací zubů )`
        },
        {
          type: LineType.ListItem,
          text: `<b>Přístroje na sterilizaci a dezinfekci</b> pracovních nástrojů a vybavení`
        }

      ]
    }
  ];


  return Rows.create({
    alignment: Rows.Align.Stretch,
    rows: [
      {
        content:           b.styledDiv([
            b.style({
              tag: 'span',
              children: 'Právě pro Vás připravujeme novou zubní ordinaci ZuBy s.r.o.'
            },
              { fontSize: 20 },
              { fontFamily: Fonts.OpenSansCondensedFontFamily },
              { fontWeight: Fonts.FontWeightBold},
            ),
            b.style(
              {
                tag: 'span',
                children: 'Budeme se těšit v nových prostorách v 6. patře Polikliniky Bory, v Plzni, Čechově ulici 44.'
              },
              { fontSize: 16 },
              { fontFamily: Fonts.OpenSansCondensedFontFamily },
              { fontWeight: Fonts.FontWeightLight },
            )
          ], { display: 'flex', flexDirection: 'column',  flex: '1 1 100%', padding: 3, marginBottom: 16, backgroundColor: Color.lightBrown })
      },
      {
        content: TextArea.create({
          header: "Nová zubní ordinace",
          paragraphs: text
        })
      },
      {
        content: TextArea.create({
          header: "Pracovní vybavení a přístroje",
          paragraphs: text2
        })
      }
    ]
  });
}
