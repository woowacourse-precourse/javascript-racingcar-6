import { Console } from '@woowacourse/mission-utils';
import RacingGame from '../src/RacingGame.js';
import Validation from '../src/Validation.js';
import Car from '../src/Car.js';
import SettingCars from '../src/SettingCars.js';

const mockRacingCountInput = (racingCount) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(racingCount);
  });
};

const mockSettingCars = (carsNamesInput) => {
  SettingCars.registerCars = jest.fn();

  SettingCars.registerCars.mockImplementation(() => {
    const carsNamesArray = carsNamesInput.split(',');
    return carsNamesArray.forEach((name) => new Car(name));
  });
};

describe('레이싱 게임 플레이와 관련된 함수 테스트', () => {
  const racingGame = new RacingGame(
    mockSettingCars('테스트1, 테스트2, 테스트3'),
  );

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
});
