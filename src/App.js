import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {

  constructor() {
    this.racingCar = new Map();
  }

  async play() {

    await this.Usercar_input();

    let racingMap = this.racingCar;

    for (let i = await this.NumberOfAttempts(); i > 0; i--) {
      this.Update_Distance(racingMap);
      this.Print_Distance(racingMap);
    }
    
    const member = this.Find_Winner(racingMap);
    this.Print_Winner(member);
  }

  async Usercar_input() {

    const User_input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n');
    this.ValidNameLength(User_input);
    const Car = User_input.split(',');

    for (let i in Car) {
      this.racingCar.set(Car[i], "");
    }

    return this.racingcar;
  }
  
  async NumberOfAttempts() {

    const attempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
    this.ValidInputDataType(attempts);
    return Number(attempts);
  }

  async CheckMove() {
  CheckMove() {

    const num = Random.pickNumberInRange(0, 9);
    
    if (num >= 4) {
      return '-';
    } else {
      return '';
    }

  }

  Update_Distance(racingcar) {
    
    for (let [key, value] of racingcar) {
      racingcar.set(key, value + this.CheckMove());
    }
    
    return racingcar;
  }

  Print_Distance(racingcar) {
    Console.print('');
    
    for (let [key, value] of racingcar) {
      Console.print(key + " : " + value);
    }

  }

  
  Find_Winner(racingcar) {
    
    let Max_Distance = 0;
    const winner = [];

    for (let [key, value] of racingcar) {
      if (Max_Distance < value.length) {
        Max_Distance = value.length;
      }
    }

    for (let [key, value] of racingcar) {
      if (Max_Distance === value.length) {
        winner.push(key);
      }
    }

    return winner;
  }

  Print_Winner(member) {
    const winner = member;
    Console.print('');
    Console.print('최종 우승자 : ' + winner.map((winners) => winners).join(', '));
  }
  
  ValidInputExist(input) {
    if (!input) {
      throw new Error("[ERROR] 입력값이 없습니다.");
    }
  }

  ValidNameLength(input) {
    const length = input.split(",").map((value) => value);

    length.forEach(element => {
      if (element.length > 5) {
        throw new Error("[ERROR] 5자 이하로 이름을 지어주세요.");
      }
    });
  }

  ValidInputDataType(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
  }

const app = new App();
  ValidInput(input) {
    this.ValidInputExist(input);
    this.ValidNameLength(input);
  }

}

export default App;
