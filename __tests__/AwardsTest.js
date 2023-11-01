import Awards from '../src/models/Awards.js';

describe('Awards 실행 결과', () => {
  let awards;

  beforeEach(() => {
    awards = new Awards();
  });

  test(`단일 최다 득점자 'getWinners()' 테스트`, () => {
    const outputs = 'tesla';
    const result = [
      ['tesla', 4],
      ['benz', 3],
    ];

    awards.getWinners(result);

    expect(awards.getWinners(result)).toBe(outputs);
  });

  test(`복수 최다 득점자 'getWinners()' 테스트`, () => {
    const outputs = 'tesla, benz';
    const result = [
      ['tesla', 4],
      ['benz', 4],
    ];

    awards.getWinners(result);

    expect(awards.getWinners(result)).toBe(outputs);
  });
});
