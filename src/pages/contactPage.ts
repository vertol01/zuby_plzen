import * as b from 'bobril';

import * as Map from '.././components/GoogleMap/lib';
import * as TextArea from '.././components/TextArea/lib';
import * as Rows from '.././components/Rows/lib';

export const contactPage = b.createVirtualComponent({
    id: 'constactPage',
    init() {
        console.log('init');
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {

        let map = Map.create(
            {
                apiKey: 'AIzaSyAGo4HE3j_HjuL64-CoBgS-GVwCbR_UWGc',
                center: { lat: 49.730125, lng: 13.373137 },
                zoom: 17,
                marker: { position: { lat: 49.730, lng: 13.373 } }
            }
        );
        me.children = [
            Rows.create({
                alignment: Rows.Align.Stretch,
                rows: [
                    { content: TextArea.create({ text: getText() }) },
                    { content: map },
                ]
            })
        ];
    }
})

function getText() {
    return [
        `MDDr. Jana Bystřická`,
        `Telefon 733 269 177 | 373 723 223`,
        `ZuBy s.r.o.`,
        `Čechova 2641/44`,
        `301 00 Plzeň`,
        `IČO:`,
        `Registrační číslo`,
    ];
}import * as b from 'bobril';

import * as Map from '.././components/GoogleMap/lib';
import * as TextArea from '.././components/TextArea/lib';
import * as Rows from '.././components/Rows/lib';

export const contactPage = b.createVirtualComponent({
    id: 'constactPage',
    init() {
        console.log('init');
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {

        let map = Map.create(
            {
                apiKey: 'AIzaSyAGo4HE3j_HjuL64-CoBgS-GVwCbR_UWGc',
                center: { lat: 49.730125, lng: 13.373137 },
                zoom: 17,
                marker: { position: { lat: 49.730, lng: 13.373 } }
            }
        );
        me.children = [
            Rows.create({
                alignment: Rows.Align.Stretch,
                rows: [
                    { content: TextArea.create({ text: getText() }) },
                    { content: map },
                ]
            })
        ];
    }
})

function getText() {
    return [
        `MDDr. Jana Bystřická`,
        `Telefon 733 269 177 | 373 723 223`,
        `ZuBy s.r.o.`,
        `Čechova 2641/44`,
        `301 00 Plzeň`,
        `IČO:`,
        `Registrační číslo`,
    ];
}

`ORDINAČNÍ HODINY`
`Pacienty ošetřujeme pouze po předchozím telefonickém objednání.`
`Objednávejte se prosím na tel.: 733 269 177 nebo 373 723 223. Děkujeme.`
`PO 8-14`
`ÚT 8-16`
`ST 8-14`
`ČT 8-14`
`PÁ 8-12`

`ORDINACE`
`Poliklinika Bory, 6. Patro`
`Čechova 44, Plzeň`
`Spojení | tramvaj 4`
`autobus 29`
`trolejbus 16`

`Jsme smluvním zařízením zdravotních pojišťoven:`
`Všeobecná zdravotní pojišťovna (111)`
`Vojenská zdravotní pojišťovna České republiky (201)`
`Česká průmyslová zdravotní pojišťovna (205)`
`Oborová zdravotní pojišťovna zaměstnanců bank, pojišťoven a stavebnictví (207)`
`Zdravotní pojišťovna Ministerstva vnitra České republiky (211)`

`Časově vytíženým pacientům nabízíme vyšetření mimo ordinační za poplatek 1.500 Kč.`