import Make from './modules/Make.js';
import Print from './modules/Print.js';
import Get from './modules/Get.js';

class App {
  async play() {
    const racingInfo = await Make.racingInfo();
    Print.racingResultFrom(racingInfo);
    Print.winnersFrom(Get.winnerNameList(racingInfo));
  }
}

export default App;
