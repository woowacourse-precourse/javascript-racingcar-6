import { Console } from '@woowacourse/mission-utils';
import RacingGame from './../src/RacingGame';

const mockQuestion = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('자동차 입력을 테스트합니다.', () => {
  test('콤마로 구분하여 자동차 이름을 배열로 얻습니다.', async () => {
    // given
    const input = 'crong,pobi,rupee';
    const answers = ['crong', 'pobi', 'rupee'];

    mockQuestion(input);

    // when
    const racingGame = new RacingGame();
    const cars = await racingGame.inputRacingCarNames(input);

    // then
    expect(cars).toEqual(answers);
  });

  test('다섯 자리가 넘는 입력이 있으면 예외를 발생시키고 애플리케이션을 종료합니다.', async () => {
    // given
    const input = 'pobi,crong,pororo';

    mockQuestion(input);

    // when & then
    const racingGame = new RacingGame();
    await expect(racingGame.inputRacingCarNames(input)).rejects.toThrow("[ERROR]");
  })
});
