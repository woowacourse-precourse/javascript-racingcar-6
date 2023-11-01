import winnerCalculate from '../../src/calulate/winner';

describe('우승자 계산기 테스트', () => {
  let consoleOutput;

  beforeAll(() => {
    const logSpy = jest.spyOn(console, 'log');
    logSpy.mockImplementation((message) => {
      consoleOutput = message;
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('거리 값이 가장 큰 우승자 출력(우승자가 한 명인 경우)', () => {
    const input = [
      { name: 'woowa', distance: 3 },
      { name: 'eunki', distance: 5 },
      { name: 'ksy', distance: 2 },
    ];

    winnerCalculate(input);

    expect(consoleOutput).toStrictEqual('최종 우승자 : eunki');
  });

  test('거리 값이 가장 큰 우승자 출력(우승자가 여러 명인 경우)', () => {
    const input = [
      { name: 'woowa', distance: 5 },
      { name: 'eunki', distance: 5 },
      { name: 'ksy', distance: 3 },
    ];
    winnerCalculate(input);

    expect(consoleOutput).toStrictEqual('최종 우승자 : woowa, eunki');
  });
});
