const Game = require('../src/Game');
const game = new Game();
describe(' 영문, 한글 , 쉼표만 허용하는 함수 checkName()', () => {
  test(' 영문, 한글, 쉼표 일때 true', () => {
    expect(game.checkName('aㅓ,dk')).toBe(true);
  });
  test('영문, 한글, 쉼표 아닐때 false', () => {
    expect(game.checkName('$115^&')).toBe(false);
  });
});
