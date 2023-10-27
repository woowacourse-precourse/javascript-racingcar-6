import InputValidator from '../domain/InputValidator.js';
import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const nameList = carNames.split(',').map((name) => name.trim());

    const validList = nameList.map((name) => {
      return InputValidator.hasValidCarName(name);
    });

    if (!InputValidator.hasValidUniqueName(nameList)) {
      throw new Error('[ERROR] 중복되는 이름이 존재합니다.');
    }

    if (validList.includes(false)) {
      throw new Error('[ERROR] 이름은 1글자 이상 5자 이하여야 합니다.');
    }

    if (!InputValidator.hasValidCountCars(nameList.length)) {
      throw new Error('[ERROR] 최소 2개 이상의 이름이 필요합니다.');
    }

    return nameList;
  },
};

export default InputView;

console.log(await InputView.getCarNames());
