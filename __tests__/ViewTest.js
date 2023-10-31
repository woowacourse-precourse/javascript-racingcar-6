import View from '../src/View.js';

describe('ViewTest', () => {
  test('writeResultMessage', () => {
    const results = [
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
    expect(View.writeResultMessage(results)).toBe(message);
  });
});
