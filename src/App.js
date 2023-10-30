import { Console, Random } from "@woowacourse/mission-utils";
import { Car } from "./Car.js";
import { NORMAG_MSG, ERROR_MSG } from "./constants.js";

class App {
  async play() {
    const carsName = await this.receiveUserInput(NORMAG_MSG.INPUT_CARS_NAME);
    const cars = this.seperateNames(carsName);
    this.isNotDuplicate(cars);
    const gamesNum = await this.receiveUserInput(NORMAG_MSG.INPUT_GAME_NUM);
    const num = this.isValidGameNum(gamesNum);
    const carArr = [];

    cars.forEach(el => {
      const newCar = new Car(el);
      carArr.push(newCar);
    });

    this.printMsg(NORMAG_MSG.RESULT);

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
    if(!name.match(regEx)) throw new Error(this.makeErrorMsg(ERROR_MSG.INVALID_NAME));
  }

  isValidLen(name) {
    if((name.length < 1) || (name.length > 5)) throw new Error(this.makeErrorMsg(ERROR_MSG.INVALID_LENGTH));
  }

  isNotDuplicate(nameArr) {
    if(new Set(nameArr).size !== nameArr.length) throw new Error(this.makeErrorMsg(ERROR_MSG.DUPLICATE));
  }

  isValidGameNum(num) {
    const regEx = /[1-9]\d*/;
    if(!num.match(regEx)) throw new Error(this.makeErrorMsg(ERROR_MSG.NOT_A_NUMBER));
    return Number(num);
  }

  makeErrorMsg(str){
    return `[ERROR] ${str}`;
  }
}

export default App;