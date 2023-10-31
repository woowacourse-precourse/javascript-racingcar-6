import Car from '../src/Car';
import RaceGame from '../src/RaceGame';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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

describe('RaceGame 테스트', () => {
  test('경주 시작 준비 테스트', async () => {
    // given
    const inputs = ['pobi,woni', '1'];
    const carList = [new Car('pobi'), new Car('woni')];
    const raceNumber = '1';

    // when
    mockQuestions(inputs);
    const raceGame = new RaceGame();
    const result = await raceGame.racePreparation();

    // then
    expect(result).toHaveProperty('carList', carList);
    expect(result).toHaveProperty('raceNumber', raceNumber);
  });

  test('경주 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '2'];
    const outputs = ['pobi : -', 'woni : --'];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const raceGame = new RaceGame();
    await raceGame.racingStart();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('경주 결과 출력 테스트', () => {
    // given
    const pobi = new Car('pobi');
    pobi.score = ['-', '-'];
    const woni = new Car('woni');
    woni.score = ['-'];
    const output = 'pobi';
    const logSpy = getLogSpy();

    // when
    const raceGame = new RaceGame();
    raceGame.racingResult([pobi, woni]);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
