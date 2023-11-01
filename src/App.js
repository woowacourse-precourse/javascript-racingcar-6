import { Console } from '@woowacourse/mission-utils';
import generateCarDataListFromStr from './feature/GenerateCarDataListFromStr.js';
import getValidCarNameStr from './feature/GetValidCarNameStr.js';
import getValidTotalRoundNumber from './feature/GetValidTotalRoundNumber.js';
import UpdateCarDataListByRandom from './feature/UpdateCarDataListByRandom.js';
import announceWinner from './feature/AnnounceWinner.js';
import announceRoundResult from './feature/AnnounceRoundResult.js';
import { GAME_RESULT } from './Constants.js';

class App {
  constructor() {
    this.carDataList = []; // [{name:string, distance:number},]
  }

  async play() {
    const carNameStr = await getValidCarNameStr();

    const totalRoundNumber = await getValidTotalRoundNumber();

    const initialCarDataList = generateCarDataListFromStr(carNameStr);
    this.setCarDataList(initialCarDataList);

    Console.print(GAME_RESULT);

    for (let round = 0; round < totalRoundNumber; round += 1) {
      const roundResult = UpdateCarDataListByRandom(this.carDataList);
      announceRoundResult(roundResult);
      this.setCarDataList(roundResult);
    }

    announceWinner(this.carDataList);
  }

  setCarDataList(newCarDataList) {
    this.carDataList = newCarDataList;
  }
}

export default App;
