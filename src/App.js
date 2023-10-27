import { Random, Console } from '@woowacourse/mission-utils';

const MESSAGE = {
  ENTER_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ERROR: '[ERROR] 숫자가 올바른 형식이 아닙니다.',
};

class App {
  async play() {}
}

const getCarNames = async () => {
  const carNames = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  checkCarNamesAreValid(carNames);
};

const getTryNumber = () => {};

const checkCarNamesAreValid = (userInput) => {
  const input = userInput.split(',');

  const inputHaveOverName = input.find((carName) => carName.length > 5);

  if (inputHaveOverName) {
    throw new Error('[ERROR] 숫자가 올바른 형식이 아닙니다.');
  }
};

const checkTryNumberIsValid = (userInput) => {};

export default App;
