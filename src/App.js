import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.car = [];
    this.movement = [];
    this.numberOfCars = 0;
  }

  async play() {}
  
  // 입력
  async inputCarNames() {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carName = carNames.split(',');
    this.checkInputCarNames(carName);
    this.numberOfCars = carName.length;
    this.car = [...carName];
    this.movement = carName.map(name => name + ' : ');
  }

  async inputMoveCount() {
    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.checkInputMoveCount(Number(moveCount));
    return Number(moveCount);
  }

  checkInputCarNames(carName) {
    carName.forEach((player) => {
      if (player.length > 5)
        throw new Error("[ERROR] 자동차 이름의 문자가 5글자를 초과했습니다.");
    })
  }

  checkInputMoveCount(moveCount) {
    if (moveCount <= 0) {
      throw new Error("[ERROR] 입력한 값이 음수이거나 0 입니다.");
    }
    if (isNaN(moveCount)) {
      throw new Error("[ERROR] 입력한 값이 문자입니다.");
    }
  }

   // 기능
  generateRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
  }

  decideMovement() {
    let index = 0;
    while (index < this.numberOfCars) {
      const randomNumber = this.generateRandomNumber();
      if (randomNumber >= 4) this.movement[index] += '-';
      index += 1;
    }
  }

  decideWinner() {
    const result = this.movement.map((move, index) => move.length - this.car[index].length);
    const max = Math.max(...result);
    const indexesOfMax = [];
    lengthsOfMovement.forEach((value, index) => {
        if (value === max) {
            indexesOfMax.push(index);
        }
    });
    return indexesOfMax;
  }
}

export default App;
