import { Console } from '@woowacourse/mission-utils';
import announceRoundResult from './feature/AnnounceRoundResult';
import generateCarDataListFromStr from './feature/GenerateCarDataListFromStr';
import getValidCarNameStr from './feature/GetValidCarNameStr';
import getValidTotalRoundNumber from './feature/GetValidTotalRoundNumber';
import moveCarRandomly from './feature/MoveCarRandomly';

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

export default App;
