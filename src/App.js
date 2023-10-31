import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carList = {};
    this.tryNum = 0;
  }

  async play() {
    const userInputCar = await this.carInput();
    const splitInputCar = userInputCar.split(',');
    this.racingCarList(splitInputCar);

    this.tryNum = await this.numInput();
    this.game();
    const winnerList = this.winner();
    this.printWinner(winnerList);
  }

  async carInput() {
    const userInputCar = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    return userInputCar;
  }

  async numInput() {
    const userInputNum =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return userInputNum;
  }

  racingCarList(userInput) {
    for (let i = 0; i < userInput.length; i++) {
      this.carList[userInput[i]] = '';
    }
  }

  carMoving() {
    for (const car in this.carList) {
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) {
        this.carList[car] += '-';
      }
    }
  }

  printMessage() {
    for (const car in this.carList) {
      const msg = `${car} : ${this.carList[car]}`;
      Console.print(msg);
    }
    Console.print('');
  }

  game() {
    Console.print('\n실행결과\n');
    while (this.tryNum > 0) {
      this.carMoving();
      this.printMessage();
      this.tryNum -= 1;
    }
  }

  winner() {
    let maxValue = -Infinity;
    let winners = [];
    for (const key in this.carList) {
      const value = this.carList[key].length;

      if (value > maxValue) {
        maxValue = value;
        winners = [key];
      } else if (value === maxValue) {
        winners.push(key);
      }
    }
    return winners;
  }

  printWinner(winnerList) {
    let msg = `최종 우승자 : `;
    for (let i = 0; i < winnerList.length; i++) {
      if (i === winnerList.length - 1) {
        msg += `${winnerList[i]}`;
      } else if (i !== winnerList.length - 1) {
        msg += `${winnerList[i]}, `;
      }
    }
    Console.print(msg);
  }
}

const app = new App();
app.play();

export default App;
