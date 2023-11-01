import InputCars from '../src/Input/InputCars';
import InputMoveCount from '../src/Input/InputMoveCount';
import { ERROR_MESSAGES } from '../src/utils/messages';

const inputcars = new InputCars();
const moveCount = new InputMoveCount();
describe('input test', () => {
  test('자동차 이름 양쪽 공백 예외처리', () => {
    const inputs = ['pobi, aim'];
    const output = ERROR_MESSAGES.car_name_has_trailing_spaces;

    inputs.forEach(input => {
      expect(() => inputcars.validateCarNames(input.split(','))).toThrow(
        new Error(output),
      );
    });
  });

  test('자동차 이름 사이 공백 예외처리', () => {
    const inputs = ['pobi,a im'];
    const output = ERROR_MESSAGES.car_name_has_spaces;

    inputs.forEach(input => {
      expect(() => inputcars.validateCarNames(input.split(','))).toThrow(
        new Error(output),
      );
    });
  });

  test('자동차 이름 공백 예외처리', () => {
    const inputs = ['pobi,'];
    const output = ERROR_MESSAGES.car_name_empty;

    inputs.forEach(input => {
      expect(() => inputcars.validateCarNames(input.split(','))).toThrow(
        new Error(output),
      );
    });
  });

  test('자동차 이름 중복 예외처리', () => {
    const inputs = ['pobi,pobi'];
    const output = ERROR_MESSAGES.car_name_duplicated;

    inputs.forEach(input => {
      expect(() => inputcars.validateCarNames(input.split(','))).toThrow(
        new Error(output),
      );
    });
  });

  test('자동차 이름 길이 예외처리', () => {
    const inputs = ['pobi,pobiibop'];
    const output = ERROR_MESSAGES.car_name_too_long;

    inputs.forEach(input => {
      expect(() => inputcars.validateCarNames(input.split(','))).toThrow(
        new Error(output),
      );
    });
  });

  test('시도 횟수 입력 숫자 외의 입력 예외처리', () => {
    const input = 'a';
    const output = ERROR_MESSAGES.not_a_number;

    expect(() => moveCount.validateMoveCount(input)).toThrow(new Error(output));
  });

  test('시도 횟수 0 이하의 수 입력 예외처리', () => {
    const input = -1;
    const output = ERROR_MESSAGES.not_positive_integer;

    expect(() => moveCount.validateMoveCount(input)).toThrow(new Error(output));
  });

  test('시도 횟수 실수 입력 예외처리', () => {
    const input = 3.5;
    const output = ERROR_MESSAGES.not_an_integer;

    expect(() => moveCount.validateMoveCount(input)).toThrow(new Error(output));
  });
});
