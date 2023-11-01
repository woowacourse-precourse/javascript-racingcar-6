import RacingCar from '../src/RacingCar';
import CarRace from '../src/CarRace';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('CarRace 생성자 확인', () => {
  test('racingCars, attempts 필드 확인', () => {
    // given
    const racingCarInput = 'pobi,woni';
    const attemptsInput = '1';

    // when
    const carRace = new CarRace(racingCarInput, attemptsInput);

    // then
    expect(carRace.racingCars).toEqual([
      new RacingCar('pobi'),
      new RacingCar('woni'),
    ]);
    expect(carRace.attempts).toEqual(1);
  });

  test('race 함수 동작 확인', () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const racingCarInput = 'pobi,woni';
    const attemptsInput = '1';
    const output = 'pobi : -';
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockRandoms(randoms);

    // when
    const carRace = new CarRace(racingCarInput, attemptsInput);
    carRace.race();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test('printWinners 함수 동작 확인', () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const racingCarInput = 'pobi,woni';
    const attemptsInput = '1';
    const output = '최종 우승자 : pobi';
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockRandoms(randoms);

    // when
    const carRace = new CarRace(racingCarInput, attemptsInput);
    carRace.race();
    carRace.printWinners();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
