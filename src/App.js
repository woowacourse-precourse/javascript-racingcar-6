import { Console, MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  goForward() {
    let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position++;
    }
  }

  displayPosition() {
    Console.print(`${this.name} : ${this.position}`);
  }
}

function makeCarArray(carNameArr) {
  let carArr = [];
  carNameArr.forEach((element) => {
    carArr.push(new Car(element));
  });
  return carArr;
}

function isCarNameOverFiveLetters(carNameArr) {
  for (const name of carNameArr) {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }
  }
}

function isCarNameEmpty(carNameArr) {
  if (carNameArr.length === 0) {
    throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
  }
}

function isCarNameSame(carNameArr) {
  const carNameSet = new Set(carNameArr);
  if (carNameSet.size !== carNameArr.length) {
    throw new Error('[ERROR] 자동차 이름은 중복되지 않아야 합니다.');
  }
}

class App {
  async play() {
    let carNameArr = await this.getCarName();
    isCarNameEmpty(carNameArr);
    isCarNameOverFiveLetters(carNameArr);
    isCarNameSame(carNameArr);

    let racingRound = await this.getMoveCount();

    let carArr = makeCarArray(carNameArr);
    this.doRace(carArr, racingRound);
  }

  oneRound(carArr) {
    carArr.forEach((car) => {
      car.goForward();
      car.displayPosition();
    });
  }

  doRace(carArr, racingRound) {
    for (let i = 0; i < racingRound; i++) {
      this.oneRound(carArr);
    }
  }

  async getCarName() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const carNameArr = carNames.split(',');
    return carNameArr;
  }

  async getMoveCount() {
    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return moveCount;
  }
}

export default App;

// const app = new App();
// app.play();
