import { MainGame } from '../src/MainGame.js';

describe('includesBlank 함수 테스트', () => {
  test('이름 앞으로 공백이 존재하는지 확인', () => {
    const input = 'pobi, giri, gora';

    expect(() => {
      MainGame.isIncludeBlank(input);
    }).toThrow();
  });

  test('이름 뒤로 공백이 존재하는지 확인', () => {
    const input = 'pobi , giri , gora';

    expect(() => {
      MainGame.isIncludeBlank(input);
    }).toThrow();
  });
});
