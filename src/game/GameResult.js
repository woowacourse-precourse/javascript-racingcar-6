import IOManager from "../utils/IOManager.js";

class GameResult {
  constructor() {
    this.ioManager = new IOManager();
  }
  
  calculateWinner(carsName, carsPosition) {
    const winnerPosition = Math.max(...carsPosition);
    const winnerNames = carsName.filter((_, index) => carsPosition[index] === winnerPosition);
    return this.ioManager.printWinner(winnerNames);
  }
}

export default GameResult;
