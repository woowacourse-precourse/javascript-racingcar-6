import Move from "./Move.js";
import Winner from "./Winner.js";
import CarName from "./CarName.js";

class Utility {
  constructor() {
    this.move = new Move();
    this.carName = new CarName();
    this.winner = new Winner();
  }
  getRandomNumber(min, max) {
    return this.move.getRandomNumber(min, max);
  }
  isAbleToMove(number) {
    return this.move.isAbleToMove(number);
  }
  moveCurrent(obj) {
    return this.move.moveCurrent(obj);
  }

  createToRightObj(names) {
    return this.carName.createToRightObj(names);
  }
  whosWinner(obj) {
    return this.winner.whosWinner(obj);
  }
}
export default Utility;
