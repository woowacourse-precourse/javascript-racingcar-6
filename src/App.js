import { ConvertInputTo, Get, Print } from './modules/AppModules.js';

class App {
  async play() {
    const racingInfo = await ConvertInputTo.racingInfo();
    Print.racingResultFrom(racingInfo);
    Print.winnerFrom(Get.winnerNameList(racingInfo));
  }
}

export default App;
