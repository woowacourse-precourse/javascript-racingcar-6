import { Get, Make, Print } from './modules/AppModules.js';

class App {
  async play() {
    const racingInfo = await Make.racingInfo();
    Print.racingResultFrom(racingInfo);
    Print.winnerFrom(Get.winnerNameList(racingInfo));
  }
}

export default App;
