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

  showPosition() {
    let dashPosition = '-'.repeat(this.position);
    Console.print(`${this.name} : ${dashPosition}`);
  }
}

function createCarArray(carNameArr) {
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

function getWinner(carArr) {
  let winners = [];
  let winnerPosition = 0;
  carArr.forEach((car) => {
    if (winnerPosition < car.position) {
      winnerPosition = car.position;
      winners = [car.name];
    } else if (winnerPosition === car.position) {
      winners.push(car.name);
    }
  });
  return winners;
}

class App {
  async play() {
    let carNameArr = await this.getCarName();
    isCarNameEmpty(carNameArr);
    isCarNameOverFiveLetters(carNameArr);
    isCarNameSame(carNameArr);

    let racingRound = await this.getRoundCount();

    let carArr = createCarArray(carNameArr);

    Console.print('\n실행 결과');
    this.runRace(carArr, racingRound);
    let winners = getWinner(carArr);
    Console.print(`최종 우승자 : ${winners}`);
  }

  oneRound(carArr) {
    carArr.forEach((car) => {
      car.goForward();
      car.showPosition();
    });
  }

  runRace(carArr, racingRound) {
    for (let i = 0; i < racingRound; i++) {
      this.oneRound(carArr);
      Console.print('\n');
    }
  }

  async getCarName() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNameArr = carNames.split(',');
    return carNameArr;
  }

  async getRoundCount() {
    const roundCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return roundCount;
  }
}

export default App;
