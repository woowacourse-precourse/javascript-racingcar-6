import { Console, Random } from '@woowacourse/mission-utils';
import RacingGame from '../src/RacingGame.js';
import Car from '../src/Car.js';
import SettingCars from '../src/SettingCars.js';

const mockRacingCountInput = (racingCount) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(racingCount);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const mockSettingCars = (carsNamesInput) => {
  const carsNamesArray = carsNamesInput.split(',');
  const registeredCars = carsNamesArray.map((name) => new Car(name));

  SettingCars.registerCars = jest.fn().mockReturnValue(registeredCars);

  return registeredCars;
};

describe('레이싱 게임 플레이와 관련된 함수 테스트', () => {
  const racingGame = new RacingGame(mockSettingCars('테스트1,테스트2,테스트3'));

  // getRacingCount 함수 테스트
  test('게임 시도 횟수를 숫자로 변환하여 반환하는지 테스트', async () => {
    const racingCountInput = '5';
    mockRacingCountInput(racingCountInput);
    const racingCount = await racingGame.getRacingCount();

    expect(typeof racingCount).toBe('number');
  });

  test.each([
    ['-1'],
    ['숫자 아님']
  ])('유효하지 않는 게임 시도 횟수에 대한 예외 처리 테스트', async (inputs) => {
    mockRacingCountInput(inputs);

    await expect(racingGame.getRacingCount()).rejects.toThrow('[ERROR]');
  });

  // playRacing 함수 테스트
  test('자동차 전진(이동) 테스트', () => {
    const MOVE_NUMBER = 5;
    const STAY_NUMBER = 1;
    const controlRandoms = [MOVE_NUMBER, STAY_NUMBER, MOVE_NUMBER];

    mockRandoms([...controlRandoms]);
    racingGame.playRacing();

    racingGame.carsList.forEach((car, index) => {
      if (controlRandoms[index] === MOVE_NUMBER) {
        expect(car.location).toBe(1);
      } else {
        expect(car.location).toBe(0);
      }
    });
  });

  // showGameStatus 함수 테스트
  test('게임 현황 출력 테스트', () => {
    const gameStatus = ['테스트1 : -', '테스트2 : ', '테스트3 : -'];
    const getGameStatusPrintSpy = jest.spyOn(Console, 'print');

    racingGame.showGameStatus();

    gameStatus.forEach((eachStatus) => {
      expect(getGameStatusPrintSpy).toHaveBeenCalledWith(
        expect.stringContaining(eachStatus),
      );
    });
  });

  // findWinner 함수 테스트
  test('게임 우승자 반환 테스트', () => {
    racingGame.findWinner();

    expect(racingGame.winnersList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: '테스트1' }),
        expect.objectContaining({ name: '테스트3' }),
      ]),
    );
  });
});
