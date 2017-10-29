import * as b from "bobril";
import * as Rows from ".././components/Rows/lib";
import * as TextArea from ".././components/TextArea/lib";
import * as TextList from ".././components/TextList/lib";
import * as Constants from ".././constants";
import { IParagraph } from "../components/TextArea/data";

export const homePage = b.createVirtualComponent({
  id: "homePage",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
    me.children = getText();
  }
});

function getText() {
  let text: IParagraph[] = [
    {
      topMargin: 0,
      lines: [
        `Nové moderní prostředí ordinace nabízí svým pacientům kvalitní a profesionální služby v oblasti
        zubního lékařství a zubní hygieny. Aplikujeme nejnovější léčebné metody a postupy, pracujeme se
        špičkovým vybavením a klademe důraz na šetrné a bezbolestné ošetření.`
      ]
    },
    {
      lines: [
        `Naše práce stojí na třech základních pilířích – pravidelná preventivní péče – profesionální ošetření za
        pomoci moderní techniky a postupů – přátelský a individuální přístup, který ocení dospělí i ti
        nejmenší.`
      ]
    },
    { lines: [`Přijďte se přesvědčit, že i péče o zuby může být příjemná!`] },
    { lines: [`Těšíme se na Vaši návštěvu`] },
    { lines: [`Tým ZuBy s.r.o.`] },
    { lines: [`MODERNÍ A PŘÍJEMNÉ PROSTŘEDÍ`] },
    { lines: [`ŠPIČKOVÉ PŘÍSTROJE – MODERNÍ LÉČEBNÉ A DIAGNOSTICKÉ METODY`] },
    { lines: [`ŠETRNÉ A BEZBOLESTNÉ OŠETŘENÍ`] },
    { lines: [`OSOBNÍ A LIDSKÝ PŘÍSTUP`] },
    { lines: [`PÉČE I O TY NEJMENŠÍ`] },
    { lines: [`SMLUVNÍ ZAŘÍZENÍ ZDRAVOTNÍCH POJIŠŤOVEN`] },
    { lines: [`V ordinaci pracujeme s tímto moderním vybavením:`] }
  ];

  function getList() {
    return [
      `Intraorální rentgen (zhotovení detailních snímků jednotlivých zubů a diagnostických skusových snímků)`,
      `Panoramatický rentgen (snímkování kompletního chrupu)`,
      `Ultrazvuk (odstraňování zubního kamene)`,
      `Endomotor (přístrojové ošetření zubních kanálků)`,
      `Apexlokátor (přesné měření délky zubního kanálku)`,
      `Polymerační lampa (vytvrzení “bílých” plomb)`,
      `AirFlow ( odstraňování diskolorací zubů )`,
      `Přístroje na sterilizaci a dezinfekci pracovních nástrojů a vybavení`
    ];
  }

  return Rows.create({
    alignment: Rows.Align.Stretch,
    rows: [
      {
        content: TextArea.create({
          header: "Nová zubní ordinace",
          paragraphs: text
        })
      },
      {
        content: TextList.create({
          items: getList()
        })
      }
    ]
  });
}
