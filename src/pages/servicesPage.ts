import * as b from "bobril";

import * as Rows from ".././components/Rows/lib";
import * as TextArea from ".././components/TextArea/lib";
import * as TextList from ".././components/TextList/lib";
import { IParagraph } from "../components/TextArea/data";

export const servicesPage = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
    me.children = Rows.create({
      alignment: Rows.Align.Stretch,
      rows: [
        {
          content: TextArea.create({
            header: `Služby`,
            paragraphs: getText1()
          })
        },
        { content: TextArea.create({ paragraphs: getText2() }) }
      ]
    });
  }
});

function getText1(): IParagraph[] {
  return [
    {
      topMargin: 0,
      lines: [
        `V ordinaci pracujeme s moderními přístroji, aplikujeme nejnovější léčebné metody a postupy.
        Klademe důraz na kvalitní, šetrné a bezbolestné ošetření, estetiku, důsledně dbáme na hygienu
        pracoviště a v neposlední řadě lidský a přátelský přístup k pacientům.`
      ]
    }
  ];
}

function getText2(): IParagraph[] {
  return [
    {
      lines: [
        `<b>Záchovná stomatologie</b> (konzervační stomatologie) – prevence, diagnostika a léčba zubních
        onemocnění v důsledku zubních kazů nebo úrazů`
      ]
    },
    {
      lines: [
        `<b>Endodoncie</b> – léčba zubní dřeně a zubních kořenů resp. ošetření vnitřního prostoru zubu (nejčastěji
            ošetřování kořenových kanálků a léčba prasklých zubů); slouží k uchování poškozeného či mrtvého
            zubu v ústní dutině tak, aby byla plně zachována jeho funkce`
      ]
    },
    {
      lines: [
        `<b>Protetika</b> – rekonstrukce chybějících zubů či jejich částí (fazety, korunky, polokorunky, můstky,
                protézy…)`
      ]
    },
    {
      lines: [
        `<b>Dentální hygiena</b> – odstraňování zubního plaku a kamene, nácvik zubní hygieny, péče o dásně a ústní
                dutinu obecně, prevence zubního kazu a paradontitidy, instruktáž správného čištění zubů`
      ]
    },
    {
      lines: [
        `<b>Bělení a pískování zubů</b> – profesionální odstraňování povlaků a pigmentace zubů a následné bělení
                do požadované barvy`
      ]
    },
    {
      lines: [
        `<b>Aplikace dentálních šperků</b> / kamínků – lepení speciálních dentálních ozdob pomocí speciálního,
                šetrného, zdravotně nezávadného lepidla`
      ]
    },
    {
      lines: [`<b>Zhotovujeme sportovní ochranné dlahy</b> (chrániče)`]
    }
  ];
}
