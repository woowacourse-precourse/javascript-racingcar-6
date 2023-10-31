import { Console } from '@woowacourse/mission-utils';
import { printErrorMessage, printMessage } from './utils/messages.js';

const validateNameInput = input => {
  if (input.some(item => item.length > 5)) {
    printErrorMessage('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
  }
  return input;
};

const validateCountInput = input => {
  if (Number.isNaN(Number(input)) || Number(input) <= 0) {
    printErrorMessage('[ERROR] 이동 횟수는 0 이상의 숫자여야 합니다.');
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
