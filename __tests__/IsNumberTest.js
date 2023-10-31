import { MainGame } from '../src/MainGame.js';

describe('시도할 횟수 함수 테스트', () => {
  test('1이상 자연수가 아닐때', () => {
    const input = '-2';

    expect(() => {
      MainGame.isNumber(input);
    }).toThrow();
  });

  test('숫자가 아닐때', () => {
    const input = 'five';

    expect(() => {
      MainGame.isNumber(input);
    }).toThrow();
  });
});
