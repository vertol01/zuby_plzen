import * as b from "bobril";

import * as Map from ".././components/GoogleMap/lib";
import * as TextArea from ".././components/TextArea/lib";
import * as TextList from ".././components/TextList/lib";
import * as Rows from ".././components/Rows/lib";
import { IParagraph } from "../components/TextArea/data";

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
            content: TextArea.create({
              header: `Ordinace`,
              paragraphs: getText1()
            })
          },
          { content: b.style(map, { marginBottom: 16 }) },
          {
            content: TextArea.create({
              header: `Zdravotní Pojištovny`,
              paragraphs: getText4()
            })
          },
          {
            content: TextList.create({
              items: getList()
            })
          }
        ]
      })
    ];
  }
});

function getText1(): IParagraph[] {
  return [
    {
      topMargin: 0,
      lines: [
        `Pacienty ošetřujeme pouze po předchozím telefonickém objednání.
        Objednávejte se prosím na tel.: 733 269 177 nebo 373 723 223. Děkujeme.`
      ]
    },
    {
      lines: [
        `Objednání mimo ordinační hodiny na přání pacienta účtujeme částkou 1.500 KČ (tato cena je jednorázovým 
        poplatkem, který nezahrnuje standardní platby za ošetření)`
      ]
    }
  ];
}

function getText(): IParagraph[] {
  return [
    {
      topMargin: 0,
      lines: [
        `Telefon 733 269 177 | 373 723 223`,
        `Email ordinace@zuby-plzen.cz`
      ]
    },
    {
      lines: [`ZuBy s.r.o.`, `Čechova 2641/44`, `301 00 Plzeň`]
    },
    {
      lines: [`IČ: 05937078`]
    }
  ];
}

function getText3(): IParagraph[] {
  return [
    {
      topMargin: 0,
      lines: [
        `Poliklinika Bory, 6. Patro`,
        `Čechova 44, Plzeň`,
        `Spojení | tramvaj 4`,
        `autobus 29`,
        `trolejbus 16`
      ]
    }
  ];
}

function getText4(): IParagraph[] {
  return [
    {
      topMargin: 0,
      lines: [`Jsme smluvním zařízením zdravotních pojišťoven`]
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

// ``
//
//
function getList() {
  return [
    `Jsme smluvním zařízením zdravotních pojišťoven:`,
    `Všeobecná zdravotní pojišťovna (111)`,
    `Vojenská zdravotní pojišťovna České republiky (201)`,
    `Česká průmyslová zdravotní pojišťovna (205)`,
    `Oborová zdravotní pojišťovna zaměstnanců bank, pojišťoven a stavebnictví (207)`,
    `Zdravotní pojišťovna Ministerstva vnitra České republiky (211)`
  ];
}
