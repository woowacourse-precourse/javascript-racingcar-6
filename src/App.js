import * as MissionUtils from "@woowacourse/mission-utils";
class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  prograss() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.position += 1;
    }
  }
}

class App {
  async inputCarName() {
    await MissionUtils.Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    const INPUT_CAR_NAME = await MissionUtils.Console.readLineAsync("");

    const CARS_ARRAY = INPUT_CAR_NAME.split(",");

    CARS_ARRAY.forEach((name) => {
      if (name.length < 1 || name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5글자 이하로 입력해야 합니다.");
      }
    });

    return await CARS_ARRAY;
  }

  async saveCarName(CARS_ARRAY) {
    const CARS = [];

    CARS_ARRAY.forEach((name) => {
      const car = new Car(name);
      CARS.push(car);
    });

    return CARS;
  }

  async inputCountNumber() {
    await MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");

    const COUNT_NUMBER = parseFloat(
      await MissionUtils.Console.readLineAsync("")
    );

    if (!Number.isInteger(COUNT_NUMBER) || COUNT_NUMBER <= 0) {
      throw new Error("1 이상의 정수를 입력해주세요.");
    }

    return COUNT_NUMBER;
  }

  async play() {
    const CARS_ARRAY = await this.inputCarName();
    await this.saveCarName(CARS_ARRAY);
    MissionUtils.Console.print(await this.inputCountNumber());
  }
}

const app = new App();
app.play();

export default App;
