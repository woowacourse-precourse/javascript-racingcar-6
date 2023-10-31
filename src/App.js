import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const cars = this.inputValidation(input);
      const howManyTry = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      await this.game(cars, howManyTry);
    }
    catch (error) {
      throw new Error("[ERROR]")
    }
  }

  /** input 쪼개고 검증 */
  inputValidation(input) {
    if (input.length === null || input.length === "") {
      throw new Error("[ERROR] 잘못된 형식의 이름입니다.")
    } else {
      const cars = input.split(',');
      const howManyCars = cars.length();
      for (let i = 0; i < howManyCars; i++) {
        this.eachInputValidaion(cars[i]);
      }
      return cars;
    }
  }

  /** 각 자동차에 대한 검증 */
  eachInputValidaion(input) {
    if (input === null || input === "") {
      throw new Error("[ERROR] 잘못된 형식의 이름입니다.")
    } else if (input.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요.")
    } else {
      return 0;
    }
  }
}

export default App;
