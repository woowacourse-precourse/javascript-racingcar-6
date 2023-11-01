import { Console } from '@woowacourse/mission-utils';
import { printErrorMessage } from './utils/messages.js';
import ErrorMessages from './constants.js';

const validateNameInput = input => {
  if (input.some(item => item.length > 5)) {
    printErrorMessage(ErrorMessages.INVALID_CAR_NAME_MAX_LENGTH);
  }
  if (input.some(item => item.length === 0)) {
    printErrorMessage(ErrorMessages.INVALID_CAR_NAME_MIN_LENGTH);
  }
  if (new Set(input).size !== input.length) {
    printErrorMessage(ErrorMessages.INVALID_CAR_NAME_DUPLICATE);
  }
  return input;
};

const validateCountInput = input => {
  if (Number.isNaN(Number(input)) || Number(input) <= 0) {
    printErrorMessage(ErrorMessages.INVALID_COUNT);
  }
  return input;
};

const getUserInput = async () => {
  const nameInput = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n',
  ).then(res => res.split(',').map(item => item.trim()));
  const carNames = validateNameInput(nameInput);
  const countInput =
    await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
  const count = validateCountInput(countInput);
  return {
    carNames,
    count,
  };
};

export default getUserInput;
