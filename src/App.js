import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  position() {
    return `${Car.name}: ${Car.position}`;
  }
}

function applyCarName(totalCarNum, carNameArr) {
  const carArr = [];
  for (let i = 0; i < totalCarNum; i++) {
    let car = new Car(carNameArr[i], 0);
    carArr.push(car);
  }
  return carArr;
}

class App {
  async play() {}

  async getCarName() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameArr = carNames.split(",");
    const totalCarNum = carNameArr.length;
    return [carNameArr, totalCarNum];
  }

  async getMoveCount() {
    const moveCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    return moveCount;
  }
}

export default App;
