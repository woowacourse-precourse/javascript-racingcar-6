import { Random, Console } from '@woowacourse/mission-utils';

const MESSAGE = {
  ENTER_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
};

class App {
  async play() {}
}

const getCarNames = async () => {
  const carNames = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  checkCarNameIsValid(carNames);
};

getCarNames();

const getTryNumber = () => {};

const checkCarNameIsValid = (userInput) => {};

const checkTryNumberIsValid = (userInput) => {};

export default App;
