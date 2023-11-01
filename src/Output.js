import { Console } from '@woowacourse/mission-utils';
import CarMotion from './CarMotion';
import FindIndex from './FindIndex';
import { MESSAGE } from './Message';

const carMotion = new CarMotion;
const findIndex = new FindIndex;

class Output {
  constructor(car,moveCount,tryCount) {
    this.car = car;
    this.moveCountArr = moveCount;
    this.tryCount = tryCount;
  }
  printResult() {
    for(let i in this.car) {
      Console.print(`${this.car[i]} : ${'-'.repeat(this.moveCountArr[i])}`);
    }
    console.log("");
  }
  runWhileFinish() {
    let isFinish = false;
    while(!isFinish){
      this.printResult(carMotion.moveOrStop(this.car,this.moveCountArr));
      if(this.moveCountArr.join('').indexOf(this.tryCount) != '-1') {
        isFinish = true;
      }
    }
  }
  printOneWinner() {
      Console.print(`${MESSAGE.WINNER_MESSAGE} ${this.car[this.moveCountArr.join('').indexOf(this.tryCount)]}`);
  }
  printSeveralWinner(result){
    let severalWinner = [];
    for(let i in result) {
      severalWinner.push(this.car[result[i]]);
    }
    Console.print(`${MESSAGE.WINNER_MESSAGE} ${severalWinner.join(',')}`);
  }
  whoIsWinner() {
    let winnerCount = 0;
    winnerCount = this.moveCountArr.filter(el => el == this.tryCount).length;
    if(winnerCount >= 2) {
      let result = findIndex.findArrayIndex(this.moveCountArr,this.tryCount);
      this.printSeveralWinner(result);
    }
    this.printOneWinner();
  }
}

export default Output;