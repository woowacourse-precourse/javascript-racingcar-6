import Move from "./Move.js";
import Validator from "./Validator.js";
import Winner from "./Winner.js";

class Utility {
  constructor() {
    this.move = new Move();
    this.validator = new Validator();
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

  validation(num) {
    return this.validator.validation(num);
  }
  whosWinner(obj) {
    return this.winner.whosWinner(obj);
  }
}
export default Utility;
