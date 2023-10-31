import { Console } from '@woowacourse/mission-utils';
import SettingCars from '../src/SettingCars.js';
import Validation from '../src/Validation.js';
import ErrorHandler from '../src/ErrorHandler.js';

const mockCarsNamesInput = (carsNamesInput) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(carsNamesInput);
  });
};

describe('게임에 참여할 자동차를 설정하는 테스트', () => {
  const validation = new Validation();

  test('자동차 이름 유효성 검사 여부 테스트', async () => {
    const isValidCarNameSpy = jest.spyOn(validation, 'isValidCarName');

    const carsNamesInput = '제네시스,벤츠';
    mockCarsNamesInput(carsNamesInput);

    await SettingCars.registerCars();

    expect(isValidCarNameSpy).toHaveBeenCalledWith('제네시스');
    expect(isValidCarNameSpy).toHaveBeenCalledWith('벤츠');
  });
});
