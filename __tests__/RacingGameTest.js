import { Console, Random } from '@woowacourse/mission-utils';
import RacingGame from '../src/racingcar/lib/classes/RacingGame';
import RacingGameInputManager from '../src/racingcar/lib/classes/RacingGameInputManager';

// 사용자 입력을 가로채기 위한 모의 함수를 만드는 함수
const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

describe('자동차 경주 게임', () => {
  test('전진-정지', async () => {
    // given
    const inputs = ['pobi,woni,jena', '1'];
    const randoms = [4, 3, 5];

    mockQuestions(inputs);
    mockRandoms(randoms);

    // when
    const gameInputManager = new RacingGameInputManager();
    const racingInfo = await gameInputManager.getRacingInfo();
    const rasingGameInstance = new RacingGame(racingInfo);
    rasingGameInstance.countScore();

    // then
    expect(rasingGameInstance.racingCars[0].score).toBe(1);
    expect(rasingGameInstance.racingCars[1].score).toBe(0);
    expect(rasingGameInstance.racingCars[2].score).toBe(1);
  });
});
