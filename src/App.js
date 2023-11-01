import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carList = {};
    this.tryNum = 0;
  }

  async play() {
    const userInputCar = await this.carInput();

    //유효성 검사
    this.checkCarInput(userInputCar);
    const splitInputCar = userInputCar.split(',');
    this.checkDupliCar(splitInputCar);

    this.tryNum = await this.numInput();
    this.checkDupliCar(splitInputCar);
    
    this.racingCarList(splitInputCar);
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

  checkCarInput(userInput) {
    const carRegex = /^[a-zA-Z]{1,5}(,[a-zA-Z]{1,5})*$/;
    if (carRegex.test(userInput) === false) {
      throw new Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
  }

  checkDupliCar(carList) {
    const check = [];
    carList.forEach((car) => {
      if (check.includes(car)) {
        throw new Error('[ERROR] 중복된 이름이 있습니다.');
      }
      check.push(car);
    });
  }

  async numInput() {
    const userInputNum =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return userInputNum;
  }

  checkNumInput() {
    const numRegex = /^[1-9]*$/;
    if (!numRegex.test(this.tryNum)) {
      throw new Error('[ERROR] 1-9 사이의 숫자만 입력 가능합니다.');
    }
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
