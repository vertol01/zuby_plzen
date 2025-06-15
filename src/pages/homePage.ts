import * as b from 'bobril';
import * as Rows from '.././components/Rows/lib';
import * as TextArea from '.././components/TextArea/lib';
import * as Constants from '.././constants';
import * as Color from '../colors';
import * as Fonts from '../components/Font/lib';

import { IParagraph, LineType } from '../components/TextArea/data';

export const homePage = b.createVirtualComponent({
  id: 'homePage',
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
    me.children = [getText()];
  }
});

function getText() {
  return Rows.create({
    alignment: Rows.Align.Stretch,
    rows: [
      {
        content: TextArea.create({
          header: {
            text: 'Dovolená léto 2025',
            underline: true
          },
          paragraphs: [
            {
              lines: [
                {
                  text:
                    '23.6. - 11.7. zástup  pouze v případě neodkladného zákroku v dopoledních hodinách po předchozí domluvě.',
                  type: LineType.Regular
                }
              ]
            },
            {
              lines: [
                {
                  text:
                    'Dr. Pečenka (5.patro, tel: 373 723 555)',
                  type: LineType.Regular
                }
              ]
            },
            {
              lines: [
                {
                  text:
                    'Dr. Kocourová (5.patro, tel: 373 723 227)',
                  type: LineType.Regular
                }
              ]
            },
            {
              textAlign: TextArea.TextAlign.Right,
              lines: [
                {
                  text:
                    'Děkujeme za pochopení',
                  type: LineType.Regular
                }
              ]
            },
            {
              textAlign: TextArea.TextAlign.Right,
              lines: [
                {
                  text:
                    'ZuBy s.r.o.',
                  type: LineType.Regular
                }
              ]
            },
            {
              textAlign: TextArea.TextAlign.Right,
              lines: [
                {
                  text:
                    'MDDr. Jana Bystřická',
                  type: LineType.Regular
                }
              ]
            }
          ]
        })
      }
    ]
  });
}