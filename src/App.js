import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.car = [];
    this.movement = [];
    this.carCount = 0;
  }

  async play() {
    await this.playGame();
  }
  
  // 입력
  async inputRaceCars() {
    const raceCars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const raceCar = raceCars.split(',');
    this.checkInputRaceCars(raceCar);
    this.carCount = raceCar.length;
    this.car = [...raceCar];
    this.movement = raceCar.map(name => name + ' : ');
  }

  async inputMoveCount() {
    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.checkInputMoveCount(Number(moveCount));
    return Number(moveCount);
  }

  checkInputRaceCars(raceCars) {
    raceCars.forEach((car) => {
      if (car.length > 5)
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
  makeRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
  }

  calculateMovement() {
    let index = 0;
    while (index < this.carCount) {
      const randomNumber = this.makeRandomNumber();
      if (randomNumber >= 4) this.movement[index] += '-';
      index += 1;
    }
  }

  calculateWinner() {
    const result = this.movement.map((move, index) => move.length - this.car[index].length);
    const max = Math.max(...result);
    const indexesOfMax = [];
    result.forEach((value, index) => {
        if (value === max) {
            indexesOfMax.push(index);
        }
    });
    return indexesOfMax;
  }

  // 출력
  printGameProgress() {
    this.movement.forEach(result => {
      Console.print(result);
    })
  }

  printGameWinner() {
    const winnerIndexes = this.calculateWinner();
    const winners = winnerIndexes.map(playerIndex => this.car[playerIndex]);
    const winnerMessage = winners.join(', ');
    Console.print(`최종 우승자 : ${winnerMessage}`);
  }

  async playGame() {
    await this.inputRaceCars();
    let moveCount = await this.inputMoveCount();
    Console.print('실행 결과');
    while (moveCount > 0) {
      this.calculateMovement();
      this.printGameProgress();
      Console.print(' ');
      moveCount -= 1;
    }
    this.printGameWinner();
  }
}

export default App;
