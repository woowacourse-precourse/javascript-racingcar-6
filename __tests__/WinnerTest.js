import Award from '../src/models/Award';

describe('우승자 검증 테스트', () => {
  let award;

  beforeEach(() => {
    award = new Award();
  });

  test('단독 우승', () => {
    const outputs = 'kia';

    const result = [
      ['kia', 3],
      ['tesla', 2],
    ];

    award.getWinners(result);

    expect(award.getWinners(result)).toBe(outputs);
  });

  test('공동 우승', () => {
    const outputs = 'kia, tesla, volvo';

    const result = [
      ['kia', 3],
      ['tesla', 3],
      ['volvo', 3],
    ];

    award.getWinners(result);

    expect(award.getWinners(result)).toBe(outputs);
  });
});
