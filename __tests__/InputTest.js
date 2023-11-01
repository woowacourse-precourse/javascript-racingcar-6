import InputCars from '../src/Input/InputCars';
import { ERROR_MESSAGES } from '../src/utils/messages';

const inputcars = new InputCars();
describe('input test', () => {
  test('양쪽 공백 예외처리', () => {
    const inputs = ['pobi, aim'];
    const output = ERROR_MESSAGES.car_name_has_trailing_spaces;

    inputs.forEach(input => {
      expect(() => inputcars.validateCarNames(input.split(','))).toThrow(
        new Error(output),
      );
    });
  });

  test('이름 사이 공백 예외처리', () => {
    const inputs = ['pobi,a im'];
    const output = ERROR_MESSAGES.car_name_has_spaces;

    inputs.forEach(input => {
      expect(() => inputcars.validateCarNames(input.split(','))).toThrow(
        new Error(output),
      );
    });
  });
});
