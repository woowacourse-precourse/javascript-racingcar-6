const { Console } = require('@woowacourse/mission-utils');
const { default: InputView } = require('../src/views/InputView');

describe('InputView 테스트', () => {
  const mockQuestion = (input) => {
    Console.readLineAsync = jest.fn();
    Console.readLineAsync.mockReturnValue(input);
  };

  test('inputCarNames 메서드 테스트', async () => {
    // given
    mockQuestion('ma,ria');

    // when
    const carNames = await InputView.inputCarNames();

    // then
    expect(carNames).toEqual(['ma', 'ria']);
  });

  test('inputRaceRounds 메서드 테스트', async () => {
    // given
    mockQuestion('5');

    // when
    const raceRounds = await InputView.inputRaceRounds();

    // then
    expect(raceRounds).toEqual(5);
  });
});
