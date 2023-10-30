import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {}

  // 자동차 이름 입력받기
  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const carNamesArr = carNames.split(',');
    carNamesArr.forEach((carName) => this.validateCarName(carName));

    return carNamesArr;
  }

  // 자동차 이름 검증하기
  validateCarName(carName) {
    if (!carName) throw new Error('[ERROR] 입력값이 없습니다.');
    if (!/^[A-Za-z]+$/.test(carName))
      throw new Error(
        '[ERROR] 자동차 이름은 공백없이 알파벳 문자만 포함해야 합니다.',
      );
    if (carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자리 이하여야 합니다.');
  }
}

export default App;
