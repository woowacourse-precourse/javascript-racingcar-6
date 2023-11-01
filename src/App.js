/* eslint-disable no-restricted-globals */
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import { Console, Random } from '@woowacourse/mission-utils';

const Message = Object.freeze({
  ASK_CAR_NAME : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ASK_TRY_TIMES : '시도할 횟수는 몇 회인가요?\n',
  ERROR : {
    BLANK : '[ERROR] 아무것도 입력되지 않았습니다.',
    OVER_FIVE_CHARACTERS : '[ERROR] 자동차 이름은 5글자 이하로 설정하세요.',
    ZERO_CHARACTERS : '[ERROR] 자동차 이름을 1글자 이상 5글자 이하로 설정하세요.',
    MORE_THAN_TWO : '[ERROR] 2개 이상의 자동차 이름을 입력하세요.',
    DUBLICATE_NAME : '[ERROR] 자동차 이름이 중복되었습니다.',
    NOT_NUMBER : '[ERROR] 시도 횟수를 입력하세요.'
  }
});

class Car {
  constructor(name) {
    this.name = name;
    this.randomNumber = 0;
    this.move = '';
    this.moveNumber = 0;
  }
}

class App {
  makeCars(cars) {
    for (let i = 0; i < cars.length; i += 1) {
      cars[i] = new Car(cars[i]);
    }
    return cars;
  }

  async inputCarNames() {
    const carNameInput = await Console.readLineAsync(Message.ASK_CAR_NAME);
    if (carNameInput.length === 0) throw new Error(Message.ERROR.BLANK);
    const cars = [...new Set(carNameInput.split(',').map(String))];
    for (let i = 0; i < cars.length; i += 1) {
      if (cars[i].length > 5) throw new Error(Message.ERROR.OVER_FIVE_CHARACTERS);
      if (cars[i].length === 0) throw new Error(Message.ERROR.ZERO_CHARACTERS);
      if (cars.length < 2) throw new Error(Message.ERROR.MORE_THAN_TWO);
      if (cars.length !== carNameInput.split(',').length) throw new Error(Message.ERROR.DUBLICATE_NAME);
    }
    return cars;
  }

  async inputTryTimes() {
    const times = await Console.readLineAsync(Message.ASK_TRY_TIMES);
    if (isNaN(times)) throw new Error(Message.ERROR.NOT_NUMBER);
    return times;
  }

  getEachCarsRandomNumber(cars) {
    for (let i = 0; i < cars.length; i += 1) {
      cars[i].randomNumber = Random.pickNumberInRange(0, 9);
    }
  }

  getEachCarsMove(cars) {
    for (let i = 0; i < cars.length; i += 1) {
      if(cars[i].randomNumber >= 4) {
        cars[i].move += '-';
        cars[i].moveNumber += 1;
      }
    }
  }

  exportEachRoundResults(cars) {
    for (let i = 0; i < cars.length; i += 1) {
      Console.print(`${cars[i].name} : ${cars[i].move}` );
    }
  }

  exportWinner(cars) {
    let winner = '';
    for (let i = 0; i < cars.length - 1; i += 1) {
      if (cars[i].moveNumber < cars[i + 1].moveNumber) [cars[i], cars[i + 1]] = [cars[i + 1], cars[i]];
    }
    winner += cars[0].name;
    for (let i = 0; i < cars.length - 1; i += 1) {
      if (cars[0].moveNumber > cars[i + 1].moveNumber) break;
      winner += `, ${cars[i + 1].name}`;
    }
    return winner;
  }

  async exportEntireResults(cars, times) {
    Console.print('실행 결과\n');
    for (let i = 0; i < times; i += 1) {
      this.getEachCarsRandomNumber(cars);
      this.getEachCarsMove(cars);
      this.exportEachRoundResults(cars);
      Console.print('\n');
    }
    Console.print(`최종우승자 : ${this.exportWinner(cars)}`);
  } 

  async play() {
    const cars = await this.inputCarNames();
    const times = await this.inputTryTimes();
    this.makeCars(cars);
    await this.exportEntireResults(cars, times);
  }
}

export default App;
