import { Console } from '@woowacourse/mission-utils';
import SettingCars from '../src/SettingCars.js';
import Car from '../src/Car.js';
import ErrorHandler from '../src/ErrorHandler.js';

const mockCarsNamesInput = (carsNamesInput) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(carsNamesInput);
  });
};

describe('게임에 참여할 자동차를 설정하는 테스트', () => {
  test('Car 인스턴스 배열 반환 여부 테스트', async () => {
    const carsNamesInput = '제네시스,벤츠';
    mockCarsNamesInput(carsNamesInput);

    const registerCarsOutput = await SettingCars.registerCars();

    registerCarsOutput.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
    });

    expect(registerCarsOutput).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: '제네시스' }),
        expect.objectContaining({ name: '벤츠' }),
      ]),
    );
  });
});
