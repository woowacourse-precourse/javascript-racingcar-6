import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
  static reportDistance(...cars) {
    let carDistances = cars.reduce((acc, car) => {
      if (acc[car.name]) {
        acc[car.name] += car.distance;
      } else {
        acc[car.name] = car.distance;
      }
      return acc;
    }, {});

    for (let key in carDistances) {
      MissionUtils.Console.print(`${key} : ` + "-".repeat(carDistances[key]));
    }
    return carDistances;
  }
  static addDistance(car) {
    car.distance += 1;
  }
}

class App {
  constructor() {
    this.carInstance = [];
    this.resultDictionary = {};
  }

  canMove() {
    let move = MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
    return move;
  }

  validationInput(carList) {
    //MissionUtils.Console.print(carList);
    if (!carList.every((car) => car.length < 5)) {
      throw new Error("[ERROR] 자동차 이름은 4자 이하만 가능 합니다");
    }
    if (carList.length !== [...new Set(carList)].length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 존재합니다");
    }
  }

  async play() {
    let carList = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    carList = carList.split(",").map((car) => car.trim());
    this.validationInput(carList);

    for (const name of carList) {
      this.carInstance.push(new Car(name));
    }

    let tryCnt = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    MissionUtils.Console.print("실행결과");
    for (let i = 0; i < Number(tryCnt); i++) {
      this.carInstance
        .filter(this.canMove)
        .forEach((car) => Car.addDistance(car));

      this.resultDictionary = {
        ...Car.reportDistance(...this.carInstance),
      };
    }

    let highestVal = Math.max.apply(null, Object.values(this.resultDictionary));
    let val = Object.keys(this.resultDictionary).filter((a) => {
      return this.resultDictionary[a] === highestVal;
    });
    MissionUtils.Console.print(`최종우승자 : ${val.join(",")}`);
  }
}

export default App;
