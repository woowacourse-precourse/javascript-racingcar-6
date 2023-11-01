import View from '../src/View.js';

describe('ViewTest', () => {
  test('writeRoundResult', () => {
    const result = new Map([
      ['pobi', 2],
      ['woni', 4],
      ['jun', 3],
    ]);
    const message = `pobi : --
woni : ----
jun : ---

`;
    expect(View.writeRoundResult(result)).toBe(message);
  });

  test('writeTotalResultsMessage', () => {
    const totalResults = [
      new Map([
        ['pobi', 1],
        ['woni', 0],
        ['jun', 1],
      ]),
      new Map([
        ['pobi', 2],
        ['woni', 1],
        ['jun', 2],
      ]),
      new Map([
        ['pobi', 3],
        ['woni', 2],
        ['jun', 3],
      ]),
      new Map([
        ['pobi', 4],
        ['woni', 3],
        ['jun', 4],
      ]),
      new Map([
        ['pobi', 5],
        ['woni', 4],
        ['jun', 5],
      ]),
    ];
    const message = `
실행 결과
pobi : -
woni : 
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

`;
    expect(View.writeTotalResultsMessage(totalResults)).toBe(message);
  });

  describe('writeWinnerMessage', () => {
    test('단독 우승자 안내 문구', () => {
      expect(View.writeWinnerMessage(['pobi'])).toBe('최종 우승자 : pobi');
    });
    test('공동 우승자 안내 문구', () => {
      expect(View.writeWinnerMessage(['pobi', 'jun'])).toBe(
        '최종 우승자 : pobi, jun',
      );
    });
  });
});
