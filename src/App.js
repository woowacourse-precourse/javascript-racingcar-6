import * as MissionUtils from "@woowacourse/mission-utils";
class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  progress() {
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

    const SET_CAR = new Set();

    CARS_ARRAY.forEach((name) => {
      SET_CAR.add(name);
      if (name.length < 1 || name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5글자 이하로 입력해야 합니다.");
      }
    });

    if (CARS_ARRAY.length !== SET_CAR.size) {
      throw new Error("[ERROR] 중복된 이름이 존재합니다.");
    }

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

  printResult(COUNT_NUMBER, CARS) {
    MissionUtils.Console.print("\n");
    MissionUtils.Console.print("실행 결과");

    for (let count = 1; count <= COUNT_NUMBER; count++) {
      CARS.forEach((car) => {
        car.progress();

        MissionUtils.Console.print(car.name + " : " + "-".repeat(car.position));
      });
      MissionUtils.Console.print("\n");
    }
  }

  async announceTheWinner(CARS) {
    let winner = [];

    await CARS.sort((a, b) => b.position - a.position);

    winner.push(CARS[0].name);

    for (let i = 1; i < CARS.length; i++) {
      if (CARS[0].position === CARS[i].position) {
        winner.push(CARS[i].name);
      } else {
        break;
      }
    }

    if (winner.length === 1) {
      MissionUtils.Console.print(`최종 우승자 : ${winner[0]}`);
    } else {
      MissionUtils.Console.print(`최종 우승자 : ${winner.join(", ")}`);
    }
  }

  async play() {
    const CARS_ARRAY = await this.inputCarName();
    const CARS = await this.saveCarName(CARS_ARRAY);
    const COUNT_NUMBER = await this.inputCountNumber();
    this.printResult(COUNT_NUMBER, CARS);
    this.announceTheWinner(CARS);
  }
}

const app = new App();
app.play();

export default App;
