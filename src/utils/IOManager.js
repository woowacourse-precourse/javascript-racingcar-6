import { Console } from "@woowacourse/mission-utils";

class IOManager {
  async getUserInput(question) {
    return await Console.readLineAsync(question);
  }

  async getCarsName() {
    const cars = await this.getUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ');
    return cars.split(',').map((name) => name.trim());
  }
}

export default IOManager;
