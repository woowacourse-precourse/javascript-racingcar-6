import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const cars = await this.inputCarNames();
    await this.exportResult(cars);
  }

  async inputCarNames() {
    const carNameInput = await Console.readLineAsync(Message.askCarName);
    if(carNameInput.length === 0) throw new Error(Message.error.blank);
    const cars = [...new Set(carNameInput.split(',').map(String))];
    for(let i = 0; i < cars.length; i++) {
      if(cars[i].length > 5) throw new Error(Message.error.overFiveCharacters);
      if(cars[i].length === 0) throw new Error(Message.error.sameCarName);
      if(cars.length < 2) throw new Error(Message.error.moreThanTwoCars);
    }
    return this.constructCars(cars);
  }

  constructCars(cars) {
    for(let i = 0; i < cars.length; i++) {
      cars[i] = new Car(cars[i]);
    }
    return cars;
  }

  async inputTryTimes() {
    const times = await Console.readLineAsync(Message.askTryTimes);
    if(isNaN(times)) throw new Error(Message.error.notNumber);
    return times;
  }

  getEachCarsMove(cars) {
    for(let i = 0; i < cars.length; i++) {
      cars[i].randomNumber = Random.pickNumberInRange(0, 9);
      if(cars[i].randomNumber >= 4) cars[i].move += '-';
      Console.print(`${cars[i].name} : ${cars[i].move}` );
    }
    return;
  }

  async exportResult(cars) {
    const times = await this.inputTryTimes();
    Console.print('실행 결과\n');
    for(let i = 0; i < times; i++) {
      this.getEachCarsMove(cars);
      Console.print('\n');
    }
    Console.print('최종우승자 : ' + this.exportWinner(cars));
    return;
  }

  exportWinner(cars) {
    let winner = '';
    for(let i = 0; i < cars.length - 1; i++) {
      if(cars[i].move.length < cars[i + 1].move.length) [cars[i], cars[i + 1]] = [cars[i + 1], cars[i]];
    }
    winner += cars[0].name;
    for(let i = 0; i < cars.length - 1; i++) {
      if(cars[0].move.length > cars[i + 1].move.length) break;
      winner += ', '+ cars[i + 1].name;
    }
    return winner;
  }
}

class Car {
  constructor(name) {
    this.name = name;
    this.randomNumber;
    this.move = '';
  }
}

const Message = Object.freeze({
  askCarName : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  askTryTimes : '시도할 횟수는 몇 회인가요?\n',
  error : {
    blank : '[ERROR] 아무것도 입력되지 않았습니다.',
    overFiveCharacters : '[ERROR] 자동차 이름은 5글자 이하로 설정하세요.',
    zeroCharacter : '[ERROR] 자동차 이름을 1글자 이상 5글자 이하로 설정하세요.',
    moreThanTwoCars : '[ERROR] 2개 이상의 자동차 이름을 입력하세요.',
    notNumber : '[ERROR] 시도 횟수를 입력하세요.'
  }
});

const app = new App();

export default App
