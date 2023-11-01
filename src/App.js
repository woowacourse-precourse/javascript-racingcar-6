import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import { validateInputCar, valiateRound, makeSet } from './utills.js';
import Input from './Input.js';

class App {
  #carsList;
  #around;

  async play() {
    await this.getInputs();
    this.#carsList = makeSet(this.#carsList);
    this.runGame();
    this.printWinner();
  }

  async getInputs() {
    this.#carsList = await Input.readCarString;

    this.#around = await new Input(MESSAGES.inputRound, valiateRound).InputUser;
  }

  runGame() {
    Console.print(MESSAGES.printResult);
    while (this.#around > 0) {
      this.#around -= 1;
      race(this.#carsList);
      printPosition(this.#carsList);
    }
  }

  printWinner() {
    const winners = this.findWinners();
    Console.print(`${MESSAGES.printWinner}${winners}`);
  }

  race() {
    for (let car in this.#carsList) {
      if (isMove()) {
        this.#carsList[car] += 1;
      }
    }
  }

  findWinners() {
    const winnerLength = Math.max(...Object.values(this.#carsList));
    let winnerList = [];
    for (let car in carList) {
      if (carList[car] === winnerLength) {
        winnerList.push(car);
      }
    }

    return winnerList.join(',');
  }
}
export default App;
function isMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) {
    return true;
  }
  return false;
}
function printPosition(obj) {
  for (let car in obj) {
    Console.print(`${car} : ${'-'.repeat(obj[car])}`);
  }
}
