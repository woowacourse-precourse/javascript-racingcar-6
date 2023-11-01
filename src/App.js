import { Console } from '@woowacourse/mission-utils';
import generateCarDataListFromStr from './feature/GenerateCarDataListFromStr.js';
import getValidCarNameStr from './feature/GetValidCarNameStr.js';
import getValidTotalRoundNumber from './feature/GetValidTotalRoundNumber.js';
import moveCarRandomly from './feature/MoveCarRandomly.js';
import announceWinner from './feature/AnnounceWinner.js';
import announceRoundResult from './feature/AnnounceRoundResult.js';

class App {
  constructor() {
    this.carDataList = []; // [{name:string, distance:number},]
  }

  async play() {
    const carNameStr = getValidCarNameStr();

    const initialCarDataList = generateCarDataListFromStr(carNameStr);
    this.updateCarDataList(initialCarDataList);

    const totalRoundNumber = getValidTotalRoundNumber();

    Console.print('실행 결과');
    for (let round = 0; round < totalRoundNumber; round += 1) {
      const roundResult = moveCarRandomly(this.carDataList);
      announceRoundResult(roundResult);
      this.updateCarDataList(roundResult);
    }

    announceWinner(this.carDataList);
  }

  updateCarDataList(newCarDataList) {
    this.carDataList = newCarDataList;
  }
}
const app = new App();
app.play();
export default App;
