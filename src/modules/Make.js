import RacingInfo from '../class/RacingInfo.js';
import ConvertInputTo from './ConvertInputTo.js';
import Get from './Get.js';

class Make {
  static async racingInfo() {
    info = new RacingInfo();
    info.carList = ConvertInputTo.carList();
    info.numberOfGame = ConvertInputTo.numberOfGame();
    info.didItRun = Get.didItRun(numberOfGame, carList.length);
    return info;
  }
}

export default Make;
