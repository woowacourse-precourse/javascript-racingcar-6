import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor(carName, forward) {
    this.carName = carName;
    this.forward = forward;
  }

  async play() {
    MissionUtils.Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    );

    const name = await this.getCarName();
    const cars = this.saveCarConstructor(name);
    MissionUtils.Console.print(name);

    const tryNum = await this.getNumberOfTry();

    MissionUtils.Console.print("실행 결과");

    for (let i = 0; i < tryNum; i += 1) {
      this.carMoveForward(cars);
    }
  }

  async getCarName() {
    const name = await MissionUtils.Console.readLineAsync();
    return name;
  }

  saveCarConstructor(name) {
    const nameList = name.split(",");
    const cars = nameList.map((carName) => new App(carName, ""));
    return cars;
  }

  async getNumberOfTry() {
    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const tryNum = await MissionUtils.Console.readLineAsync();
    return this.isValidNumberOfTry(Number(tryNum));
  }

  isValidNumberOfTry(tryNum) {
    if (Number.isNaN(tryNum)) {
      MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
      throw new Error("[ERROR]");
    } else {
      MissionUtils.Console.print(tryNum);
      MissionUtils.Console.print("");
      return tryNum;
    }
  }

  carMoveForward(cars) {
    cars.forEach((car) => {
      const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        car.forward = car.forward !== "" ? `${car.forward}-` : "-";
      }
      MissionUtils.Console.print(`${car.carName} : ${car.forward}`);
    });
    MissionUtils.Console.print("");
  }
}

export default App;
