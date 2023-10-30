import { Console, Random } from "@woowacourse/mission-utils";
import { Car } from "./Car.js";

class App {
  async play() {
    const carsName = await this.receiveUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const cars = this.seperateNames(carsName);
    this.isNotDuplicate(cars);
    const gamesNum = await this.receiveUserInput('시도할 횟수는 몇 회인가요?\n');
    const num = this.isValidGameNum(gamesNum);
    const carArr = [];

    cars.forEach(el => {
      const newCar = new Car(el);
      carArr.push(newCar);
    });

    this.printMsg('\n실행 결과');

    for(let i = 0; i < num; i++){
      this.runOneCycle(carArr);
      this.printMsg('');
    };

    const winnerStr = `최종 우승자 : ${this.findWinners(carArr)}`;
    this.printMsg(winnerStr);
  }

  async receiveUserInput(guideMsg) {
    const userInput = await Console.readLineAsync(guideMsg);
    return userInput;
  }

  printMsg(msg) {
    Console.print(msg);
  }

  moveForward() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  runOneCycle(carArr) {
    carArr.forEach(el => {
      if(this.moveForward()) el.oneStepForward();
      this.printMsg(`${el.name} : ${'-'.repeat(el.step)}`);
    });
  }

  findWinners(carArr) {
    const maxStep = Math.max(...carArr.map(car => car.step));
    const winnerArr = carArr.filter(car => car.step == maxStep).map(el => el.name);
    return winnerArr.join(', ');
  }

  seperateNames(names) {
    const seperated = names.split(',');

    seperated.forEach(el => {
      this.isValidName(el);
    });

    seperated.forEach(el => {
      this.isValidLen(el);
    });

    return seperated;
  }

  isValidName(name) {
    const regEx = /^[a-z]*$/;
    if(!name.match(regEx)) throw new Error('[ERROR] 자동차 이름은 영문 소문자만 가능합니다.');
  }

  isValidLen(name) {
    if((name.length < 1) || (name.length > 5)) throw new Error('[ERROR] 자동차 이름의 길이는 1 이상, 5 이하입니다.');
  }

  isNotDuplicate(nameArr) {
    if(new Set(nameArr).size !== nameArr.length) throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
  }

  isValidGameNum(num) {
    const regEx = /[1-9]\d*/;
    if(!num.match(regEx)) throw new Error('[ERROR] 시도 횟수는 올바른 숫자값으로 입력해 주세요.');
    return Number(num);
  }
}

export default App;