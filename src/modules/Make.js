import ConvertInputTo from './ConvertInputTo.js';
import Get from './Get.js';

class Make {
  static async racingInfo() {
    const info = {};
    info.carList = await ConvertInputTo.carList();
    info.numberOfGame = await ConvertInputTo.numberOfGame();
    info.runListArray = Get.runListArray(
      info.carList.length,
      info.numberOfGame
    );
    return Object.freeze(info);
  }
}

export default Make;
