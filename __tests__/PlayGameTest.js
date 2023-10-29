import RacingGame from "../src/RacingGame.js";
import RacingCar from "../src/domain/RacingCar.js";
import GameUtlis from "../src/utils/GameUtils.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('게임 진행에 관한 테스트입니다', () => {
  test('시도 횟수만큼 게임이 반복됩니다.', () => {
    // given
    const input = 3;
    const racingGame = new RacingGame();
    racingGame.generateRacingCars(['pobi', 'crong', 'rupee']);
    racingGame.tryOneAttempt = jest.fn();

    // when
    GameUtlis.repeatRacing(input, racingGame);

    // then
    expect(racingGame.tryOneAttempt).toBeCalledTimes(input);
  });

  test('0부터 9사이의 무작위의 값이 나온다.', () => {
    // given
    const answers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // when
    const randomNumber = GameUtlis.generateRandomNumberFromZeroToNine();

    // then
    expect(answers).toContain(randomNumber);
  })

  test('포비가 3이라는 랜덤 값을 받아 pobi : --- 을 출력합니다.', () => {
    // given
    const randomNumber = [3];
    const answer = 'pobi : ---';
    const logSpy = getLogSpy();
    mockRandoms(randomNumber);

    // when
    const pobiNumber = GameUtlis.generateRandomNumberFromZeroToNine();
    GameUtlis.printCarNameAndRandomNumber('pobi', pobiNumber);
    
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(answer));
  });

  test('포비가 4라는 랜덤 값을 받아 포비가 전진합니다.', () => {
    // given
    const MOVED_FORWARD = 1;

    const randomNumber = [4];
    const answer = MOVED_FORWARD;
    mockRandoms(randomNumber);

    // when
    const pobiCar = new RacingCar('pobi');
    GameUtlis.proceedAttemptByRacingCar(pobiCar);

    // then
    expect(pobiCar.getAccumulatedForward()).toEqual(answer);
  });

  test('포비가 3이라는 랜덤 값을 받아 포비가 전진하지 않습니다.', () => {
    // given
    const STOP = 0;

    const randomNumber = [3];
    const answer = STOP;
    mockRandoms(randomNumber);

    // when
    const pobiCar = new RacingCar('pobi');
    GameUtlis.proceedAttemptByRacingCar(pobiCar);

    // then
    expect(pobiCar.getAccumulatedForward()).toEqual(answer);
  })
})