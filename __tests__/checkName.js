const Game = require('../src/Game');
const game = new Game();
describe(' 영문, 한글 , 쉼표만 허용하는 함수 checkName()', () => {
  const ENG_KOR_COMMA = 'aㅓ,dk';
  const NUM_SPECIAL = '$115^&';
  test(' 영문, 한글, 쉼표 일때 true', () => {
    expect(game.checkName(ENG_KOR_COMMA)).toBe(true);
  });
  test('영문, 한글, 쉼표 아닐때 false', () => {
    expect(game.checkName(NUM_SPECIAL)).toBe(false);
  });
});
