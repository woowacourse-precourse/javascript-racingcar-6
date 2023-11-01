import { Random, Console } from "@woowacourse/mission-utils";

class App {
  cars;
  carResults = [];
  numberOfTrials;
  async getCarName() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.cars = carInput.split(",");
    if (this.cars.some((car) => car.length > 5)) {
      //cars배열안에 5글자가 넘는 이름이 있는지 검사
      throw new Error("[ERROR] 자동차의 이름은 5자 이하여야 합니다.");
    }
    if (new Set(this.cars).size !== this.cars.length) {
      // 중복된 이름이 있는지 검사
      throw new Error("[ERROR] 중복된 이름이 있습니다.");
    }

    this.carResults = new Array(this.cars.length).fill("");
  }
  async getTrial() {
    const trialNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    if (isNaN(trialNumber)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다");
    }
    if (trialNumber < 0) {
      throw new Error("[ERROR] 음수는 입력 불가합니다");
    }
    this.trialNumber = trialNumber;
  }
  getRandom() {
    const random = Random.pickNumberInRange(0, 9);
    if (random >= 4) {
      return "-";
    } else {
      return "";
    }
  }
  async game() {
    Console.print("게임 실행 결과");
    for (let j = 0; j < this.trialNumber; j++) {
      for (let i = 0; i < this.cars.length; i++) {
        const result = this.getRandom();
        this.carResults[i] += result;
        Console.print(`${this.cars[i]} : ${this.carResults[i]}`);
      }
      console.log("");
    }
  }
  async play() {}
}

export default App;
