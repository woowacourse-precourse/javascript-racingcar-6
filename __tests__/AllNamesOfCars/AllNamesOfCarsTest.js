import AllNamesOfCars from '../../src/models/AllNamesOfCars.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessages.js';
import AppError from '../../src/error/AppError.js';

describe('모든 자동차 입력값을 담당하는 클래스에 대한 테스트', () => {
  test('정상적인 입력값이 들어갔을때의 정상적인 배열 값을 반환한다.', () => {
    const inputString = 'pobi,woni,jun';

    const allNamesOfCars = AllNamesOfCars.fromInputString(inputString);
    const result = allNamesOfCars.getAllCars();

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  test('중복된 자동차 이름이 들어갔을 때 예외가 발생한다.', () => {
    const inputString = 'pobi,pobi,jun';

    expect(() => {
      AllNamesOfCars.fromInputString(inputString);
    }).toThrow(new AppError(ERROR_MESSAGES.have_duplication));
  });

  test('중복된 자동차 이름이 들어갔을 때 예외가 발생한다(2).', () => {
    const inputString = 'pobi,POBI,jun';

    expect(() => {
      AllNamesOfCars.fromInputString(inputString);
    }).toThrow(new AppError(ERROR_MESSAGES.have_duplication));
  });

  test('참가 자동차가 1대일때 예외가 발생한다.', () => {
    const inputString = 'pobi';

    expect(() => {
      AllNamesOfCars.fromInputString(inputString);
    }).toThrow(new AppError(ERROR_MESSAGES.out_of_range_of_cars));
  });
});
