import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  start() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분")
  }

  async getCarNames() {
    const names = await Console.readLineAsync();
    const carNamesArray = names.split(',').map(name => name.trim());
    return carNamesArray;
  }

  nameException(carNamesArray) {
    if (this.hasDuplicates(carNamesArray)) {
      throw new Error('[ERROR] 올바른 값을 입력하세요');
    }
  }

  hasDuplicates(carNamesArray) {
    const uniqueNames = new Set(carNamesArray);
    return uniqueNames.size !== carNamesArray.length; //다르면 참 반환
  }

  vaildateCarNamesLength(carNamesArray) {
    carNamesArray.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 올바른 값을 입력하세요');
      }
    });
  }
  async play() {
    this.start();
    try {
      const carNames = await this.getCarNames();
      this.nameException(carNames);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
