import * as b from "bobril";

import * as Rows from ".././components/Rows/lib";
import * as TextArea from ".././components/TextArea/lib";
import { IParagraph, LineType } from "../components/TextArea/data";

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
        {
          content: TextArea.create({
            paragraphs: getText2()
          })
        },
        {
          content: TextArea.create({
            header: "Pracovní vybavení a přístroje",
            paragraphs: getText3()
          })
        }
      ]
    });
  }
});

function getText1(): IParagraph[] {
  return [
    {
      lines: [
        {
          type: LineType.Regular,
          text: `V ordinaci pracujeme nejmodernějšími přístroji, aplikujeme nejnovější léčebné metody a postupy. Klademe důraz na kvalitní, šetrné a bezbolestné ošetření, estetiku, důsledně dbáme na hygienu pracoviště a v neposlední řadě lidský a přátelský přístup k pacientům.`
        }
      ]
    }
  ];
}

function getText2(): IParagraph[] {
  return [
    {
      lines: [
        {
          type: LineType.Regular,
          text: `<b>Záchovná stomatologie</b> (konzervační stomatologie) – prevence, diagnostika a léčba zubních onemocnění v důsledku zubních kazů nebo úrazů`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `<b>Endodoncie</b> – léčba zubní dřeně a zubních kořenů resp. ošetření vnitřního prostoru zubu (nejčastěji ošetřování kořenových kanálků a léčba prasklých zubů); slouží k uchování poškozeného či mrtvého zubu v ústní dutině tak, aby byla plně zachována jeho funkce`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `<b>Protetika</b> – rekonstrukce chybějících zubů či jejich částí (fazety, korunky, polokorunky, můstky, protézy…)`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `<b>Dentální hygiena</b> – odstraňování zubního plaku a kamene, nácvik zubní hygieny, péče o dásně a ústní dutinu obecně, prevence zubního kazu a paradontitidy, instruktáž správného čištění zubů`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `<b>Bělení a pískování zubů</b> – profesionální odstraňování povlaků a pigmentace zubů a následné bělení do požadované barvy`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `<b>Zhotovujeme sportovní ochranné dlahy</b> (chrániče)`
        }
      ]
    }
  ];
}

function getText3() {
  return [
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
}
