import IOManager from "../utils/IOManager.js";

class GameResult {
  constructor() {
    this.ioManager = new IOManager();
  }
  
  calculateWinner(carsName, carsPosition) {
    let winnerPosition = Math.max(...carsPosition);
    return this.ioManager.printWinner(carsName[carsPosition.indexOf(winnerPosition)]);
  }
}

export default GameResult;