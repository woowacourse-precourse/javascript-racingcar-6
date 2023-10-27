import RacingInfo from '../class/RacingInfo.js';
import ConvertInputTo from './ConvertInputTo.js';

class Make {
  static async racingInfo() {
    info = new RacingInfo();
    info.carList = ConvertInputTo.carList();
    info.numberOfGame = ConvertInputTo.numberOfGame();
    info.didItRun = new Array(numberOfGame)
      .fill(null)
      .map(() => new Array(carList).fill(false));
    return info;
  }
}

export default Make;
