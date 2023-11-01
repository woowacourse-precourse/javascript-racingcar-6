import { Console } from '@woowacourse/mission-utils';
import InputView from '../src/views/InputView.js';
import App from '../src/App.js';

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

  test('inputRaceRounds 음수 값을 넣었을 경우', async () => {
    // given
    mockQuestion('-1');

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
