import * as b from "bobril";

import * as Rows from ".././components/Rows/lib";
import * as TextArea from ".././components/TextArea/lib";
import { IParagraph, LineType } from "../components/TextArea/data";

export const aboutPage = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
    me.children = Rows.create({
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
            header: `Absolvovaná odborná školení`,
            paragraphs: getText1()
          })
        },
      ]
    });
  }
});

function getText(): IParagraph[] {
  return [
    {
      lines: [
        {
          type: LineType.Regular,
          text: `Vystudovala jsem Lékařskou fakultu v Plzni Univerzity Karlovy, kde jsem v roce 2009 absolvovala obor Zubní lékařství. Při studiu jsem sbírala zkušenosti na praxích ve Fakulní nemocnici v Plzni a v soukromé praxi ve Stříbře. Po ukončení studií jsem 8 let působila jako praktická zubní lékařka v soukromé zubní praxi v Plzni, kde jsem se seznámila s nejmodernějšími postupy a přístroji v péči o zuby a zubní hygienu.`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `Při své práci kladu důraz na dlouhodobý vztah mezi lékařem a pacientem, založený na vzájemné důvěře a respektu, pravidelné preventivní péči a profesionálním a bezbolestném ošetření. Každý pacient může očekávat důkladné vyšetření stavu chrupu, zahrnující pravidelné rentgenové snímkování zubů, odstraňování zubního kamene a instruktáž zubní hygieny.`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `Dbám na individuální a lidský přístup, kdy pacientovi vždy s respektem vysvětlím problém a navrhnu možná řešení, která následně konzultujeme.`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `Vážím si pacientova času, a proto provádím veškerá vyšetření včetně rentgenových snímků v průběhu ošetření přímo v ordinaci, což je pro pacienta nejen komfortní, ale šetří to i jeho čas. Sama nemám ráda dlouhé čekání u lékaře, proto své pacienty vždy objednávám na přesný čas, který se snažím důsledně dodržovat. Tento přístup považuji nejen za slušný, ale také jako základ vztahu a vzájemného respektu mezi lékařem a jeho pacientem.`
        }
      ]
    },
    {
      lines: [
        {
          type: LineType.Regular,
          text: `Mým cílem je poskytovat kvalitní, bezbolestné a šetrné ošetření dospělým i dětem. Proto kladu velký důraz na celoživotní vzdělávání a trvalé zlepšování se ve svém oboru.`
        }
      ]
    }
  ];
}

function getText1() {
  return [
    {
      lines: [
        {
          type: LineType.ListItem,
          text: `Kontinuální vzdělávání v rámci České stomatologické komory`
        },
        {
          type: LineType.ListItem,
          text: `Bělení zubů - teorie a praxe`
        },
        {
          type: LineType.ListItem,
          text: `Protetika názorně prakticky - prim. MUDr. Petr Barták`
        },
        {
          type: LineType.ListItem,
          text: `Přímé estetické kompozitní fazety a Smile design - MUDr. Jiří Zvolánek`
        },
        {
          type: LineType.ListItem,
          text: `Moderní endodoncie od A do Z - doc. MUDr. Luděk Peřinka, CSc.`
        },
        {
          type: LineType.ListItem,
          text: `Zdravé dásně - péče, která se vyplatí - MUDr. Ladislav Korábek, CSc., MBA`
        },
        {
          type: LineType.ListItem,
          text: `Teleskopické snímací náhrady - MUDr. Jiří Zvolánek`
        },
        {
          type: LineType.ListItem,
          text: `První pomoc v ordinaci zubního lékaře - MUDr. Vladivoj Tuzar`
        },
        {
          type: LineType.ListItem,
          text: `Základy moderní endodoncie – kazuistiky - MUDr. Ladislav Čechura`
        },
        {
          type: LineType.ListItem,
          text: `BEGO Implant Systems – prof. MUDr. Tibor Neméth, DrSc.`
        },
        {
          type: LineType.ListItem,
          text: `Prevence infekce ve stomatologické ordinaci`
        },
        {
          type: LineType.ListItem,
          text: `Kompozity pro laterální úsek chrupu`
        },
        {
          type: LineType.ListItem,
          text: `Ošetřování hendikepovaných pacientů - sedace a celková anestezie, ve stomatologické praxi – doc. MUDr. Ladislav Hess, DrSc.`},
        {
          type: LineType.ListItem,
          text: `Fixní protetika dneška – MUDr. Petr Hajný`
        },
        {
          type: LineType.ListItem,
          text: `Vytváření předvídatelné estetiky pomocí nových výpl. materiálů. Jednodenní stomatologie. Adhezivní postendo. ošetření. Estetická gingivektomie – prof. D. Edelhoff C.D.T. |MUDr. Petr Hajný |MUDr. D.Ott |MUDr. M.Tomeček`},
        {
          type: LineType.ListItem,
          text: `Keramické fazety jako nejspolehlivější zubní náhrada`
        },
        {
          type: LineType.ListItem,
          text: `Infection Prevention and Sterilization – Christian Stempf`
        },
        {
          type: LineType.ListItem,
          text: `Příprava fyzické osoby zajišťující radiační ochranu registranta pro zubní RTG pracoviště`},
        {
          type: LineType.ListItem,
          text: `Bezpečnost a ochrana zdraví při práci a požární ochrana ve stomatologické praxi`},
        {
          type: LineType.ListItem,
          text: `Proč prevence selhává – MUDr. Jiří Sedelmayer`
        },
        {
          type: LineType.ListItem,
          text: `Plzeňské pracovní dny`
        }
      ]
    }
  ];
}
