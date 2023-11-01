import { validateCarsInput, validateCountInput } from '../src/view/InputView.js';
import {
  ERROR_CARS_EMPTY,
  ERROR_CARS_LENGTH,
  ERROR_CARS_DUPLICATED,
  ERROR_CARS_SPLIT,
  ERROR_COUNT_EMPTY,
  ERROR_COUNT_NOT_NUMBER,
} from '../src/constants/ErrorString.js';

describe('자동차 이름 입력 예외 상황', () => {
  test('아무 값도 입력하지 않았을 경우', async () => {
    const input = '';

    expect(() => validateCarsInput(input)).toThrow(ERROR_CARS_EMPTY);
  });

  test('입력한 자동차 이름이 5자 이하가 아닐 경우', async () => {
    const input = 'pobi,woniiii,1';

    expect(() => validateCarsInput(input)).toThrow(ERROR_CARS_LENGTH);
  });

  test('자동차 이름이 서로 같을 경우', async () => {
    const input = 'pobi,pobi,world';

    expect(() => validateCarsInput(input)).toThrow(ERROR_CARS_DUPLICATED);
  });

  test('맨 앞과 마지막이 쉼표로 끝 날 경우', async () => {
    const inputs = ['pobi,hello,pobi,', ',pobi,hello,342'];

    inputs.forEach(input => {
      expect(() => validateCarsInput(input)).toThrow(ERROR_CARS_SPLIT);
    });
  });
});

describe('시도 횟수 입력 예외 상황', () => {
  test('아무 값도 입력하지 않았을 경우', async () => {
    const input = '';

    expect(() => validateCountInput(input)).toThrow(ERROR_COUNT_EMPTY);
  });

  test('숫자가 아닌 경우', async () => {
    const input = 'a';

    expect(() => validateCountInput(input)).toThrow(ERROR_COUNT_NOT_NUMBER);
  });
});
