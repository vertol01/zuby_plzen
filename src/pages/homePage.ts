
import * as b from 'bobril';
import * as Rows from '.././components/Rows/lib';
import * as TextArea from '.././components/TextArea/lib';
import * as Constants from '.././constants';

export const homePage = b.createVirtualComponent({
    id: 'homePage',
    init() {
        console.log('init');
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {


        me.children = getText();
    }
})

function getText() {
    let headertext = "Nová zubní ordinace";
    var text = [
        `Eria quiae perspid eos maximinum iliqui temquam etur sunt.`,
        `Et, sundae volum faci quam, conem earchicae laboreperume nectur, siminct orehenet
        utemque et facillabo. Tio magnimo ssumqui non et lacia con consediatqui ape corro
        berro est aut occatios quae suntur, con rehendi toreperi comnis essit mintio. Saerro
        qui deratur eperum sandebis evenihi cabore, officaectiis qui nobit ex expelici is imin
        comnimetur, que explitissum in el et, odiscit atusdam, te ma cone cum et, sum atur,
        il iderovit as ab in comnima ximust, sum reiusda pero maio. Neque dunt ex excestion
        coriant magnim conecta aut es sum que molo di dis quia volupit ipsandae eate velique
        nectiature ped quo magnatur rerunt officiae. Hicae pro voloreratur ra vel invellecus
        nonsed quo evenis qui dolori inveliciant.`];

    return Rows.create(
        {
            alignment: Rows.Align.Stretch,
            rows: [
                {
                    content: b.styledDiv(
                        TextArea.create(
                            {
                                header: headertext,
                                text: text
                            }
                        ),
                        { flex: '1 1 100%'}
                    ),
                    
                },
                {
                    content: b.styledDiv(
                        TextArea.create(
                            {
                                header: headertext,
                                text: text
                            }
                        ),
                        { marginTop: Constants.textBlockMargin , flex: '1 1 100%'}
                    )
                },
                {
                    content: b.styledDiv(
                        TextArea.create(
                            {
                                header: headertext,
                                text: text
                            }
                        ),
                        { marginTop: Constants.textBlockMargin  , flex: '1 1 100%'}
                    )
                },
                {
                    content: b.styledDiv(
                        TextArea.create(
                            {
                                header: headertext,
                                text: text
                            }
                        ),
                        { marginTop: Constants.textBlockMargin  , flex: '1 1 100%'}
                    )
                },
                {
                    content: b.styledDiv(
                        TextArea.create(
                            {
                                header: headertext,
                                text: text
                            }
                        ),
                        { marginTop: Constants.textBlockMargin  , flex: '1 1 100%'}
                    )
                }
            ]
        }
    );
}