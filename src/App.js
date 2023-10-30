import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      const carNamesString = await this.getUserInputCarNames();

      const isCarNamesValid = this.isEveryCarNameValid(carNamesString);
      if (!isCarNamesValid) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다. ');
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getUserInputCarNames() {
    return await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분'
    );
  }
  isEveryCarNameValid(string) {
    const carNames = string.split(',');
    const filteredCarNames = carNames.filter((carName) => carName.length <= 5);

    if (carNames.length === filteredCarNames.length) {
      return true;
    } else if (carNames.length !== filteredCarNames.length) {
      return false;
    }
  }
}

export default App;
