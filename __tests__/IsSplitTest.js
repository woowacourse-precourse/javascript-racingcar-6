import { MainGame } from '../src/MainGame.js';

describe('splitComma 함수 테스트', () => {
  test('쉼표로 구분되지 않은 문자열을 처리할 때 에러가 발생하는지 확인', () => {
    const input = 'abc/def/ghi';

    expect(() => {
      MainGame.isSplitComma(input);
    }).toThrow();
  });

  test('입력받은 차량의수가 하나일때 에러가 발생하는지 확인', () => {
    const input = 'pobi';

    expect(() => {
      MainGame.isSplitComma(input);
    }).toThrow();
  });
});
